<?php

namespace App\Repository;

use App\Entity\WorkFunction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WorkFunction|null find($id, $lockMode = null, $lockVersion = null)
 * @method WorkFunction|null findOneBy(array $criteria, array $orderBy = null)
 * @method WorkFunction[]    findAll()
 * @method WorkFunction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorkFunctionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WorkFunction::class);
    }

    // /**
    //  * @return WorkFunction[] Returns an array of WorkFunction objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WorkFunction
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
