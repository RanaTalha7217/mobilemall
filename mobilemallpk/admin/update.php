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
<?php include_once 'side-bar.php'; ?>
    <?php include_once 'connection.php';?>

    <?php
    $mob_ID = $_GET['updatedata'];
    $select_user = "SELECT * FROM mobilepics WHERE id = '$mob_ID'";
    $select_user_data = mysqli_query($conn, $select_user);
    $fetch_data = mysqli_fetch_array($select_user_data);

    if(isset($_POST['update'])){
        $mob_name = $_POST['mob-name'];
        $mob_model = $_POST['mob-model'];
        $mob_price = $_POST['mob-price'];

        $files = $_FILES['file'];

        $filename = $files['name'];
        $filetmp = $files['tmp_name'];
  
        $fileext = explode('.',$filename);
        $filecheck = strtolower(end($fileext));
  
        $fileextstored = array('png', 'jpg', 'jpeg');
        if(in_array($filecheck, $fileextstored)){
            $destinationfile ='image/upload/'. $filename;
            move_uploaded_file($filetmp, $destinationfile);
        }
        
       {
        $update = "UPDATE mobilepics SET
        mobilename = '$mob_name',
        model = '$mob_model',
        price = '$mob_price',
        pimg = '$destinationfile'
        WHERE id = '$mob_ID';
    ";
        $update_date = mysqli_query($conn, $update);

        if($update_date)
        { 
          ?>
            <script>
            alert("update");
            location.replace('mobile-add-list.php');
            </script>
            <?php 
          }
          else
          { 
            ?>
            <script>
            alert("Not Inserted");
            </script>
            <?php
            }
        }
       }
        ?>

<div id="main">
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>
            
<div class="page-heading">
    <h3>Mobiles Data</h3>
</div>

<div class="page-content">
    <section class="row">
        <div class="col-xl-12 col-12 col-md-12 col-sm-12 col-12">
            <div class="card">
            
            <div class="container mt-5">
            <form method="POST" class="mt-3" enctype="multipart/form-data">
      <div class="container">
        <label for="">Mobile Name</label>
        <input type="text" value="<?php echo $fetch_data['mobilename'];?>" class="form-control" name="mob-name"><br>
        <label for="">Mobile Model</label>
        <input type="text" value="<?php echo $fetch_data['model'];?>" class="form-control" name="mob-model"><br>
        <label for="">Price</label>
        <input type="text" value="<?php echo $fetch_data['price'];?>" class="form-control" name="mob-price"><br>
        <label for="">Picture</label><br>
        <img src="<?php echo $fetch_data['pimg'];?>" alt="image" height="100px" width="75px">
        <input type="file" name="file" id="exampleInputPassword1">
        <br><br>
        <button name="update"<a href="mobile-add-list.php?" class="btn btn-primary pl-4 pr-4 mb-5 mt-3">Update</a></button>
        <a href="mobile-add-list.php" class="btn btn-primary pl-5 pr-5 ml-5 mb-5 mt-3">Back</a>
      </div>
    </form>    
        </div>
     </div>
    </div>
  </section>
</div>
</div>


    
    <?php include_once 'foot.php';?>
</body>
</html>