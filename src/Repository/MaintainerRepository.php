<?php

namespace App\Repository;

use App\Entity\Maintainer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Maintainer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Maintainer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Maintainer[]    findAll()
 * @method Maintainer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MaintainerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Maintainer::class);
    }

    // /**
    //  * @return Maintainer[] Returns an array of Maintainer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Maintainer
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
