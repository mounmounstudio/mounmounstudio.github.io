<?php
if($_POST) {
  $to = "nikitasinru@gmail.com"; // your mail here
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $tel = filter_var($_POST["tel"], FILTER_SANITIZE_STRING);
  $subTitle = filter_var($_POST["subTitle"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
  $body = "Message: $message\nE-mail: $email\nPhone: $tel";
  
  if(@mail($to,  $subTitle, $body)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}