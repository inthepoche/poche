<?php

namespace Wallabag\CoreBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Entries
 *
 * @ORM\Entity(repositoryClass="Wallabag\CoreBundle\Repository\EntriesRepository")
 * @ORM\Table(name="entries")
 * @ORM\HasLifecycleCallbacks()
 *
 */
class Entries
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", nullable=true)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id = null;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="text", nullable=true)
     */
    private $title;

    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @ORM\Column(name="url", type="text", nullable=true)
     */
    private $url;

    /**
     * @var boolean
     *
     * @ORM\Column(name="is_archived", type="boolean", nullable=true, options={"default" = false})
     */
    private $isArchived = false;

    /**
     * @var boolean
     *
     * @ORM\Column(name="is_starred", type="boolean", nullable=true, options={"default" = false})
     */
    private $isStarred = false;

    /**
     * @var boolean
     *
     * @ORM\Column(name="is_deleted", type="boolean", nullable=true, options={"default" = false})
     */
    private $isDeleted = false;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="text", nullable=true)
     */
    private $content;

    /**
     * @var date
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @var date
     *
     * @ORM\Column(name="updated_at", type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @var string
     *
     * @ORM\Column(name="user_id", type="decimal", precision=10, scale=0, nullable=true)
     */
    private $userId;

    /**
     * @var string
     *
     * @ORM\Column(name="comments", type="text", nullable=true)
     */
    private $comments;

    /**
     * @var string
     *
     * @ORM\Column(name="mimetype", type="text", nullable=true)
     */
    private $mimetype;

    /**
     * @var integer
     *
     * @ORM\Column(name="reading_type", type="integer", nullable=true)
     */
    private $readingTime;

    /**
     * @var string
     *
     * @ORM\Column(name="domain_name", type="text", nullable=true)
     */
    private $domainName;

    /**
     * @var boolean
     *
     * @ORM\Column(name="is_public", type="boolean", nullable=true, options={"default" = false})
     */
    private $isPublic;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set title
     *
     * @param  string  $title
     * @return Entries
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set url
     *
     * @param  string  $url
     * @return Entries
     */
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set isArchived
     *
     * @param  string  $isArchived
     * @return Entries
     */
    public function setArchived($isArchived)
    {
        $this->isArchived = $isArchived;

        return $this;
    }

    /**
     * Get isArchived
     *
     * @return string
     */
    public function isArchived()
    {
        return $this->isArchived;
    }

    public function toggleArchive()
    {
        $this->isArchived = $this->isArchived() ^ 1;

        return $this;
    }

    /**
     * Set isStarred
     *
     * @param  string  $isStarred
     * @return Entries
     */
    public function setStarred($isStarred)
    {
        $this->isStarred = $isStarred;

        return $this;
    }

    /**
     * Get isStarred
     *
     * @return string
     */
    public function isStarred()
    {
        return $this->isStarred;
    }

    public function toggleStar()
    {
        $this->isStarred = $this->isStarred() ^ 1;

        return $this;
    }

    /**
     * Set content
     *
     * @param  string  $content
     * @return Entries
     */
    public function setContent($content)
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get content
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set userId
     *
     * @param  string  $userId
     * @return Entries
     */
    public function setUserId($userId)
    {
        $this->userId = $userId;

        return $this;
    }

    /**
     * Get userId
     *
     * @return string
     */
    public function getUserId()
    {
        return $this->userId;
    }

    /**
     * @return string
     */
    public function isDeleted()
    {
        return $this->isDeleted;
    }

    /**
     * @param string $isDeleted
     */
    public function setDeleted($isDeleted)
    {
        $this->isDeleted = $isDeleted;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     * @ORM\PrePersist
     */
    public function setCreatedAt()
    {
        $this->createdAt = new \DateTime();
    }

    /**
     * @return string
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * @param string $updatedAt
     * @ORM\PreUpdate
     */
    public function setUpdatedAt()
    {
        $this->updatedAt = new \DateTime();
    }

    /**
     * @return string
     */
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * @param string $comments
     */
    public function setComments($comments)
    {
        $this->comments = $comments;
    }

    /**
     * @return string
     */
    public function getMimetype()
    {
        return $this->mimetype;
    }

    /**
     * @param string $mimetype
     */
    public function setMimetype($mimetype)
    {
        $this->mimetype = $mimetype;
    }

    /**
     * @return int
     */
    public function getReadingTime()
    {
        return $this->readingTime;
    }

    /**
     * @param int $readingTime
     */
    public function setReadingTime($readingTime)
    {
        $this->readingTime = $readingTime;
    }

    /**
     * @return string
     */
    public function getDomainName()
    {
        return $this->domainName;
    }

    /**
     * @param string $domainName
     */
    public function setDomainName($domainName)
    {
        $this->domainName = $domainName;
    }

    /**
     * @return boolean
     */
    public function isPublic()
    {
        return $this->isPublic;
    }

    /**
     * @param boolean $isPublic
     */
    public function setPublic($isPublic)
    {
        $this->isPublic = $isPublic;
    }
}
