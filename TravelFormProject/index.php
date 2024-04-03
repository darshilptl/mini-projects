<?php
$insert = false;
if(isset($_POST['name'])){
    //set connection varible
   $server = "localhost";
   $username = "root";
   $password = "";
   //create a database connection
   $con = mysqli_connect($server, $username, $password);

   // check for connection success
   if (!$con) {
    die("connection to this database failed due to" . mysqli_connect_error());
   }
    // echo"Successfully connected to the database";
   
   //collect post varibele
   $name = $_POST['name'];
   $age = $_POST['age'];
   $gender = $_POST['gender'];
   $email = $_POST['email'];
   $phone = $_POST['phone'];
   $desc = $_POST['desc'];

   $sql = "  INSERT INTO `trip`.`trip` ( `name`, `age`, `gender`, `email`, `phone`, `doubt`, `date`) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp());";
    //  echo $sql;\
   
   //execute the query
   if($con->query($sql) == true) {
    // echo"Successfully inserted";

    //flag for successful insertion
    $insert = true;
   }
   else{
    echo "Error:$sql <br> $con->error";
   }  

   //close the database conncetion
   $con->close();   
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Form Web</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="bg"></div>
    <div class="container">
        <h1>Welcome To Darshil's Sponsor USA Trip Form</h1>
        <P>Enter Your Deatils And Submit This Form To Confirm Your Participation In This Trip.</P>
        <p id="error"></p>
        <?php
        if($insert == true){
        echo "<p class='submitmsg'>Thanks For Submitting Your Form. We Are Happy To See You Joining Us For The USA Trip</p>";
        }
    ?>

        <form onsubmit="return validateForm()">
        <form action="index.php" method="post">
        <input type="text" name="name" id="name" maxlength="30" placeholder="Enter Your Name">
        <input type="text" name="age" id="age" placeholder="Enter Your Age">
        <input type="text" name="gender" id="gender" placeholder="Enter Your Gender">
        <input type="email" name="email" id="email" placeholder="Enter Your Email">
        <input type="phone" name="phone" id="phone" placeholder="Enter Your Phone">
        <textarea name="desc" id="desc" cols="30" rows="10" maxlength="300"placeholder="Ask Any Doubt About Trip"></textarea>
        <button class="btn">Submit</button>
        </form>
        </form>
    </div>
    <script src="index.js"></script>
</body>
</html>
 