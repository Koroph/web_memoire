<?php

namespace App\Controller\Admin;

use App\Controller\BaseController;
use App\Middleware\RedirectIfAuthenticated;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * @Route("office")
 */
class AdminSecurityController extends BaseController implements RedirectIfAuthenticated
{
    protected $viewPath = 'admin>login>';
    /**
     * @Route("/login", name="admin_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {

      /*   if ($this->getUser()) {
             return $this->redirectToRoute(AdminCustomAuthenticator::HOME_ROUTE);
         }*/

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();


        return $this->render(__FUNCTION__, ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="admin_logout")
     */
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
