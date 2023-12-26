<?php
require 'vendor/autoload.php';

$app = new \Slim\App();

$app->get('/ejaz', function ($request, $response, $args) {
    $response->getBody()->write("Hello");

    return $response;
});

$app->run();