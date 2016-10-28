<?php

namespace Wallabag\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Wallabag\UserBundle\Entity\User;

class UserRepository extends EntityRepository
{
    /**
     * Find a user by its username and rss roken.
     *
     * @param string $username
     * @param string $rssToken
     *
     * @return User|null
     */
    public function findOneByUsernameAndRsstoken($username, $rssToken)
    {
        return $this->createQueryBuilder('u')
            ->leftJoin('u.config', 'c')
            ->where('c.rssToken = :rss_token')->setParameter('rss_token', $rssToken)
            ->andWhere('u.username = :username')->setParameter('username', $username)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Find a user by its username.
     *
     * @param string $username
     *
     * @return User
     */
    public function findOneByUserName($username)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.username = :username')->setParameter('username', $username)
            ->getQuery()
            ->getSingleResult();
    }
}
