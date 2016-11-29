<?php

namespace Wallabag\ImportBundle\Import;

use Psr\Log\LoggerInterface;
use Psr\Log\NullLogger;
use Doctrine\ORM\EntityManager;
use Wallabag\CoreBundle\Helper\ContentProxy;
use Wallabag\CoreBundle\Entity\Entry;
use Wallabag\CoreBundle\Entity\Tag;
use Wallabag\UserBundle\Entity\User;
use OldSound\RabbitMqBundle\RabbitMq\ProducerInterface;

abstract class AbstractImport implements ImportInterface
{
    protected $em;
    protected $logger;
    protected $contentProxy;
    protected $fetchingErrorMessage;
    protected $producer;
    protected $user;
    protected $markAsRead;
    protected $skippedEntries = 0;
    protected $importedEntries = 0;
    protected $queuedEntries = 0;

    public function __construct(EntityManager $em, ContentProxy $contentProxy, $fetchingErrorMessage)
    {
        $this->em = $em;
        $this->logger = new NullLogger();
        $this->contentProxy = $contentProxy;
        $this->fetchingErrorMessage = $fetchingErrorMessage;
    }

    public function setLogger(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    /**
     * Set RabbitMQ/Redis Producer to send each entry to a queue.
     * This method should be called when user has enabled RabbitMQ.
     *
     * @param ProducerInterface $producer
     */
    public function setProducer(ProducerInterface $producer)
    {
        $this->producer = $producer;
    }

    /**
     * Set current user.
     * Could the current *connected* user or one retrieve by the consumer.
     *
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * Set whether articles must be all marked as read.
     *
     * @param bool $markAsRead
     */
    public function setMarkAsRead($markAsRead)
    {
        $this->markAsRead = $markAsRead;

        return $this;
    }

    /**
     * Get whether articles must be all marked as read.
     */
    public function getMarkAsRead()
    {
        return $this->markAsRead;
    }

    /**
     * Fetch content from the ContentProxy (using graby).
     * If it fails return the given entry to be saved in all case (to avoid user to loose the content).
     *
     * @param Entry  $entry   Entry to update
     * @param string $url     Url to grab content for
     * @param array  $content An array with AT LEAST keys title, html, url, language & content_type to skip the fetchContent from the url
     *
     * @return Entry
     */
    protected function fetchContent(Entry $entry, $url, array $content = [])
    {
        $updatedEntry = clone $entry;
        $this->contentProxy->updateEntry($updatedEntry, $url, $content);
        if ($updatedEntry->getContent() == $this->fetchingErrorMessage) {
            $this->logger->warn('Unable to update imported entry ('.$entry->getUrl().')');
            return $entry;
        } else {
            return $updatedEntry;
        }
    }

    /**
     * Parse and insert all given entries.
     *
     * @param $entries
     */
    protected function parseEntries($entries)
    {
        $i = 1;

        foreach ($entries as $importedEntry) {
            if ($this->markAsRead) {
                $importedEntry = $this->setEntryAsRead($importedEntry);
            }

            $entry = $this->parseEntry($importedEntry);

            if (null === $entry) {
                continue;
            }

            // flush every 20 entries
            if (($i % 20) === 0) {
                $this->em->flush();

                // clear only affected entities
                $this->em->clear(Entry::class);
                $this->em->clear(Tag::class);
            }
            ++$i;
        }

        $this->em->flush();
    }

    /**
     * Parse entries and send them to the queue.
     * It should just be a simple loop on all item, no call to the database should be done
     * to speedup queuing.
     *
     * Faster parse entries for Producer.
     * We don't care to make check at this time. They'll be done by the consumer.
     *
     * @param array $entries
     */
    protected function parseEntriesForProducer(array $entries)
    {
        foreach ($entries as $importedEntry) {
            // set userId for the producer (it won't know which user is connected)
            $importedEntry['userId'] = $this->user->getId();

            if ($this->markAsRead) {
                $importedEntry = $this->setEntryAsRead($importedEntry);
            }

            ++$this->queuedEntries;

            $this->producer->publish(json_encode($importedEntry));
        }
    }

    /**
     * {@inheritdoc}
     */
    public function getSummary()
    {
        return [
            'skipped' => $this->skippedEntries,
            'imported' => $this->importedEntries,
            'queued' => $this->queuedEntries,
        ];
    }

    /**
     * Parse one entry.
     *
     * @param array $importedEntry
     *
     * @return Entry
     */
    abstract public function parseEntry(array $importedEntry);

    /**
     * Set current imported entry to archived / read.
     * Implementation is different accross all imports.
     *
     * @param array $importedEntry
     *
     * @return array
     */
    abstract protected function setEntryAsRead(array $importedEntry);
}
