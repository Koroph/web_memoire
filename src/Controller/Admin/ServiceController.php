<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\Service;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("admin/office")
 */
class ServiceController extends BaseController
{
    protected $viewPath = 'admin>page>service>';
    protected $csrf_update = '_user_service_update';
    protected $csrf_create = '_user_service_save';
    protected $base_url_name = 'service.';

    /**
     * @Route("/service",name="service.index",methods={"GET"})
     * @param ServiceRepository $repository
     * @return Response
     */
    public function index(ServiceRepository $repository): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($repository->findAll())
        ]);
    }


    /**
     * @param Service $service
     * @return Response
     * @Route("/service/show/{id}",name="service.show",methods={"GET"})
     */
    public function show(Service $service): Response
    {
        return $this->render(__FUNCTION__, [
            'service' => $service
        ]);
    }


    /**
     * @Route("/service/create",name="service.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $service = $this->dataFill($request->request->all());
                if ($this->validator($service, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($service);
                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::CREATE);
                    return $this->redirectAfterStore($request, trim($this->base_url_name, "."));
                } else {
                    return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [], Response::HTTP_SEE_OTHER);
                }
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__);
    }

    /**
     * @param Request $request
     * @param Service $service
     * @param ValidatorInterface $validator
     * @return Response
     * @Route("/service/edit/{id}",name="service.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request,Service $service, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $maintainer = $this->dataFill($request->request->all(),  $service);
                if ($this->validator($maintainer, $validator, true)) {
                    $this->getDoctrine()->getManager()->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
                }
                return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [
                    'id' => $maintainer->getId()
                ], Response::HTTP_SEE_OTHER);
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            'service' => $service
        ]);
    }

    /**
     * @param Request $request
     * @param Service $service
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/service/{id}",name="service.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Service $service, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($service);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }



    private function dataFill(array $_data, ?Service $service= null): Service
    {

        if (is_null($service)) {
            $service = new Service();
        }
        $service->setName($_data["_name"]);

        return $service;
    }
}