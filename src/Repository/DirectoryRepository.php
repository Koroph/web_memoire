<?php

namespace App\Repository;

use App\DataFixtures\DirectoryFixtures;
use App\Entity\Directory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\ParameterType;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Directory|null find($id, $lockMode = null, $lockVersion = null)
 * @method Directory|null findOneBy(array $criteria, array $orderBy = null)
 * @method Directory[]    findAll()
 * @method Directory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DirectoryRepository extends ServiceEntityRepository
{
    public const ADMIN_DIRECTORY = "admin images";

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Directory::class);
    }

    public function findByCreated(string $prefix)
    {
        $query = $this->createQueryBuilder('d')
            ->orderBy('d.name', 'ASC')
            ->where('d.name <> :val');
        if ($prefix === "all") {
            $query->setParameter('val', self::ADMIN_DIRECTORY, ParameterType::STRING);
        } else {
            $query->andWhere('d.prefix = :px');
            $query->setParameters([
                'val' => self::ADMIN_DIRECTORY,
                'px' => $prefix
            ]);
        }
        return $query->getQuery()->getResult();
    }


    public function getAdminDirectory()
    {
        return $this->createQueryBuilder('d')
            ->where('d.name = :val')
            ->setParameter('val', self::ADMIN_DIRECTORY)
            ->getQuery()
            ->getResult();

    }
    public function getProductDirectory()
    {
        return $this->createQueryBuilder('d')
            ->where('d.prefix = :val')
            ->setParameter('val', '_product_')
            ->getQuery()
            ->getResult();

    }
}
