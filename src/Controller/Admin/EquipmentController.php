<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Controller\Utils\Query;
use App\Entity\Admin;
use App\Entity\Attribution;
use App\Entity\Equipment;
use App\Entity\Files;
use App\Repository\AdminRepository;
use App\Repository\EquipmentRepository;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Exception;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use function PHPUnit\Framework\at;
use function PHPUnit\Framework\never;

/**
 * @Route("admin/office")
 */
class EquipmentController extends BaseController
{
    protected $viewPath = 'admin>page>equipment>';
    protected $csrf_update = '_user_equipment_update';
    protected $csrf_create = '_user_equipment_save';
    protected $base_url_name = 'equipment.';

    /**
     * @Route("/equipment",name="equipment.index",methods={"GET"})
     * @param EquipmentRepository $repository
     * @return Response
     */
    public function index(EquipmentRepository $repository): Response
    {
        $data=[];
        if ($this->isGranted("ROLE_SUPER_USER")) $data = $repository->findAll();
        else {
            /**
             * @var $user Admin
             */
            $user = $this->getUser();
            foreach ($user->getAttributions() as $attribution){
                if (is_null($attribution->getEnd())){
                    $data[]=$attribution->getEquipment();
                }
            }
        }
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($data)
        ]);
    }


    /**
     * @param Equipment $equipment
     * @return Response
     * @Route("/equipment/show/{id}",name="equipment.show",methods={"GET"})
     */
    public function show(Equipment $equipment): Response
    {
        return $this->render(__FUNCTION__, [
            'equipment' => $equipment
        ]);
    }


    /**
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param AdminRepository $adminRepository
     * @return Response
     * @throws \Exception
     * @Route("/equipment/create",name="equipment.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator, AdminRepository $adminRepository): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $equipment = $this->dataFill($request->request->all());
                if ($this->validator($equipment, $validator)) {

                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($equipment);
                    if ($request->request->has("_user")) {
                        $attr = new Attribution;
                        $attr->setAdmin($adminRepository->find($request->request->getInt("_user")));
                        $attr->setEquipment($equipment);
                        $manager->persist($attr);
                    }
                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::CREATE);
                    return $this->redirectAfterStore($request, trim($this->base_url_name, "."));
                } else {
                    return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [], Response::HTTP_SEE_OTHER);
                }
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            "users" => $adminRepository->findAll()
        ]);
    }

    /**
     * @param Request $request
     * @param Equipment $equipment
     * @param ValidatorInterface $validator
     * @param AdminRepository $adminRepository
     * @return Response
     * @throws \Exception
     * @Route("/equipment/edit/{id}",name="equipment.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request, Equipment $equipment, ValidatorInterface $validator, AdminRepository $adminRepository): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $equipment = $this->dataFill($request->request->all(), $equipment);
                if ($this->validator($equipment, $validator, true)) {
                    $manager = $this->getDoctrine()->getManager();

                    if ($request->request->has("_user") && ($equipment->getAttributions()->count() == 0 || $equipment->getAttributions()->count() && $request->request->getInt("_user") != $equipment->getAttributions()->last()->getId())) {
                        $oldAttr = $equipment->getAttributions()->last();
                        if ($oldAttr) $oldAttr->setEnd(new \DateTime);
                        $attr = new Attribution;
                        $attr->setAdmin($adminRepository->find($request->request->getInt("_user")));
                        $attr->setEquipment($equipment);
                        $manager->persist($attr);
                    }

                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
                }
                return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [
                    'id' => $equipment->getId()
                ], Response::HTTP_SEE_OTHER);
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            'equipment' => $equipment,
            "users" => $adminRepository->findAll()
        ]);
    }

    /**
     * @Route("status/edit/{id}/{status}",name="update.status")
     */
    public function updateStatus(Request $request, Equipment $equipment, string $status, EntityManagerInterface $manager): RedirectResponse
    {
        $equipment->setStatus($status);
        $manager->flush();

        return $this->redirectBack($request);
    }

    /**
     * @param Request $request
     * @param Equipment $equipment
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/equipment/{id}",name="equipment.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Equipment $equipment, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($equipment);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }


    /**
     * @throws \Exception
     */
    private function dataFill(array $_data, ?Equipment $equipment = null): Equipment
    {

        if (is_null($equipment)) {
            $equipment = new Equipment();
            $equipment->setStatus("be");
        }


        if (isset($_data["_image"])) {
            $equipment->setImage($this->getDoctrine()->getRepository(Files::class)->find($_data["_image"]));
        }

        $equipment->setName($_data["_name"]);
        $equipment->setNumSerie($_data["_num_serie"]);
        $equipment->setBrand($_data["_brand"]);
        $equipment->setColor($_data["_color"]);
        $equipment->setDateBuy(new \DateTime($_data["_date_buy"]));

        return $equipment;
    }

}