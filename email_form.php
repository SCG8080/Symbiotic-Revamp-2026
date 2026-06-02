<?php
switch (@$_GET['do'])
 {

 case "send":

      $name = $_POST['name'];
      $femail = $_POST['femail'];
      $fphone1 = $_POST['fphone1'];
      $fsendmail = $_POST['fsendmail'];
      $secretinfo = "";

    if (!preg_match("/^\S+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,6}$/",$femail))
    {
      unset($_GET['do']);
      $message = "Primary Email Address is incorrect. Please try again.";
      break;
    }
    if (!preg_match("/^[0-9 #\-\*\.\(\)]+$/",$fphone1))
    {
      unset($_GET['do']);
      $message = "Phone Number 1 required. No letters, please.";
      break;
    }
 
    if ($secretinfo == "")
    {
       $myemail = "careers@symbioticconsultinggroup.com";
       $emess = "First Name: ".$name."\n";
       $emess.= "Email: ".$femail."\n";
       $emess.= "Phone number: ".$fphone1."\n";
       $emess.= "Message: ".$fsendmail;
       $ehead = "From: ".$femail."\r\n";
       $subj = "An Email from ".$name;
       $mailsend= mail("$myemail","$subj","$emess","$ehead");
       $message = "Thank you for Contacting Us!";
    }
    unset($_GET['do']);
    echo "<script type='text/javascript'>alert('$message');</script>";
    echo "<script type='text/javascript'>window.location.href = 'https://www.symbioticconsultinggroup.com/contact.html'</script>";
     break;
 
 default: break;
 }
?>