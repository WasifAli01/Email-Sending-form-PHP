<?php

// Getting The Values From The form
$first_name = $_POST["firstName"];
$last_name = $_POST["lastName"];
$fullName = $first_name . ' ' . $last_name;
$recieverName = $_POST["recieverName"];
$recieverEmail = $_POST["recieverEmail"];
$message = $_POST["message"];
$subject = $_POST["subject"];
$subject = "You have recieved a message from: " . $fullName . "\n" . $subject;
// If message is > 70 chars, wrapping it
$message = wordwrap($message, 70);

// Sending Email

mail($recieverEmail, $subject, $message);

?>