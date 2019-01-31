<?php
/**
 * PHPMailer simple file upload and send example
 */

    // First handle the upload
    // Don't trust provided filename - same goes for MIME types
    // See http://php.net/manual/en/features.file-upload.php#114004 for more thorough upload validation
    if($_POST){ 
            require 'PHPMailer/PHPMailerAutoload.php';
            $sender_name    = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING); //capture sender name
            $sender_email   = filter_var($_POST["email"], FILTER_SANITIZE_STRING); //capture sender email
            $message        = filter_var($_POST["telefono"], FILTER_SANITIZE_STRING); //capture sender telefono

            $mail = new PHPMailer;
            $mail->setFrom($sender_email, $sender_name);
            $mail->addAddress('rh@red-point.mx', 'Contacto');
            $mail->Subject = 'Contacto desde sitio web';
            $mail->Body = $message;
          

            if($mail->send()){
                print json_encode(array('type'=>'done', 'text' => 'Se ha enviado el correo.'));
                exit;
            }else{
                print json_encode(array('type'=>'error', 'text' => 'No se pudo enviar tu correo, intentalo más tarde.' ));  
                exit;
            }
    }
?>