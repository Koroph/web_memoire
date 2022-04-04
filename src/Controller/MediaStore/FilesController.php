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
use App\Controller\Utils\FileUploader;
use App\Entity\Directory;
use App\Entity\Files;
use App\Repository\DirectoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Cache\InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Contracts\Cache\CacheInterface;

/**
 * Class FilesController
 * @package App\Controller\MediaStore
 * @Route(path="media/store/")
 */
class FilesController extends BaseController
{
    use FileUploader;

    /**
     * @Route(path="files/{prefix<\w+>?all}",name="files.all",methods={"GET"})
     * @param string $prefix
     * @param DirectoryRepository $repository
     * @return JsonResponse
     */
    public function index(string $prefix,DirectoryRepository $repository): JsonResponse
    {

        return new JsonResponse([
            'data' => $repository->findByCreated($prefix)
        ]);
    }

    /**
     * @Route("files/create",name="files.create",methods={"POST"})
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param SluggerInterface $slugger
     * @return JsonResponse
     * @throws InvalidArgumentException
     */
    public function create(Request $request, EntityManagerInterface $manager,SluggerInterface $slugger): JsonResponse
    {
        $files = $this->dataFill($request,$slugger);
        $manager->persist($files);
        $manager->flush();
        return new JsonResponse([
            'url' => $files->getUrl(),
            'id' => $files->getId(),
            'title' => $files->getTitle(),
            'created_at' => $files->getCreated(),
            'is' => true
        ]);
    }

    /**
     * @Route("files/destroy/{id<\w+>}",name="files.destroy",methods={"DELETE"})
     * @param Files $files
     * @param EntityManagerInterface $manager
     * @return JsonResponse
     */
    public function destroy(Files $files, EntityManagerInterface $manager): JsonResponse
    {
        $isDelete = true;
        try {
            $this->deleteFileByPath($files->getPath());
            $manager->remove($files);
            $manager->flush();
        } catch (\Exception | InvalidArgumentException $exception) {
            $isDelete = false;
        }
        return new JsonResponse([
            'is' => $isDelete
        ]);
    }

    /**
     * @param Request $request
     * @param SluggerInterface $slugger
     * @return Files|null
     */
    private function dataFill(Request $request,SluggerInterface $slugger): ?Files
    {
        /**
         * @var $directory Directory
         */
        $directory = $this
            ->getDoctrine()
            ->getRepository(Directory::class)
            ->find(intval($request->request->get('directory_id')));

        return $this->uploadImage($request,$directory,$slugger);
    }
}