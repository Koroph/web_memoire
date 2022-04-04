<?php
/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> (+225 0778329592)
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

namespace App\Controller\MediaStore;


use App\Controller\BaseController;
use App\Entity\Admin;
use App\Entity\Directory;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * Class DirectoryController
 * @package App\Controller\MediaStore
 * @Route(path="media/store/")
 */
class DirectoryController extends BaseController
{

    const DIRECTORY_ROOT_NAME = 'admin';

    /**
     * @Route("directory/create",name="directory.create",methods={"POST"})
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param SluggerInterface $slugger
     * @return JsonResponse
     */
    public function create(Request $request, EntityManagerInterface $manager, SluggerInterface $slugger): JsonResponse
    {


        $directory = $this->dataFill($request->request->all(), $slugger);
        $manager->persist($directory);
        $manager->flush();

        return new JsonResponse([
            'name' => $directory->getName(),
            'width' => $directory->getWidth(),
            'height' => $directory->getHeight(),
            'id' => $directory->getId(),
            'catalog' => [],
        ]);
    }

    /**
     * @Route("directory/destroy/{id<\w+>}",name="directory.destroy",methods={"DELETE"})
     * @param Directory $directory
     * @param EntityManagerInterface $manager
     * @return JsonResponse
     */
    public function destroy(Directory $directory, EntityManagerInterface $manager): JsonResponse
    {
        $isDelete = true;
        try {
            if (!is_null($directory->getLocation()) && file_exists($directory->getLocation()) && is_dir($directory->getLocation())) @rmdir($directory->getLocation());
            $manager->remove($directory);
            $manager->flush();
        } catch (\Exception $exception) {
            $isDelete = false;
        }
        return new JsonResponse([
            'is' => $isDelete
        ]);
    }

    /**
     * @param array $_data
     * @param SluggerInterface $slugger
     * @return Directory
     */
    private function dataFill(array $_data, SluggerInterface $slugger): Directory
    {
        $imageResizeSize = $this->getParameter(self::IMAGE_RESIZE_SIZE_KEY);

        /**
         * @var $user Admin|null
         */
        $user = $this->getUser();
        $location = $this->getParameter(self::STORAGE_FOLDER_KEY)[0]['path'] . self::DIRECTORY_ROOT_NAME . '/' . $slugger->slug($_data['name'], '_') . '/';

        // Directory object
        $directory = new Directory();
        $directory->setAdmin($user);
        $directory->setName($_data['name']);
        $directory->setPrefix($_data['prefix']);
        $directory->setWidth(intval($_data['width']) ?? intval(current($imageResizeSize[0])));
        $directory->setHeight(intval($_data['height']) ?? intval(end($imageResizeSize[0])));
        $directory->setLocation($location);

        return $directory;
    }
}