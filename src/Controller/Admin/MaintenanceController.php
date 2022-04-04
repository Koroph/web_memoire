<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\Notice;
use App\Entity\Breakdown;
use App\Entity\Equipment;
use App\Entity\Maintainer;
use App\Entity\Maintenance;
use App\Repository\BreakdownRepository;
use App\Repository\EquipmentRepository;
use App\Repository\MaintainerRepository;
use App\Repository\MaintenanceRepository;
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
class MaintenanceController extends BaseController
{
    protected $viewPath = 'admin>page>maintenance>';
    protected $csrf_update = '_user_maintenance_update';
    protected $csrf_create = '_user_maintenance_save';
    protected $base_url_name = 'maintenance.';

    /**
     * @Route("/maintenance",name="maintenance.index",methods={"GET"})
     * @param MaintenanceRepository $repository
     * @return Response
     */
    public function index(MaintenanceRepository $repository): Response
    {
        return $this->render(__FUNCTION__, [
            'data' => $this->paginate($repository->findAll())
        ]);
    }


    /**
     * @param Maintenance $maintenance
     * @return Response
     * @Route("/maintenance/show/{id}",name="maintenance.show",methods={"GET"})
     */
    public function show(Maintenance $maintenance): Response
    {
        return $this->render(__FUNCTION__, [
            'maintenance' => $maintenance
        ]);
    }


    /**
     * @param Request $request
     * @param ValidatorInterface $validator
     * @param BreakdownRepository $breakdownRepository
     * @param MaintainerRepository $maintainerRepository
     * @return Response
     * @throws \Exception
     * @Route("/maintenance/create",name="maintenance.create",methods={"GET","POST"})
     */
    public function create(Request $request, ValidatorInterface $validator,BreakdownRepository $breakdownRepository, MaintainerRepository $maintainerRepository): Response
    {
        if ($request->getMethod() == "POST") {
            if ($this->isCsrfTokenValid($this->csrf_create, $request->request->get('token'))) {
                $maintenance = $this->dataFill($request->request->all());
                if ($this->validator($maintenance, $validator)) {
                    $manager = $this->getDoctrine()->getManager();
                    $manager->persist($maintenance);
                    $maintenance->getBreakdown()->getEquipment()->setStatus("me");
                    $manager->flush();
                    $this->addFlash(Notice::KEY_SUCCESS, Notice::CREATE);
                    return $this->redirectAfterStore($request, trim($this->base_url_name, "."));
                } else {
                    return $this->redirectToRoute($this->base_url_name . __FUNCTION__, [], Response::HTTP_SEE_OTHER);
                }
            } else throw new InvalidCsrfTokenException(self::CRSF_INVALIDE_MESSAGE);
        }

        return $this->render(__FUNCTION__, [
            "breakdown" => $breakdownRepository->findAll(),
            "maintainers" => $maintainerRepository->findAll(),
        ]);
    }

    /**
     * @param Request $request
     * @param Maintenance $maintenance
     * @param ValidatorInterface $validator
     * @param BreakdownRepository $breakdownRepository
     * @param MaintainerRepository $maintainerRepository
     * @return Response
     * @throws \Exception
     * @Route("/maintenance/edit/{id}",name="maintenance.edit",methods={"GET","PUT"})
     */
    public function edit(Request $request, Maintenance $maintenance, ValidatorInterface $validator, BreakdownRepository $breakdownRepository, MaintainerRepository $maintainerRepository): Response
    {
        if ($request->getMethod() == "PUT") {
            if ($this->isCsrfTokenValid($this->csrf_update, $request->request->get('token'))) {
                $maintainer = $this->dataFill($request->request->all(), $maintenance);
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
            'maintenance' => $maintenance,
            "breakdowns" => $breakdownRepository->findAll(),
            "maintainers" => $maintainerRepository->findAll(),
        ]);
    }

    /**
     * @param Request $request
     * @param Maintenance $maintenance
     * @param EntityManagerInterface $manager
     * @return RedirectResponse
     * @Route("/maintenance/{id}",name="maintenance.destroy",methods={"DELETE"})
     */
    public function destroy(Request $request, Maintenance $maintenance, EntityManagerInterface $manager): RedirectResponse
    {
        $pageIndex = $request->query->getInt(self::PAGE_PARAM, 1);
        $manager->remove($maintenance);
        $manager->flush();
        $this->addFlash(Notice::KEY_SUCCESS, Notice::DELETE);
        return $this->redirectToRoute($this->base_url_name . 'index', [
            'page' => $pageIndex
        ], Response::HTTP_SEE_OTHER);
    }


    /**
     * @param array $_data
     * @param Maintenance|null $maintenance
     * @return Maintenance
     * @throws \Exception
     */
    private function dataFill(array $_data, ?Maintenance $maintenance = null): Maintenance
    {
        if (is_null($maintenance)) {
            $maintenance = new Maintenance;
        }
        $maintenance->setMaintainer($this->getDoctrine()->getRepository(Maintainer::class)->find($_data["_maintainer"]));
        $maintenance->setBreakdown($this->getDoctrine()->getRepository(Breakdown::class)->find($_data["_breakdown_id"]));
        $maintenance->setPrice($_data["_price"]);
        if (isset($_data["_date_start"])) $maintenance->setDateStart(new \DateTime($_data["_date_start"]));
        if (isset($_data["_date_end"])) $maintenance->setDateEnd(new \DateTime($_data["_date_end"]));
        if (isset($_data["_description"])) $maintenance->setDescription($_data["_description"]);

        //dd($maintenance);
        return $maintenance;
    }
}