<?php

namespace Tests\Wallabag\ImportBundle\Import;

use Wallabag\ImportBundle\Import\InstapaperImport;
use Wallabag\UserBundle\Entity\User;
use Wallabag\CoreBundle\Entity\Entry;
use Wallabag\ImportBundle\Redis\Producer;
use Monolog\Logger;
use Monolog\Handler\TestHandler;
use Simpleue\Queue\RedisQueue;
use M6Web\Component\RedisMock\RedisMockFactory;

class InstapaperImportTest extends \PHPUnit_Framework_TestCase
{
    protected $user;
    protected $em;
    protected $logHandler;
    protected $contentProxy;

    private function getInstapaperImport($unsetUser = false)
    {
        $this->user = new User();

        $this->em = $this->getMockBuilder('Doctrine\ORM\EntityManager')
            ->disableOriginalConstructor()
            ->getMock();

        $this->contentProxy = $this->getMockBuilder('Wallabag\CoreBundle\Helper\ContentProxy')
            ->disableOriginalConstructor()
            ->getMock();

        $import = new InstapaperImport($this->em, $this->contentProxy);

        $this->logHandler = new TestHandler();
        $logger = new Logger('test', [$this->logHandler]);
        $import->setLogger($logger);

        if (false === $unsetUser) {
            $import->setUser($this->user);
        }

        return $import;
    }

    public function testInit()
    {
        $instapaperImport = $this->getInstapaperImport();

        $this->assertEquals('Instapaper', $instapaperImport->getName());
        $this->assertNotEmpty($instapaperImport->getUrl());
        $this->assertEquals('import.instapaper.description', $instapaperImport->getDescription());
    }

    public function testImport()
    {
        $instapaperImport = $this->getInstapaperImport();
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/instapaper-export.csv');

        $entryRepo = $this->getMockBuilder('Wallabag\CoreBundle\Repository\EntryRepository')
            ->disableOriginalConstructor()
            ->getMock();

        $entryRepo->expects($this->exactly(3))
            ->method('findByUrlAndUserId')
            ->willReturn(false);

        $this->em
            ->expects($this->any())
            ->method('getRepository')
            ->willReturn($entryRepo);

        $entry = $this->getMockBuilder('Wallabag\CoreBundle\Entity\Entry')
            ->disableOriginalConstructor()
            ->getMock();

        $this->contentProxy
            ->expects($this->exactly(3))
            ->method('updateEntry')
            ->willReturn($entry);

        $res = $instapaperImport->import();

        $this->assertTrue($res);
        $this->assertEquals(['skipped' => 0, 'imported' => 3, 'queued' => 0], $instapaperImport->getSummary());
    }

    public function testImportAndMarkAllAsRead()
    {
        $instapaperImport = $this->getInstapaperImport();
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/instapaper-export.csv');

        $entryRepo = $this->getMockBuilder('Wallabag\CoreBundle\Repository\EntryRepository')
            ->disableOriginalConstructor()
            ->getMock();

        $entryRepo->expects($this->exactly(3))
            ->method('findByUrlAndUserId')
            ->will($this->onConsecutiveCalls(false, true, true));

        $this->em
            ->expects($this->any())
            ->method('getRepository')
            ->willReturn($entryRepo);

        $this->contentProxy
            ->expects($this->once())
            ->method('updateEntry')
            ->willReturn(new Entry($this->user));

        // check that every entry persisted are archived
        $this->em
            ->expects($this->once())
            ->method('persist')
            ->with($this->callback(function ($persistedEntry) {
                return $persistedEntry->isArchived();
            }));

        $res = $instapaperImport->setMarkAsRead(true)->import();

        $this->assertTrue($res);

        $this->assertEquals(['skipped' => 2, 'imported' => 1, 'queued' => 0], $instapaperImport->getSummary());
    }

    public function testImportWithRabbit()
    {
        $instapaperImport = $this->getInstapaperImport();
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/instapaper-export.csv');

        $entryRepo = $this->getMockBuilder('Wallabag\CoreBundle\Repository\EntryRepository')
            ->disableOriginalConstructor()
            ->getMock();

        $entryRepo->expects($this->never())
            ->method('findByUrlAndUserId');

        $this->em
            ->expects($this->never())
            ->method('getRepository');

        $entry = $this->getMockBuilder('Wallabag\CoreBundle\Entity\Entry')
            ->disableOriginalConstructor()
            ->getMock();

        $this->contentProxy
            ->expects($this->never())
            ->method('updateEntry');

        $producer = $this->getMockBuilder('OldSound\RabbitMqBundle\RabbitMq\Producer')
            ->disableOriginalConstructor()
            ->getMock();

        $producer
            ->expects($this->exactly(3))
            ->method('publish');

        $instapaperImport->setProducer($producer);

        $res = $instapaperImport->setMarkAsRead(true)->import();

        $this->assertTrue($res);
        $this->assertEquals(['skipped' => 0, 'imported' => 0, 'queued' => 3], $instapaperImport->getSummary());
    }

    public function testImportWithRedis()
    {
        $instapaperImport = $this->getInstapaperImport();
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/instapaper-export.csv');

        $entryRepo = $this->getMockBuilder('Wallabag\CoreBundle\Repository\EntryRepository')
            ->disableOriginalConstructor()
            ->getMock();

        $entryRepo->expects($this->never())
            ->method('findByUrlAndUserId');

        $this->em
            ->expects($this->never())
            ->method('getRepository');

        $entry = $this->getMockBuilder('Wallabag\CoreBundle\Entity\Entry')
            ->disableOriginalConstructor()
            ->getMock();

        $this->contentProxy
            ->expects($this->never())
            ->method('updateEntry');

        $factory = new RedisMockFactory();
        $redisMock = $factory->getAdapter('Predis\Client', true);

        $queue = new RedisQueue($redisMock, 'instapaper');
        $producer = new Producer($queue);

        $instapaperImport->setProducer($producer);

        $res = $instapaperImport->setMarkAsRead(true)->import();

        $this->assertTrue($res);
        $this->assertEquals(['skipped' => 0, 'imported' => 0, 'queued' => 3], $instapaperImport->getSummary());

        $this->assertNotEmpty($redisMock->lpop('instapaper'));
    }

    public function testImportBadFile()
    {
        $instapaperImport = $this->getInstapaperImport();
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/wallabag-v1.jsonx');

        $res = $instapaperImport->import();

        $this->assertFalse($res);

        $records = $this->logHandler->getRecords();
        $this->assertContains('InstapaperImport: unable to read file', $records[0]['message']);
        $this->assertEquals('ERROR', $records[0]['level_name']);
    }

    public function testImportUserNotDefined()
    {
        $instapaperImport = $this->getInstapaperImport(true);
        $instapaperImport->setFilepath(__DIR__.'/../fixtures/instapaper-export.csv');

        $res = $instapaperImport->import();

        $this->assertFalse($res);

        $records = $this->logHandler->getRecords();
        $this->assertContains('InstapaperImport: user is not defined', $records[0]['message']);
        $this->assertEquals('ERROR', $records[0]['level_name']);
    }
}
