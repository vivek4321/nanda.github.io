<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_subject = 'From: '.$name.' Visitor Mail: '.$visitor_email;
$email_message = 'From: '.$name.' . Message is as follows: '.$message.' Visitor Mail: '.$visitor_email;
$to = 'vivekvivek9866@gmail.com';

$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To:'.$visitor_email. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $email_subject, $email_message, $headers);
echo '<script language="javascript">';
echo 'alert("Thanks !!!. Will reach you soon")';
echo '</script>';

echo '<script language="javascript">';
echo 'window.location.href = "http://www.devivek.com"';
echo '</script>';

 ?>
