<?php

namespace Wallabag\ImportBundle\Import;

use Wallabag\CoreBundle\Entity\Entry;

class InstapaperImport extends AbstractImport
{
    private $filepath;

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'Instapaper';
    }

    /**
     * {@inheritdoc}
     */
    public function getUrl()
    {
        return 'import_instapaper';
    }

    /**
     * {@inheritdoc}
     */
    public function getDescription()
    {
        return 'import.instapaper.description';
    }

    /**
     * Set file path to the json file.
     *
     * @param string $filepath
     */
    public function setFilepath($filepath)
    {
        $this->filepath = $filepath;

        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function import()
    {
        if (!$this->user) {
            $this->logger->error('InstapaperImport: user is not defined');

            return false;
        }

        if (!file_exists($this->filepath) || !is_readable($this->filepath)) {
            $this->logger->error('InstapaperImport: unable to read file', ['filepath' => $this->filepath]);

            return false;
        }

        $entries = [];
        $handle = fopen($this->filepath, 'r');
        while (($data = fgetcsv($handle, 10240)) !== false) {
            if ('URL' === $data[0]) {
                continue;
            }

            $entries[] = [
                'url' => $data[0],
                'title' => $data[1],
                'status' => $data[3],
                'is_archived' => $data[3] === 'Archive' || $data[3] === 'Starred',
                'is_starred' => $data[3] === 'Starred',
                'html' => false,
                'tags' => $data[4]
            ];
        }
        fclose($handle);

        if (empty($entries)) {
            $this->logger->error('InstapaperImport: no entries in imported file');

            return false;
        }

        if ($this->producer) {
            $this->parseEntriesForProducer($entries);

            return true;
        }

        $this->parseEntries($entries);

        return true;
    }

    /**
     * {@inheritdoc}
     */
    public function parseEntry(array $importedEntry)
    {
        $existingEntry = $this->em
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId($importedEntry['url'], $this->user->getId());

        if (false !== $existingEntry) {
            ++$this->skippedEntries;

            return;
        }

        $entry = new Entry($this->user);
        $entry->setUrl($importedEntry['url']);
        $entry->setTitle($importedEntry['title']);

        foreach(explode(',', $importedEntry['tags']) as $tag) {

            $existingTag = $this->em
                ->getRepository('WallabagCoreBundle:Tag')
                ->findOneByLabel($tag);

            if ($existingTag === null) {
                $existingTag = new Tag();
                $existingTag->setLabel($tag);
            }

            $entry->addTag($existingTag);
        }

        // update entry with content (in case fetching failed, the given entry will be return)
        $entry = $this->fetchContent($entry, $importedEntry['url'], $importedEntry);

        $entry->setArchived($importedEntry['is_archived']);
        $entry->setStarred($importedEntry['is_starred']);

        $this->em->persist($entry);
        ++$this->importedEntries;

        return $entry;
    }

    /**
     * {@inheritdoc}
     */
    protected function setEntryAsRead(array $importedEntry)
    {
        $importedEntry['is_archived'] = 1;

        return $importedEntry;
    }
}
