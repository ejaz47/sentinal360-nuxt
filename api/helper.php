<?php

$env = $_SERVER["SERVER_NAME"] == "localhost" ? 'dev' : 'prod';
$config = loadConfig($env);

// Function to get a PDO object based on the environment
function getPdoObject()
{
    $host = $config->database["host"];
    $port = $config->database["port"];
    $dbname = $config->database["database"];
    $user = $config->database["username"];
    $password = $config->database["password"];

    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $pdo;
}