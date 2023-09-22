<?php

require_once __DIR__ . '/vendor/autoload.php'; // Include the Composer autoload file

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASSWORD'];
$db = $_ENV['DB_DATABASE'];

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection

 if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?> 
