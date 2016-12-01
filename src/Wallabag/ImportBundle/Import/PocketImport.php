<?php

namespace Wallabag\ImportBundle\Import;

use Psr\Log\NullLogger;
use Doctrine\ORM\EntityManager;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Wallabag\CoreBundle\Entity\Entry;
use Wallabag\CoreBundle\Helper\ContentProxy;
use Wallabag\CoreBundle\Tools\Utils;

class PocketImport extends AbstractImport
{
    private $client;
    private $accessToken;

    const NB_ELEMENTS = 5000;

    public function __construct(EntityManager $em, ContentProxy $contentProxy)
    {
        $this->em = $em;
        $this->contentProxy = $contentProxy;
        $this->logger = new NullLogger();
    }

    /**
     * Only used for test purpose.
     *
     * @return string
     */
    public function getAccessToken()
    {
        return $this->accessToken;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'Pocket';
    }

    /**
     * {@inheritdoc}
     */
    public function getUrl()
    {
        return 'import_pocket';
    }

    /**
     * {@inheritdoc}
     */
    public function getDescription()
    {
        return 'import.pocket.description';
    }

    /**
     * Return the oauth url to authenticate the client.
     *
     * @param string $redirectUri Redirect url in case of error
     *
     * @return string|false request_token for callback method
     */
    public function getRequestToken($redirectUri)
    {
        $request = $this->client->createRequest('POST', 'https://getpocket.com/v3/oauth/request',
            [
                'body' => json_encode([
                    'consumer_key' => $this->user->getConfig()->getPocketConsumerKey(),
                    'redirect_uri' => $redirectUri,
                ]),
            ]
        );

        try {
            $response = $this->client->send($request);
        } catch (RequestException $e) {
            $this->logger->error(sprintf('PocketImport: Failed to request token: %s', $e->getMessage()), ['exception' => $e]);

            return false;
        }

        return $response->json()['code'];
    }

    /**
     * Usually called by the previous callback to authorize the client.
     * Then it return a token that can be used for next requests.
     *
     * @param string $code request_token from getRequestToken
     *
     * @return bool
     */
    public function authorize($code)
    {
        $request = $this->client->createRequest('POST', 'https://getpocket.com/v3/oauth/authorize',
            [
                'body' => json_encode([
                    'consumer_key' => $this->user->getConfig()->getPocketConsumerKey(),
                    'code' => $code,
                ]),
            ]
        );

        try {
            $response = $this->client->send($request);
        } catch (RequestException $e) {
            $this->logger->error(sprintf('PocketImport: Failed to authorize client: %s', $e->getMessage()), ['exception' => $e]);

            return false;
        }

        $this->accessToken = $response->json()['access_token'];

        return true;
    }

    /**
     * {@inheritdoc}
     */
    public function import($offset = 0)
    {
        static $run = 0;

        $request = $this->client->createRequest('POST', 'https://getpocket.com/v3/get',
            [
                'body' => json_encode([
                    'consumer_key' => $this->user->getConfig()->getPocketConsumerKey(),
                    'access_token' => $this->accessToken,
                    'detailType' => 'complete',
                    'state' => 'all',
                    'sort' => 'newest',
                    'count' => self::NB_ELEMENTS,
                    'offset' => $offset,
                ]),
            ]
        );

        try {
            $response = $this->client->send($request);
        } catch (RequestException $e) {
            $this->logger->error(sprintf('PocketImport: Failed to import: %s', $e->getMessage()), ['exception' => $e]);

            return false;
        }

        $entries = $response->json();

        if ($this->producer) {
            $this->parseEntriesForProducer($entries['list']);
        } else {
            $this->parseEntries($entries['list']);
        }

        // if we retrieve exactly the amount of items requested it means we can get more
        // re-call import and offset item by the amount previous received:
        //  - first call get 5k offset 0
        //  - second call get 5k offset 5k
        //  - and so on
        if (count($entries['list']) === self::NB_ELEMENTS) {
            ++$run;

            return $this->import(self::NB_ELEMENTS * $run);
        }

        return true;
    }

    /**
     * Set the Guzzle client.
     *
     * @param Client $client
     */
    public function setClient(Client $client)
    {
        $this->client = $client;
    }

    /**
     * {@inheritdoc}
     *
     * @see https://getpocket.com/developer/docs/v3/retrieve
     */
    public function parseEntry(array $importedEntry)
    {
        $url = isset($importedEntry['resolved_url']) && $importedEntry['resolved_url'] != '' ? $importedEntry['resolved_url'] : $importedEntry['given_url'];
        $title = isset($importedEntry['given_title']) && $importedEntry['given_title'] != '' ? $importedEntry['given_title'] : 'No title found';
        $content = isset($importedEntry['excerpt']) ? $importedEntry['excerpt'] : '';

        $existingEntry = $this->em
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId($url, $this->user->getId());

        if (false !== $existingEntry) {
            ++$this->skippedEntries;

            return;
        }

        $entry = new Entry($this->user);
        $entry->setUrl($url);
        $entry->setTitle($title);
        $entry->setContent($content);
        $entry->setReadingTime(Utils::getReadingTime($content));

        $domainName = parse_url($entry->getUrl(), PHP_URL_HOST);
        if (false !== $domainName) {
            $entry->setDomainName($domainName);
        }

        // update entry with content (in case fetching failed, the given entry will be return)
        $entry = $this->fetchContent($entry, $url);

        // 0, 1, 2 - 1 if the item is archived - 2 if the item should be deleted
        $entry->setArchived($importedEntry['status'] == 1 || $this->markAsRead);

        // 0 or 1 - 1 If the item is starred
        $entry->setStarred($importedEntry['favorite'] == 1);

        $title = 'Untitled';
        if (isset($importedEntry['resolved_title']) && $importedEntry['resolved_title'] != '') {
            $title = $importedEntry['resolved_title'];
        } elseif (isset($importedEntry['given_title']) && $importedEntry['given_title'] != '') {
            $title = $importedEntry['given_title'];
        }

        $entry->setTitle($title);

        // 0, 1, or 2 - 1 if the item has images in it - 2 if the item is an image
        if (isset($importedEntry['has_image']) && $importedEntry['has_image'] > 0 && isset($importedEntry['images'][1])) {
            $entry->setPreviewPicture($importedEntry['images'][1]['src']);
        }

        if (isset($importedEntry['tags']) && !empty($importedEntry['tags'])) {
            $this->contentProxy->assignTagsToEntry(
                $entry,
                array_keys($importedEntry['tags']),
                $this->em->getUnitOfWork()->getScheduledEntityInsertions()
            );
        }

        if (!empty($importedEntry['time_added'])) {
            $entry->setCreatedAt((new \DateTime())->setTimestamp($importedEntry['time_added']));
        }

        $this->em->persist($entry);
        ++$this->importedEntries;

        return $entry;
    }

    /**
     * {@inheritdoc}
     */
    protected function setEntryAsRead(array $importedEntry)
    {
        $importedEntry['status'] = '1';

        return $importedEntry;
    }
}
