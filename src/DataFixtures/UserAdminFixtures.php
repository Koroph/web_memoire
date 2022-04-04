<?php
/**
 * @author    Koroph <yjk@outlook.fr>
 *
 * @website http://koroph.site
 * @link      https://github.com/Koroph
 * @license   MIT
 * @copyright Copyright (c) 2020.
 */

namespace App\DataFixtures;


use App\Entity\Admin;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserAdminFixtures extends Fixture
{

    private $encoder;

    /**
     * UserAdminFixtures constructor.
     * @param UserPasswordEncoderInterface $encoder
     */
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;

    }

    public function load(ObjectManager $manager)
    {

        foreach ($this->defaultAdmin() as $item) {
            $userAdmin = new Admin();
            $userAdmin->setFirstName($item['firstName']);
            $userAdmin->setLastName($item['lastName']);
            $userAdmin->setContact($item['Contact']);
            $userAdmin->setUsername($item['username']);
            $userAdmin->setPassword($this->encoder->encodePassword($userAdmin, $item['password']));
            $userAdmin->setRoles($item['role']);
            $userAdmin->setIsActivated($item['activated']);
            $manager->persist($userAdmin);
        }
        $manager->flush();
    }


    private function defaultAdmin(): array
    {

        return [
            [
                "firstName" => "Webmaster",
                "lastName" => "Admin",
                "role" => ['ROLE_ADMIN'],
                "Contact" => "077832959",
                "username" => "pass.webmaster",
                "password" => "E.pass.boot",
                "activated" => true,
            ],
            [
                "firstName" => "Konaté",
                "lastName" => "yves",
                "role" => [],
                "pass" => ['PASS_RECHARGE'],
                "service" => "Financer",
                "Contact" => "077832959",
                "username" => "yves.webmaster",
                "password" => "E.pass.boot",
                "activated" => true,
            ],
            [
                "firstName" => "Yeo",
                "lastName" => "pauline",
                "role" => [],
                "pass" => ['PASS_ENCODE'],
                "service" => "Comptable",
                "Contact" => "077832959",
                "username" => "pauline.webmaster",
                "password" => "E.pass.boot",
                "activated" => true,
            ],
            [
                "firstName" => "Koffi",
                "lastName" => "Joseph",
                "role" => ['ROLE_RESTOBADGE'],
                "pass" => [],
                "Contact" => "077832959",
                "service" => "Resto-badge",
                "username" => "joseph.webmaster",
                "password" => "E.pass.boot",
                "activated" => true,
            ]
        ];
    }
}