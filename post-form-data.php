<?php

include "loadenv.php";
#set up PHPMailer
#Start with PHPMailer class
use PHPMailer\PHPMailer\PHPMailer;
//create a new object
$mail = new PHPMailer();
//configure an SMTP
$mail->isSMTP();
$mail->Host = $_ENV["MAIL_Host"];
$mail->SMTPAuth = true;
$mail->Username = $_ENV["MAIL_Username"];
$mail->Password = $_ENV["MAIL_Password"];
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

#get form data
$host = $_ENV["DB_HOST_NAME"];
$dbname = $_ENV["DB_NAME"];
$username = $_ENV["DB_USER_NAME"];
$password = $_ENV["DB_PASSWORD"];
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
$jsonData = file_get_contents("php://input");
#decode the JSON data into a PHP associative array
$data = json_decode($jsonData, true);
#check if decoding was successful
if(isset($data["first_name"])){
    if($data !== null) 
    {
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

            if(empty($first_name)) {
                $http_response_code406[] = "The first name is required.";
            }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$first_name)) {
                $http_response_code406[] = "The first name format is incorrect.";
            }else{
                $first_name = format_form_data($first_name);
            }
            if(empty($last_name)){
                #nullable
                $last_name= null;
            }elseif(!preg_match("/^[a-zA-Z-' ]*$/",$last_name)) {
                $http_response_code406[] = "The last name format is incorrect.";
            }else{
                $last_name = format_form_data($last_name);
            }
            if(empty($email)){
                $http_response_code406[] = "The email is required.";
            }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $http_response_code406[] = "The email format is incorrect.";
            }else{
                $email = format_form_data($email);
            }
            if(empty($telephone)){
                $http_response_code406[] = "The telephone is required.";
            }elseif(!preg_match("/^[0-9]{7,15}+$/", $telephone)){
                $http_response_code406[] = "The telephone format is incorrect.";
                exit;
            }else{
                $telephone = format_form_data($telephone);
            }
            if(empty($message)){
                $http_response_code406[] = "The message is required.";
            }elseif(strlen($message) < 3){
                $http_response_code406[] = "Message too short.";
            }else{
                $message = format_form_data($message);
            }
        }

        if(count($http_response_code406) > 0){
            echo json_encode($http_response_code406);
            exit;
        }else{
            #query database table with new data
            $query = "INSERT INTO portfolio_form_data (first_name, last_name, email, telephone, message)
            VALUES (\"$first_name\", \"$last_name\", \"$email\", \"$telephone\", \"$message\")";

            try
            {
                $result = $conn->query($query);
                
                #configure email
                $mail->setFrom($email, "Client");
                $mail->addAddress("farai.tanekha@netmatters-scs.com", "Farai Tanekha");
                $mail->Subject = "Software Development Portfolio enquiry";
                #set HTML 
                $mail->isHTML(TRUE);
                $mail->Body = "<html>$message</html>";
                $mail->AltBody = $message;
                #send the message
                if(!$mail->send()){
                    echo json_encode("Message could not be sent.");
                    echo json_encode("Mailer Error: " . $mail->ErrorInfo);
                    exit;
                }
            }
            catch(Exception $e)
            {
                echo json_encode($e);
                exit;
            }
            echo json_encode("Database updated successfully.\nEmail sent!");
        }
    } 
    else 
    {
        #JSON decoding failed
        http_response_code(400); #Bad Request
        echo json_encode("Invalid JSON data.");
    }
}