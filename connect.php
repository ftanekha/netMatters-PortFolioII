<?php 
require_once __DIR__ . '/vendor/autoload.php';  // Corrected the path with forward slashes
// Load environment variables from the .env file in the root folder
Dotenv\Dotenv::createImmutable(__DIR__)->load();

function connect(){
    // Get environment variables
    $host = $_ENV["DATABASE_HOST"];
    $port = $_ENV["DATABASE_PORT"];
    $dbname = $_ENV["DATABASE_NAME"];
    $username = $_ENV["DATABASE_USERNAME"];
    $password = $_ENV["DATABASE_PASSWORD"];
    // Construct the DSN (Data Source Name) for PDO
    $dsn = "mysql:host=$host;dbname=$dbname;port=$port";
    // Instantiate connection to the database
    try {
        $conn = new PDO($dsn, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'Connection established!';
        return $conn;
    } catch(PDOException $pe) {
        die("Could not connect to the database: " . $pe->getMessage());
    }
}

connect();