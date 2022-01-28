<!DOCTYPE html>
<html>

<head>
    <title>Successfully Registered!</title>
    <script src="./js/validation.js"></script>
</head>

<body>
    <div class="box">
        <h1>Successfully Registered!</h1>
        <p>You have successfully registered!</p>
        <a href="start.html">Click Here to continue.</a>
    <center>
        <?php
            include('dbconfig.php');

        $sql = "INSERT INTO details VALUES ('$name',
			'$email','$phone')";

        if (mysqli_query($conn, $sql)) {
            echo "<h3>Your details are successfully added in! Here's what you've entered: </h3>";

            echo nl2br("\n$name\n $email\n "
                . "$phone");
        } else {
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }

        // Close connectio
        mysqli_close($conn);
        ?>
    </center>
</body>

</html>