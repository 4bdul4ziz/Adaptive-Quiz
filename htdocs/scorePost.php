<?php
include 'dbconfig.php';

$points = $_POST['data'];

$resq = "INSERT INTO board VALUES ('$points')";
mysqli_query($conn, $resq);

?>