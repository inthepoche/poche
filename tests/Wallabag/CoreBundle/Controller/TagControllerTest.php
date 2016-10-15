<?php

namespace Tests\Wallabag\CoreBundle\Controller;

use Tests\Wallabag\CoreBundle\WallabagCoreTestCase;
use Wallabag\CoreBundle\Entity\Tag;

class TagControllerTest extends WallabagCoreTestCase
{
    public $tagName = 'opensource';

    public function testList()
    {
        $this->logInAs('admin');
        $client = $this->getClient();

        $client->request('GET', '/tag/list');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testAddTagToEntry()
    {
        $this->logInAs('admin');
        $client = $this->getClient();

        $entry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId('http://0.0.0.0/entry1', $this->getLoggedInUserId());

        $crawler = $client->request('GET', '/view/'.$entry->getId());

        $form = $crawler->filter('form[name=tag]')->form();

        $data = [
            'tag[label]' => $this->tagName,
        ];

        $client->submit($form, $data);
        $this->assertEquals(302, $client->getResponse()->getStatusCode());

        // be sure to reload the entry
        $entry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId('http://0.0.0.0/entry1', $this->getLoggedInUserId());

        $this->assertEquals(3, count($entry->getTags()));

        // tag already exists and already assigned
        $client->submit($form, $data);
        $this->assertEquals(302, $client->getResponse()->getStatusCode());

        $newEntry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->find($entry->getId());

        $this->assertEquals(3, count($newEntry->getTags()));

        // tag already exists but still not assigned to this entry
        $data = [
            'tag[label]' => 'foo',
        ];

        $client->submit($form, $data);
        $this->assertEquals(302, $client->getResponse()->getStatusCode());

        $newEntry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->find($entry->getId());

        $this->assertEquals(3, count($newEntry->getTags()));
    }

    public function testAddMultipleTagToEntry()
    {
        $this->logInAs('admin');
        $client = $this->getClient();

        $entry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId('http://0.0.0.0/entry2', $this->getLoggedInUserId());

        $crawler = $client->request('GET', '/view/'.$entry->getId());

        $form = $crawler->filter('form[name=tag]')->form();

        $data = [
            'tag[label]' => 'foo2, bar2',
        ];

        $client->submit($form, $data);
        $this->assertEquals(302, $client->getResponse()->getStatusCode());

        $newEntry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->find($entry->getId());

        $tags = $newEntry->getTags()->toArray();
        foreach ($tags as $key => $tag) {
            $tags[$key] = $tag->getLabel();
        }

        $this->assertGreaterThanOrEqual(2, count($tags));
        $this->assertNotFalse(array_search('foo2', $tags), 'Tag foo2 is assigned to the entry');
        $this->assertNotFalse(array_search('bar2', $tags), 'Tag bar2 is assigned to the entry');
    }

    public function testRemoveTagFromEntry()
    {
        $this->logInAs('admin');
        $client = $this->getClient();

        $entry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId('http://0.0.0.0/entry1', $this->getLoggedInUserId());

        $tag = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Tag')
            ->findOneByEntryAndTagLabel($entry, $this->tagName);

        $client->request('GET', '/remove-tag/'.$entry->getId().'/'.$tag->getId());

        $this->assertEquals(302, $client->getResponse()->getStatusCode());

        $this->assertNotContains($this->tagName, $entry->getTags());

        $client->request('GET', '/remove-tag/'.$entry->getId().'/'.$tag->getId());

        $this->assertEquals(404, $client->getResponse()->getStatusCode());

        $tag = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Tag')
            ->findOneByLabel($this->tagName);

        $this->assertNull($tag, $this->tagName.' was removed because it begun an orphan tag');
    }

    public function testShowEntriesForTagAction()
    {
        $this->logInAs('admin');
        $client = $this->getClient();
        $em = $client->getContainer()
            ->get('doctrine.orm.entity_manager');

        $tag = new Tag();
        $tag->setLabel($this->tagName);

        $entry = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Entry')
            ->findByUrlAndUserId('http://0.0.0.0/entry4', $this->getLoggedInUserId());

        $tag->addEntry($entry);

        $em->persist($entry);
        $em->persist($tag);
        $em->flush();

        $tag = $client->getContainer()
            ->get('doctrine.orm.entity_manager')
            ->getRepository('WallabagCoreBundle:Tag')
            ->findOneByEntryAndTagLabel($entry, $this->tagName);

        $crawler = $client->request('GET', '/tag/list/'.$tag->getSlug());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertCount(1, $crawler->filter('[id*="entry-"]'));

        $entry->removeTag($tag);
        $em->remove($tag);
        $em->flush();
    }
}
