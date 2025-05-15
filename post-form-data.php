<?php
require 'connect.php';
##########set-up for Render web service########################
$host = "0.0.0.0"; // Listen on all interfaces
$port = $_ENV["PORT"] ?: 10000; // Use Render's PORT environment variable, default to 10000 if not set

// Specify the directory where the server should start
$documentRoot = __DIR__; // The root folder, or use the folder containing your PHP files

// Start PHP's built-in server on the specified host and port
echo "Starting server on port $port\n";
##################################################
error_reporting(-1);//report all errors
ini_set("display_errors", "1");//shows all errors
ini_set("log_errors", 1);
ini_set("error_log", "/tmp/php-error.log");
#retrieve the raw POST request data
$jsonData = file_get_contents("php://input");
#decode the JSON data into a PHP associative array
$data = json_decode($jsonData, true);
#check if decoding was successful
if(isset($data["first_name"])){
    print_r($data);
    #access the data and perform operations
    $first_name = $data["first_name"];
    $last_name = $data["last_name"];
    $email = $data["email"];
    $telephone = $data["telephone"];
    $message = $data["message"];
    #DATA FORMATTING & VALIDATION
    if($_SERVER["REQUEST_METHOD"] === "POST") 
    {#format the data
        function format_form_data($form_input) 
        {
            $form_input = trim($form_input);
            $form_input = stripslashes($form_input);
            $form_input = htmlspecialchars($form_input);
            return $form_input;
        }
        # [1] check for empty fields/ missing form data
        # [2] ****SANITIZE & VALIDATE*****data
        $http_response_code406 = [];
        ////////////////////////first name//////////////////////////////////
        if(empty($first_name)) {
            $http_response_code406[] = "The first name is required.";
        }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$first_name)) {
            $http_response_code406[] = "The first name format is incorrect.";
        }else{
            $first_name = format_form_data($first_name);
        }///////////////////////last name///////////////////////////////////
        if(empty($last_name)){
            #nullable
            $last_name= null;
        }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$last_name)) {
            $http_response_code406[] = "The last name format is incorrect.";
        }else{
            $last_name = format_form_data($last_name);
        }/////////////////////////email//////////////////////////////////////
        if(empty($email)){
            $http_response_code406[] = "The email is required.";
        }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $http_response_code406[] = "The email format is incorrect.";
        }else{
            $email = format_form_data($email);
        }////////////////////////telephone///////////////////////////////////
        if(empty($telephone)){
            $http_response_code406[] = "The telephone is required.";
        }elseif(!preg_match("/^[0-9]{7,15}+$/", $telephone)){
            $http_response_code406[] = "The telephone format is incorrect.";
            exit;
        }else{
            $telephone = format_form_data($telephone);
        }//////////////////////////message///////////////////////////////////
        if(empty($message)){
            $http_response_code406[] = "The message is required.";
        }else{
            $message = format_form_data($message);
        }
        if(strlen($message) < 3){
            $http_response_code406[] = "Message too short.";
        }
    }

    if(count($http_response_code406) > 0){
        echo json_encode($http_response_code406);
        exit;
    }else{
        #instantiate connection to database
        $conn = connect();
        if(!$conn) {
            $http_response_code406[] = "Database connection failed.";
            echo json_encode($http_response_code406);
            exit;
        }
        #query database table with new data
        $query = "INSERT INTO portfolio_form_data (first_name, last_name, email, telephone, message)
        VALUES (\"$first_name\", \"$last_name\", \"$email\", \"$telephone\", \"$message\")";

        try
        {
            $result = $conn->query($query);
            echo json_encode("Database updated successfully.");
        }
        catch(Exception $e)
        {
            echo json_encode(array($e->getMessage()));
            exit;
        }
        $conn = null;
    }
}else{
    #JSON decoding failed
    http_response_code(400); #Bad Request
    echo json_encode("Invalid JSON data.");
}