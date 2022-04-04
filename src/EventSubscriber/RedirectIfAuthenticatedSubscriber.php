<?php
/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> (+225 0778329592)
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */

namespace App\EventSubscriber;

use App\Controller\Admin\AdminSecurityController;
use App\Middleware\RedirectIfAuthenticated;
use App\Security\AdminCustomAuthenticator;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\ControllerEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class RedirectIfAuthenticatedSubscriber implements EventSubscriberInterface
{

    /**
     * @var SessionInterface
     */
    protected $session;
    protected $generator;

    /**
     * NotAuthenticatedSubscriber constructor.
     *
     * @param SessionInterface $session
     * @param UrlGeneratorInterface $generator
     */
    public function __construct(SessionInterface $session, UrlGeneratorInterface $generator)
    {
        $this->session = $session;
        $this->generator = $generator;
    }

    public function onKernelController(ControllerEvent $event)
    {

        /**
         * @var $request Request
         */
        $request = $event->getRequest();

        $controller = $event->getController();

        // when a controller class defines multiple action methods, the controller
        // is returned as [$controllerInstance, 'methodName']
        if (is_array($controller)) {
            $controller = $controller[0];
        }

        if ($controller instanceof RedirectIfAuthenticated) {
            if ($this->session->has(AdminCustomAuthenticator::SECURITY_SESSION_AUTH_KEY)) {
                $event->setController(function () {
                    return new RedirectResponse($this->generator->generate(AdminCustomAuthenticator::HOME_ROUTE));
                });
            }

        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }

}
