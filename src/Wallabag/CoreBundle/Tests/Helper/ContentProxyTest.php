<?php

namespace Wallabag\CoreBundle\Tests\Helper;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Wallabag\CoreBundle\Entity\Entry;
use Wallabag\UserBundle\Entity\User;
use Wallabag\CoreBundle\Helper\ContentProxy;

class ContentProxyTest extends KernelTestCase
{
    public function testWithEmptyContent()
    {
        $graby = $this->getMockBuilder('Graby\Graby')
            ->setMethods(array('fetchContent'))
            ->disableOriginalConstructor()
            ->getMock();

        $graby->expects($this->any())
            ->method('fetchContent')
            ->willReturn(array(
                'html' => false,
                'title' => '',
                'url' => '',
                'content_type' => '',
                'language' => '',
            ));

        $proxy = new ContentProxy($graby);
        $entry = $proxy->updateEntry(new Entry(new User()), 'http://0.0.0.0');

        $this->assertEquals('http://0.0.0.0', $entry->getUrl());
        $this->assertEmpty($entry->getTitle());
        $this->assertEquals('<!DOCTYPE html>
<html><p data-wallabag-paragraph="0">Unable to retrieve readable content.</p></html>
', $entry->getContent());
        $this->assertEmpty($entry->getPreviewPicture());
        $this->assertEmpty($entry->getMimetype());
        $this->assertEmpty($entry->getLanguage());
        $this->assertEquals(0.0, $entry->getReadingTime());
        $this->assertEquals('0.0.0.0', $entry->getDomainName());
    }

    public function testWithEmptyContentButOG()
    {
        $graby = $this->getMockBuilder('Graby\Graby')
            ->setMethods(array('fetchContent'))
            ->disableOriginalConstructor()
            ->getMock();

        $graby->expects($this->any())
            ->method('fetchContent')
            ->willReturn(array(
                'html' => false,
                'title' => '',
                'url' => '',
                'content_type' => '',
                'language' => '',
                'open_graph' => array(
                    'og_title' => 'my title',
                    'og_description' => 'desc',
                ),
            ));

        $proxy = new ContentProxy($graby);
        $entry = $proxy->updateEntry(new Entry(new User()), 'http://domain.io');

        $this->assertEquals('http://domain.io', $entry->getUrl());
        $this->assertEquals('my title', $entry->getTitle());
        $this->assertEquals('<!DOCTYPE html>
<html><p data-wallabag-paragraph="0">Unable to retrieve readable content.</p><p data-wallabag-paragraph="1"><i>But we found a short description: </i></p>desc</html>
', $entry->getContent());
        $this->assertEmpty($entry->getPreviewPicture());
        $this->assertEmpty($entry->getLanguage());
        $this->assertEmpty($entry->getMimetype());
        $this->assertEquals(0.0, $entry->getReadingTime());
        $this->assertEquals('domain.io', $entry->getDomainName());
    }

    public function testWithContent()
    {
        $graby = $this->getMockBuilder('Graby\Graby')
            ->setMethods(array('fetchContent'))
            ->disableOriginalConstructor()
            ->getMock();

        $graby->expects($this->any())
            ->method('fetchContent')
            ->willReturn(array(
                'html' => str_repeat('this is my content', 325),
                'title' => 'this is my title',
                'url' => 'http://1.1.1.1',
                'content_type' => 'text/html',
                'language' => 'fr',
                'open_graph' => array(
                    'og_title' => 'my OG title',
                    'og_description' => 'OG desc',
                    'og_image' => 'http://3.3.3.3/cover.jpg',
                ),
            ));

        $proxy = new ContentProxy($graby);
        $entry = $proxy->updateEntry(new Entry(new User()), 'http://0.0.0.0');

        $this->assertEquals('http://1.1.1.1', $entry->getUrl());
        $this->assertEquals('this is my title', $entry->getTitle());
        $this->assertContains('this is my content', $entry->getContent());
        $this->assertEquals('http://3.3.3.3/cover.jpg', $entry->getPreviewPicture());
        $this->assertEquals('text/html', $entry->getMimetype());
        $this->assertEquals('fr', $entry->getLanguage());
        $this->assertEquals(4.0, $entry->getReadingTime());
        $this->assertEquals('1.1.1.1', $entry->getDomainName());
    }
}
