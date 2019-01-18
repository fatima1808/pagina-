<?php 
if(isset($_POST['submit'])){
    $to = "yolis_09_09@hotmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['nombre'];
    $subject = "Contacto desde www.red-point.mx";
    
    $message = "Mensaje de: ".$first_name. "\n\n" . $_POST['mensaje'];

    $headers = "From:" . $from;
    mail($to,utf8_decode($subject),utf8_decode($message),utf8_decode($headers));
    
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
    header('Location:index.html');
?>
