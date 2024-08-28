<?php

include 'loadenv.php';

#get form data
$host = $_ENV['DB_HOST_NAME'];
$dbname = $_ENV['DB_NAME'];
$username = $_ENV['DB_USER_NAME'];
$password = $_ENV['DB_PASSWORD'];
#instantiate connection to database
try
{
    $conn = new PDO(
        "mysql:host=$host;dbname=$dbname;", 
        $username, $password
    );
} 
catch(PDOException $pe) 
{
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}

#retrieve the raw POST data
$jsonData = file_get_contents('php://input');
#decode the JSON data into a PHP associative array
$data = json_decode($jsonData, true);
#check if decoding was successful
if(isset($data['first_name'])){
    if($data !== null) 
    {
        #access the data and perform operations
        $first_name = $data['first_name'];
        $last_name = $data['last_name'];
        $email = $data['email'];
        $telephone = $data['telephone'];
        $message = $data['message'];
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
            # [2] ****VALIDATE*****data
            $http_response_code406 = ["http_error_code" => 406, "error_description" => "Response Not Acceptable."];

            if(empty($first_name)) {
                // http_response_code(406);
                echo json_encode([$http_response_code406, "The first name is required"]);
                exit;
            }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$first_name)) {
                echo json_encode([$http_response_code406, "The first name format is incorrect."]);
                exit;
            }else{
                $first_name = format_form_data($first_name);
            }
            if(empty($last_name)){
                #nullable
                $last_name= null;
            }elseif(!preg_match("/^[a-zA-Z0-9-' ]*$/",$last_name)) {
                echo json_encode([$http_response_code406, "The last name format is incorrect."]);
                exit;
            }else{
                $last_name = format_form_data($last_name);
            }
            if(empty($email)){
                echo json_encode([$http_response_code406, "The email is required."]);
                exit;
            }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode([$http_response_code406, "The email format is incorrect."]);
                exit;
            }else{
                $email = format_form_data($email);
            }
            if(empty($telephone)){
                echo json_encode([$http_response_code406, "The telephone is required"]);
                exit;
            }elseif(!preg_match("/^[0-9]{7,15}+$/", $telephone)){
                echo json_encode([$http_response_code406, "The telephone format is incorrect."]);
                exit;
            }else{
                $telephone = format_form_data($telephone);
            }
            if(empty($message)){
                echo json_encode([$http_response_code406, "The message is required"]);
                exit;
            }else{
                $message = format_form_data($message);
            }
        }
        #query database table with new data
        $query = "INSERT INTO portfolio_form_data (first_name, last_name, email, telephone, message)
                    VALUES (\"$first_name\", \"$last_name\", \"$email\", \"$telephone\", \"$message\")";
        try
        {
            $result = $conn->query($query);
            echo json_encode("Success");
        }
        catch(Exception $e)
        {
            echo "Exception caught: $e";
        }
    } 
    else 
    {
        #JSON decoding failed
        http_response_code(400); #Bad Request
        echo "Invalid JSON data";
    }
}