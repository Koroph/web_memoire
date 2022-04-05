<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\FileUploader;
use App\Controller\Utils\Query;
use App\Repository\AdminRepository;
use App\Repository\EquipmentRepository;
use App\Repository\MaintainerRepository;
use Doctrine\DBAL\Connection;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("admin/office")
 */
class HomeController extends BaseController
{
    use FileUploader;


    protected $viewPath = 'admin>page>home>';

    /**
     * @Route("/home",name="admin_home.index",methods={"GET"})
     * @throws Exception
     */
    public function index(Connection $connection,AdminRepository $adminRepository,EquipmentRepository $equipmentRepository,MaintainerRepository $maintainerRepository): Response
    {

        $data = $connection->executeQuery(Query::EQUIPMENT_STATE)->fetchAllAssociative();

        return $this->render(__FUNCTION__, [
            'stateData' => $this->stateDataFormat($data),
            'equipment' => $equipmentRepository->itemCount(),
            'staff' => $adminRepository->itemCount(),
            'maintainer' => $maintainerRepository->itemCount()
        ]);
    }


    private function visitCounterDataFormat(): array
    {
        $state = [];

        for ($i = 1; $i < 12; $i++) {
            $state['labels'][] = "$i/$i/2021";
            $state['values'][] = $i;
        }
        return $state;
    }

    private function stateDataFormat(array $data): array
    {
        $_data = [];

        foreach (current($data) as $key => $value) {
            switch ($key) {
                case "be":
                    $_data["labels"][] = "En Bon état";
                    break;
                case "re":
                    $_data["labels"][] = "A remplacer";
                    break;
                case "me":
                    $_data["labels"][] = "En maintenance";
                    break;
                default :
                    $_data["labels"][] = "En panne";
                    break;
            }
            $_data["values"][] = $value;
        }
        return $_data;
    }


}