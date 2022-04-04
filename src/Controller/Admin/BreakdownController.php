<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\Admin;
use App\Entity\Breakdown;
use App\Entity\Equipment;
use App\Repository\BreakdownRepository;
use App\Repository\EquipmentRepository;
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
class BreakdownController extends BaseController
{
    protected $viewPath = 'admin>page>breakdown>';
    protected $csrf_update = '_user_breakdown_update';
    protected $csrf_create = '_user_breakdown_save';
    protected $base_url_name = 'breakdown.';

    /**
     * @Route("/breakdown",name="breakdown.index",methods={"GET"})
     * @param BreakdownRepository $repository
     * @return Response
     */
    public function index(BreakdownRepository $repository): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($repository->findAll())
        ]);
    }


    /**
     * @param Breakdown $breakdown
     * @return Response
     * @Route("/breakdown/show/{id}",name="breakdown.show",methods={"GET"})
     */
    public function show(Breakdown $breakdown): Response
    {
        return $this->render(__FUNCTION__, [
            'breakdown' => $breakdown
        ]);
    }


    /**
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param EquipmentRepository $equipmentRepository
     * @return Response
     * @throws \Exception
     * @Route("/breakdown/create",name="breakdown.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator, EquipmentRepository $equipmentRepository): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $breakdown = $this->dataFill($request->request->all());
                if ($this->validator($breakdown, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($breakdown);
                    $breakdown->getEquipment()->setStatus("pe");
                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::CREATE);
                    return $this->redirectAfterStore($request, trim($this->base_url_name, "."));
                } else {
                    return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [], Response::HTTP_SEE_OTHER);
                }
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            "equipments" => $equipmentRepository->findAll()
        ]);
    }

    /**
     * @param Request $request
     * @param Breakdown $breakdown
     * @param ValidatorInterface $validator
     * @param EquipmentRepository $equipmentRepository
     * @return Response
     * @throws \Exception
     * @Route("/breakdown/edit/{id}",name="breakdown.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request, Breakdown $breakdown, ValidatorInterface $validator,EquipmentRepository $equipmentRepository): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $breakdown = $this->dataFill($request->request->all(), $breakdown);
                if ($this->validator($breakdown, $validator, true)) {
                    $this->getDoctrine()->getManager()->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::UPDATE);
                }
                return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [
                    'id' => $breakdown->getId()
                ], Response::HTTP_SEE_OTHER);
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            'breakdown' => $breakdown,
            'equipments' => $equipmentRepository->findAll()
        ]);
    }

    /**
     * @param Request $request
     * @param Breakdown $breakdown
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/breakdown/{id}",name="breakdown.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Breakdown $breakdown, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($breakdown);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }


    /**
     * @param array $_data
     * @param Breakdown|null $breakdown
     * @return Breakdown
     * @throws \Exception
     */
    private function dataFill(array $_data, ?Breakdown $breakdown = null): Breakdown
    {
        if (is_null($breakdown)) {
            $breakdown = new Breakdown();
        }
        $breakdown->setEquipment($this->getDoctrine()->getRepository(Equipment::class)->find($_data["_equipment_id"]));
        $breakdown->setDescription($_data["_description"]);
        $breakdown->setBreakdownDate(new \DateTime($_data["_breakdown_date"]));

        return $breakdown;
    }
}