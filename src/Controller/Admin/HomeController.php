<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Controller\Utils\FileUploader;
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
    public function index(): Response
    {


        return $this->render(__FUNCTION__, [
            'visitCounterData' => $this->visitCounterDataFormat(),
            'customer' => 0,
            'admin' => 0,
            'product' => 0
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
}