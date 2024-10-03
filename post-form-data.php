<?php
error_reporting(-1); // reports all errors
ini_set("display_errors", "1"); // shows all errors
ini_set("log_errors", 1);
ini_set("error_log", "/tmp/php-error.log");

// include "loadenv.php";
#set up PHPMailer
#Start with PHPMailer class
require("PHPMailer.php");
require("SMTP.php");
//create a new object
$mail = new PHPMailer\PHPMailer\PHPMailer();
//configure an SMTP
$mail->isSMTP();
$mail->Host = getenv("MAIL_Host");
$mail->SMTPAuth = true;
$mail->Username = getenv("MAIL_Username");
$mail->Password = getenv("MAIL_Password");
$mail->SMTPSecure = getenv("PHPMailer::ENCRYPTION_STARTTLS");
$mail->Port = 587;

#get form data

$host = getenv("DATABASE_HOST");
$dbname = getenv("DATABASE_NAME");
$username = getenv("DATABASE_USERNAME");
$password = getenv("DATABASE_PASSWORD");
$dbPort = getenv("DATABASE_PORT");

#instantiate connection to database
try
{
    // $conn = new PDO(
    //     "mysql:host=$host;dbname=$dbname;port:$dbPort", 
    //     $username, $password
    // );
    // $dsn = "mysql://$username:$password@$host:$dbPort/$dbname";
    $dsn = "mysql:host=$host;dbname=$dbname;port:$dbPort";
    $conn = new PDO($dsn, $username, $password);
    mysql://ft-portfolio-user:z9SpQyutIR5m@srv-captain--dclhofrauw-mysql-80x:3306/ft-portfolio-database
    #throw any exception raised by PDO
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} 
catch(PDOException $pe) 
{
    die("Could not connect to the database..$dsn..$dbname:" . $pe->getMessage());
}
#retrieve the raw POST data
$jsonData = file_get_contents("php://input");
#decode the JSON data into a PHP associative array
$data = json_decode($jsonData, true);
#check if decoding was successful
if(isset($data["first_name"])){
    // echo json_encode('hey bro');
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
            }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
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
            #query database table with new data
            $query = "INSERT INTO portfolio_form_data (first_name, last_name, email, telephone, message)
            VALUES (\"$first_name\", \"$last_name\", \"$email\", \"$telephone\", \"$message\")";

            try
            {
                $result = $conn->query($query);
                
                #configure email
                $mail->setFrom($email, "Client");
                $mail->addAddress("farai.tanekha@gmail.com", "Farai Tanekha");
                $mail->Subject = "Software Development Portfolio enquiry";
                #set HTML 
                $mail->isHTML(TRUE);
                $mail->Body = "<html>$message</html>";
                $mail->AltBody = $message;
                #send the message
                if(!$mail->send()){
                    throw new Exception("Mailer Error: " . $mail->ErrorInfo);
                }
            }
            catch(Exception $e)
            {
                echo json_encode(array($e->getMessage()));
                exit;
            }
            echo json_encode("Database updated successfully.");
        }
    } 
    else 
    {
        #JSON decoding failed
        http_response_code(400); #Bad Request
        echo json_encode("Invalid JSON data.");
    }
}