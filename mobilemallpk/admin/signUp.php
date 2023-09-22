<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once 'links.php';?>
    <title>Document</title>
</head>
<body>
<?php include_once 'connection.php';?>

<?php
if(isset($_POST['insert'])){
    $u_first_name = $_POST['user-first-name'];
    $u_last_name = $_POST['user-last-name'];
    $u_email = $_POST['user-email'];
    $u_num = $_POST['user-num'];
    $u_pass = $_POST['user-pass'];
    $u_Cpass = $_POST['user-Cpass'];
 if($u_pass==$u_Cpass){
     $password = password_hash($u_pass, PASSWORD_BCRYPT);
     
   $inserData = "INSERT INTO users (username, l_name, email, number, password, user_status, role) 
    Values ('$u_first_name', '$u_last_name', '$u_email', '$u_num', '$password', 1, 'admin')";
    $execute = mysqli_query($conn, $inserData);

    if($execute){
        ?>
        <script>
        alert("Inserted");
        location.replace('index.php');
        </script>
        <?php
      } }
      else{
        ?>
        <script>
        alert("Not Inserted");
        </script>
        <?php
      }

}
?>


<div class="container mt-5">
            
<div class="page-heading">
    <h3>Please Enter the Valid Information</h3>
</div>

<div class="page-content">
    <section class="row">
        <div class="col-12">
            <div class="card">
    <form method="POST" class="mt-3" enctype="multipart/form-data">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
          <label for="">User Name:</label>
            <input type="text" class="form-control" name="user-first-name">
          </div>
          <div class="col-xl-6 col-lg-6">
          <label for="">Name:</label>
            <input type="text" class="form-control" name="user-last-name">
          </div>
        </div>
        <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Email:</label>
        <input type="email" class="form-control" name="user-email">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Number:</label>
        <input type="text" class="form-control" name="user-num">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Password:</label>
        <input type="password" class="form-control"  name="user-pass">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Conform Password:</label>
        <input type="password" class="form-control"  name="user-Cpass">
        </div>
      </div>
      <br>
        <button class="btn btn-danger mb-2" name="insert">Register</button>
      </div>
    </form>         
            </div>
          </div>
  </section>
</div>
</div>

<?php include_once 'foot.php';?>
</body>
</html>