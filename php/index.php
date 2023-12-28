<?php

require 'vendor/autoload.php';

// Include the RateLimitMiddleware class
require 'Middleware/RateLimitMiddleware.php';
require 'helper.php';

use Slim\Http\Request;
use Slim\Http\Response;

$app = new \Slim\App();

$app->get('/test', function ($request, $response, $args) {
    $response->getBody()->write("Hello". getenv("DB_HOST"));

    return $response;
});

// Define the route for the POST method
$app->post('/insertData', function (Request $request, Response $response) {

    // Get data from the request body
    $data = $request->getParsedBody();

    // Validate the incoming data
    $validationErrors = validateData($data);

    // Check if there are validation errors
    if (!empty($validationErrors)) {
        // Return validation errors
        return $response->withJson(['error' => $validationErrors], 400);
    }

    // Insert data into the database
    $insertedId = insertDataIntoTable($data);

    // Return the inserted ID
    return $response->withJson(['id' => $insertedId], 201);
});
// ->add(new RateLimitMiddleware());


// Run the Slim application
$app->run();


// Function to validate the data
function validateData($data)
{
    $validationErrors = [];

    // Validate 'name'
    if (empty($data['name'])) {
        $validationErrors['name'] = 'Name is required';
    }

    // Validate 'email'
    if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $validationErrors['email'] = 'Valid email is required';
    }

    // You can add more validation rules for other fields (title, company) if needed

    return $validationErrors;
}

// Function to insert data into the table
function insertDataIntoTable($data)
{
    $pdo = getPdoObject();

    // Build the SQL query
    $sql = 'INSERT INTO contacts (name, email, title, company) VALUES (:name, :email, :title, :company)';

    // Prepare the statement
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':name', $data['name']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':title', $data['title']);
    $stmt->bindParam(':company', $data['company']);

    // Execute the statement
    $stmt->execute();

    // Return the last inserted ID
    return $pdo->lastInsertId();
}
