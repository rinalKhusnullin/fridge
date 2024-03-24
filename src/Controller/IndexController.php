<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IndexController extends AbstractController
{
    #[Route('{route?}', name: 'app_index', requirements: ["route" => ".+"])]
    public function index(?string $route): Response
    {
        return $this->render('base.html.twig', [
            'route' => $route,
        ]);
    }
}
