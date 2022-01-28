<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./css/quizStyle.css" />
  <title>Document</title>
</head>

<body>

  <div class="wrapper">
    <div class="quiz">
      <div class="quiz_header">
        <div class="quiz_user">
          <h4>Hello!!<span class="name"></span></h4>
        </div>
        <div class="quiz_timer">
          <span id="countdown"></span>
        </div>
      </div>
      <div class="quiz_body">
        <div id="questions">
          <!-- <ul class="option_group">
            <li class="option">option 1</li>
            <li class="option">option 2</li>
            <li class="option">option 3</li>
            <li class="option">option 4</li>
          </ul> -->
        </div>
        <button class="btn-next" id="nextBtn">Next Question</button>
      </div>
    </div>
  </div>
  <script src="./js/countdown.js"></script>
  <script src="./js/level.js">
    <?php

    include('dbconfig.php');
    $sql = "update details set points = '$points' where email = '$email'";
    if (mysqli_query($conn, $sql)) {
      echo "Record updated successfully";
    } else {
      echo "Error updating record: " . mysqli_error($conn);
    }


    ?>
  </script>
</body>

</html>