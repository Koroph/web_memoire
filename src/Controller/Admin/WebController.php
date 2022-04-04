<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;

class WebController extends AbstractController
{

    /**
     * @Route(path="/")
     */
    public function index(): RedirectResponse
    {
        return $this->redirectToRoute("admin_home.index");
    }

}