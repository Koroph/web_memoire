<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\Maintainer;
use App\Repository\MaintainerRepository;
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
class MaintainerController extends BaseController
{
    protected $viewPath = 'admin>page>maintainer>';
    protected $csrf_update = '_user_maintainer_update';
    protected $csrf_create = '_user_maintainer_save';
    protected $base_url_name = 'maintainer.';

    /**
     * @Route("/maintainer",name="maintainer.index",methods={"GET"})
     * @param MaintainerRepository $repository
     * @return Response
     */
    public function index(MaintainerRepository $repository): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($repository->findAll())
        ]);
    }


    /**
     * @param Maintainer $maintainer
     * @return Response
     * @Route("/maintainer/show/{id}",name="maintainer.show",methods={"GET"})
     */
    public function show(Maintainer $maintainer): Response
    {
        return $this->render(__FUNCTION__, [
            'maintainer' => $maintainer
        ]);
    }


    /**
     * @Route("/maintainer/create",name="maintainer.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $maintainer = $this->dataFill($request->request->all());
                if ($this->validator($maintainer, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($maintainer);
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
     * @param Maintainer $maintainer
     * @param ValidatorInterface $validator
     * @return Response
     * @Route("/maintainer/edit/{id}",name="maintainer.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request,Maintainer $maintainer, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $maintainer = $this->dataFill($request->request->all(),  $maintainer);
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
            'maintainer' => $maintainer
        ]);
    }

    /**
     * @param Request $request
     * @param Maintainer $maintainer
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/maintainer/{id}",name="maintainer.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Maintainer $maintainer, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($maintainer);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }



    private function dataFill(array $_data, ?Maintainer $maintainer= null): Maintainer
    {

        if (is_null($maintainer)) {
            $maintainer = new Maintainer();
        }
        $maintainer->setName($_data["_name"]);
        $maintainer->setContact($_data["_contact"]);

        return $maintainer;
    }

}