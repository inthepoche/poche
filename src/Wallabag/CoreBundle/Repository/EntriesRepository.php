<?php

namespace Wallabag\CoreBundle\Repository;

use Doctrine\ORM\Query;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Wallabag\CoreBundle\Entity\Entries;

class EntriesRepository extends EntityRepository
{
    /**
     * Retrieves unread entries for a user
     *
     * @param $userId
     * @param $firstResult
     * @param  int       $maxResults
     * @return Paginator
     */
    public function findUnreadByUser($userId, $firstResult, $maxResults = 12)
    {
        $qb = $this->createQueryBuilder('e')
            ->select('e')
            ->setFirstResult($firstResult)
            ->setMaxResults($maxResults)
            ->where('e.isRead = 0')
            ->andWhere('e.userId =:userId')->setParameter('userId', $userId)
            ->andWhere('e.isDeleted=0')
            ->orderBy('e.createdAt', 'desc')
            ->getQuery();

        $paginator = new Paginator($qb);

        return $paginator;
    }

    /**
     * Retrieves read entries for a user
     *
     * @param $userId
     * @param $firstResult
     * @param  int       $maxResults
     * @return Paginator
     */
    public function findArchiveByUser($userId, $firstResult, $maxResults = 12)
    {
        $qb = $this->createQueryBuilder('e')
            ->select('e')
            ->setFirstResult($firstResult)
            ->setMaxResults($maxResults)
            ->where('e.isRead = 1')
            ->andWhere('e.userId =:userId')->setParameter('userId', $userId)
            ->andWhere('e.isDeleted=0')
            ->orderBy('e.createdAt', 'desc')
            ->getQuery();

        $paginator = new Paginator($qb);

        return $paginator;
    }

    /**
     * Retrieves starred entries for a user
     *
     * @param $userId
     * @param $firstResult
     * @param  int       $maxResults
     * @return Paginator
     */
    public function findStarredByUser($userId, $firstResult, $maxResults = 12)
    {
        $qb = $this->createQueryBuilder('e')
            ->select('e')
            ->setFirstResult($firstResult)
            ->setMaxResults($maxResults)
            ->where('e.isFav = 1')
            ->andWhere('e.userId =:userId')->setParameter('userId', $userId)
            ->andWhere('e.isDeleted=0')
            ->orderBy('e.createdAt', 'desc')
            ->getQuery();

        $paginator = new Paginator($qb);

        return $paginator;
    }

    public function findEntries($userId, $isArchived, $isStarred, $isDeleted, $sort, $order)
    {
        $qb = $this->createQueryBuilder('e')
            ->select('e')
            ->where('e.userId =:userId')->setParameter('userId', $userId);

        if (!is_null($isArchived)) {
            $qb->andWhere('e.isRead =:isArchived')->setParameter('isArchived', $isArchived);
        }

        if (!is_null($isStarred)) {
            $qb->andWhere('e.isFav =:isStarred')->setParameter('isStarred', $isStarred);
        }

        if (!is_null($isDeleted)) {
            $qb->andWhere('e.isDeleted =:isDeleted')->setParameter('isDeleted', $isDeleted);
        }

        if ('created' === $sort) {
            $qb->orderBy('e.createdAt', $order);
        } elseif ('updated' === $sort) {
            $qb->orderBy('e.updatedAt', $order);
        }

        return $qb
            ->getQuery()
            ->getResult(Query::HYDRATE_ARRAY);
    }
}
