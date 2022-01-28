<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Result</title>
    
    <!-- style.css -->
    <link rel="stylesheet" href="./css/endPage.css">
</head>
<body>
    <div class="wrapper">
        <div class="result">
           <i class="fas fa-award award_icon"></i>
           <h3 class="username">Well Done! <span <?php echo $_REQUEST['name']; ?> </span></h3>
           <p class="userpoints">Your Points:  <span class="points"></span></p>
         <p class="usertime"> Time left:  <span class="time_left"></span></p>
        </div>
    </div>
    <script src="https://kit.fontawesome.com/d56261bbb9.js"></script>


        <!-- user info -->
        <script src="./js/userInfo.js"></script>
</body>
</html>