<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="login/style.css">
   <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  </head>
  <body>
    <?php include_once 'connection.php';?>
    <?php 
  include 'connection.php';

  if (isset($_POST['login'])) {

    $user_detail = $_POST['user-detail'];
    $pass = $_POST['user-pass'];

    $select_users = "SELECT * FROM users WHERE (email = '$user_detail' OR number = '$user_detail') AND role = 'admin'" ;
    $select_users_query = mysqli_query($conn, $select_users);

    $users_count = mysqli_num_rows($select_users_query);

    if ($users_count>0) {
      
      $users = mysqli_fetch_assoc($select_users_query);

      $password = $users['password'];
      $status = $users['user_status'];
      $pass_decode = password_verify($pass, $password);

      if ($status == 1) {
          
        if($pass_decode) {
        
        $_SESSION['user_id'] = $users['uid'];
      
        $_SESSION['user_role'] = $users['role'];
        
        ?>
                <script>
                  location.replace('index-home.php');
                </script>

        <?php 
        }
        else
        {  //if password is incorrect 
        ?> 
                <script>
                  alert('Password is incorrect');
                </script>
        <?php 
        }
      }
      else
      {
        ?>
                <script>
                  alert('You Are Blocked, Contact To Admin.');
                </script> 
                <?php
      }

    }else
    {  //if username is not found  
    ?> 
      <script>
        alert('Username is incorrect');
      </script>
<?php    

        }

  }


?>
    <div class="bg-img">
      <div class="content">
        <img style="width: 15%;height: 15%;" src="assets/images/logo/logo.png" alt="logo">
        <header>Login Form</header>
        <form method="POST">
          <div class="field" >
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone" name="user-detail">
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password" name="user-pass">
            <span class="show">SHOW</span>
          </div>
          <div class="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div class="field">
            <input type="submit" value="LOGIN" name="login">
          </div>
        </form>
        <div class="login"><span style="color:blue">OR</span><br> Login with</div>
        <div class="links">
          <div class="facebook">
            <i class="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div class="instagram">
            <i class="fab fa-google"><span>Google</span></i>
          </div>
        </div>
        <div class="signup">Don't have account?
          <a href="signUp.php">Signup Now</a>
        </div>
      </div>
    </div>

    <script>
      const pass_field = document.querySelector('.pass-key');
      const showBtn = document.querySelector('.show');
      showBtn.addEventListener('click', function(){
       if(pass_field.type === "password"){
         pass_field.type = "text";
         showBtn.textContent = "HIDE";
         showBtn.style.color = "#3498db";
       }else{
         pass_field.type = "password";
         showBtn.textContent = "SHOW";
         showBtn.style.color = "#222";
       }
      });
    </script>


  </body>
</html>
