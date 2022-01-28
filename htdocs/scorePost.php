<?php
include 'dbconfig.php';

$points = $_POST['points'];

$resq = "INSERT INTO points (points) VALUES ('$points')";
$sql = mysqli_query($conn, $resq);

?>