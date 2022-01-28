<!DOCTYPE html>
<html lan="en" and dir="Itr">

<head>
    <meta charset="utf-8">
    <title> Login Form</title>
    <link rel="stylesheet" href="./css/styling.css">
</head>

<body>
    <form class="box" action="insert.php" method="POST">
        <h1>Login</h1>

        <?php
        if ($conn === false) {
            die("ERROR: Could not connect. " . mysqli_connect_error());
        } else {
            echo "Connected successfully";
        }
        ?>

        <input type="text" name="name" placeholder="Enter your name" id="name" required>

        <input type="text" name="email" placeholder="Enter your email address" id="email" required>

        <input type="text" name="phone" placeholder="Enter your mobile no." id="phno" required>

        <input type="submit" name="" value="Submit" onClick="validate(event)">

    </form>

</body>

</html>