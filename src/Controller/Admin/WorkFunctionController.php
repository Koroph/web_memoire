<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\WorkFunction;
use App\Repository\WorkFunctionRepository;
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
class WorkFunctionController extends BaseController
{

    protected $viewPath = 'admin>page>work_function>';
    protected $csrf_update = '_user_work_function_update';
    protected $csrf_create = '_user_work_function_save';
    protected $base_url_name = 'work_function.';

    /**
     * @Route("/work_function",name="work_function.index",methods={"GET"})
     * @param WorkFunctionRepository $repository
     * @return Response
     */
    public function index(WorkFunctionRepository $repository): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($repository->findAll())
        ]);
    }


    /**
     * @param WorkFunction $workFunction
     * @return Response
     * @Route("/work_function/show/{id}",name="work_function.show",methods={"GET"})
     */
    public function show(WorkFunction $workFunction): Response
    {
        return $this->render(__FUNCTION__, [
            'workFunction' => $workFunction
        ]);
    }


    /**
     * @Route("/work_function/create",name="work_function.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $workFunction = $this->dataFill($request->request->all());
                if ($this->validator($workFunction, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($workFunction);
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
     * @param WorkFunction $workFunction
     * @param ValidatorInterface $validator
     * @return Response
     * @Route("/work_function/edit/{id}",name="work_function.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request, WorkFunction $workFunction, ValidatorInterface $validator): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $workFunction = $this->dataFill($request->request->all(), $workFunction);
                if ($this->validator($workFunction, $validator, true)) {
                    $this->getDoctrine()->getManager()->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
                }
                return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [
                    'id' => $workFunction->getId()
                ], Response::HTTP_SEE_OTHER);
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            'workFunction' => $workFunction
        ]);
    }

    /**
     * @param Request $request
     * @param WorkFunction $workFunction
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/work_function/{id}",name="work_function.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, WorkFunction $workFunction, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($workFunction);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }


    private function dataFill(array $_data, ?WorkFunction $workFunction = null): WorkFunction
    {

        if (is_null($workFunction)) {
            $workFunction = new WorkFunction();
        }
        $workFunction->setName($_data["_name"]);

        return $workFunction;
    }
}