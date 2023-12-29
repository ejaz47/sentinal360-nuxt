<?php

// Function to get a PDO object based on the environment
function getPdoObject()
{
    $host = 'mysql';
    $port = '3306';
    $dbname = 'sentinal360';
    $user = 'admin';
    $password = 'password';

    $dsn = "mysql:host=$host;port=$port;dbname=$dbname";
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $pdo;
}