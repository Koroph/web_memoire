<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\Admin;
use App\Entity\Files;
use App\Entity\Service;
use App\Entity\WorkFunction;
use App\Repository\AdminRepository;
use App\Repository\ServiceRepository;
use App\Repository\WorkFunctionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * @Route("admin/office")
 */
class UserAdminController extends BaseController
{
    protected $viewPath = 'admin>page>user-admin>';
    protected $csrf_update = '_user_admin_update';
    protected $csrf_create = '_user_admin_save';
    protected $base_url_name = 'user_admin.';

    /**
     * @Route("/user_admin/account",name="user_admin.index",methods={"GET"})
     * @param AdminRepository $admin
     * @return Response
     */
    public function index(AdminRepository $admin): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($admin->findAllUserAdmin())
        ]);
    }


    /**
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param UserPasswordEncoderInterface $encoder
     * @param ServiceRepository $serviceRepository
     * @param WorkFunctionRepository $workFunctionRepository
     * @return Response
     * @Route("/user_admin/account/create",name="user_admin.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator, UserPasswordEncoderInterface $encoder, ServiceRepository $serviceRepository, WorkFunctionRepository $workFunctionRepository): Response
    {
        if ($request->isMethod('POST')) {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $admin = $this->dataFill($request->request->all(), $encoder);
                if ($this->validator($admin, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($admin);
                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::CREATE);
                    return $this->redirectAfterStore($request, trim($this->base_url_name, "."));
                } else {
                    return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [], Response::HTTP_SEE_OTHER);
                }
            } else  throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }
        return $this->render(__FUNCTION__, [
            'workFunction' => $workFunctionRepository->findAll(),
            'services' => $serviceRepository->findAll()
        ]);
    }


    /**
     * @param Admin $admin
     * @return Response
     * @Route("/user_admin/account/show/{ref}",name="user_admin.show",methods={"GET"})
     */
    public function show(Admin $admin): Response
    {
        return $this->render(__FUNCTION__, [
            'user' => $admin
        ]);
    }

    /**
     * @param Request $request
     * @param Admin $admin
     * @param UserPasswordEncoderInterface $encoder
     * @param ValidatorInterface $validator
     * @param ServiceRepository $serviceRepository
     * @param WorkFunctionRepository $workFunctionRepository
     * @return Response
     * @Route("/user_admin/account/edit/{ref}",name="user_admin.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request, Admin $admin, UserPasswordEncoderInterface $encoder, ValidatorInterface $validator, ServiceRepository $serviceRepository, WorkFunctionRepository $workFunctionRepository): Response
    {
        if ($request->isMethod('PUT')) {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $admin = $this->dataFill($request->request->all(), $encoder, $admin);

                if ($this->validator($admin, $validator, true)) {
                    $this->getDoctrine()->getManager()->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
                    /*  return $this->redirectToRoute($this->base_url_name . __FUNCTION__,
                          ['ref' => $admin->getRef()], Response::HTTP_SEE_OTHER
                      );*/
                }
                return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [
                    'ref' => $admin->getRef()
                ], Response::HTTP_SEE_OTHER);
            } else  throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            'user' => $admin,
            'workFunction' => $workFunctionRepository->findAll(),
            'services' => $serviceRepository->findAll()
        ]);
    }

    /**
     * @param Request $request
     * @param Admin $admin
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/user_admin/account/{ref}",name="user_admin.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Admin $admin, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($admin);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute('user_admin.index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }

    /**
     * @param Request $request
     * @param Admin $admin
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("user_admin/account/activated/{ref}",name="user_admin.activated",methods={"GET"})
     */
    public function published(Request $request, Admin $admin, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $admin->setIsActivated(!$admin->getIsActivated());
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
        return $this->redirectToRoute('user_admin.index', [
            'page' => $pageIndex
        ]);
    }

    /**
     * @param array $_data
     * @param UserPasswordEncoderInterface $encoder
     * @param Admin|null $user
     * @return Admin
     */
    private function dataFill(array $_data, UserPasswordEncoderInterface $encoder, ?Admin $user = null): Admin
    {
        $file = null;

        if (isset($_data['_file'])) {
            /**
             * @var $file Files
             */
            $file = $this->getDoctrine()->getRepository(Files::class)->find(intval($_data['_file']));

        }

        if (is_null($user)) {
            $user = new Admin();
            $user->setIsActivated(true);
        }

        if (isset($_data["_service_id"])){
            $user->setService($this->getDoctrine()->getRepository(Service::class)->find($_data["_service_id"]));
        }
        if (isset($_data["_work_function_id"])){
            $user->setWorkFunction($this->getDoctrine()->getRepository(WorkFunction::class)->find($_data["_work_function_id"]));
        }

        $user->setLastName($_data['_lastname']);
        $user->setFirstName($_data['_firstname']);
        $user->setContact($_data['_contact']);
        $user->setIsActivated($_data['_status'] ?? false);
        if ($file) $user->setImage($file);

        if (isset($_data['_username'])) $user->setUsername($_data['_username']);
        if (isset($_data['_role'])) $user->setRoles($_data['_role']);
        if (isset($_data['_service'])) $user->setService($_data['_service']);

        if (isset($_data['_password']) && !empty($_data['_password'])) {
            $user->setPassword($encoder->encodePassword($user, $_data['_password']));
        }


        return $user;
    }

    /**
     * @param string $roleName
     * @return string[]
     */
    private function getRoles(string $roleName): array
    {
        switch ($roleName) {
            case "admin":
                return ['ROLE_ADMIN', 'ROLE_SUPER_ADMIN'];
            default:
                return ['ROLE_ADMIN'];
        }
    }
}