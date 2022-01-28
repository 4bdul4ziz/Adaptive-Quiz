<?php

// servername => localhost
// username => root
// password => empty
// database name => staff
$conn = mysqli_connect("sql308.byetcluster.com", "epiz_30920241", "mdczdaFOUQ", "epiz_30920241_quiz");

// Check connection
if ($conn === false) {
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
/* $points = $_REQUEST['points'];
 */
?>