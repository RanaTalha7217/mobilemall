<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php include_once 'links.php' ?>
    <title>Document</title>
</head>
<body>
<?php include_once 'side-bar.php'; ?>
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
  <table class="table">
  <thead class="thead-dark">
    <tr style="text-align:center;">
      <th scope="col" >#</th>
      <th scope="col">Name</th>
      <th scope="col">Model</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Delete Data</th>
      <th scope="col">Update Data</th>
    </tr>
  </thead>
  <tbody>
    <?php include_once 'connection.php';?>
    <?php
    $i = 1;
    $select_user = "SELECT * FROM mobilepics ORDER BY id DESC";
    $select_user_data = mysqli_query($conn, $select_user);
    while($fetch_data = mysqli_fetch_array($select_user_data)){
      ?>
    <tr style="text-align:center;">
      <th scope="row" class="pt-5"><?php echo $i;?></th>
      <td class="pt-5"><?php echo $fetch_data['mobilename'];?></td>
      <td class="pt-5"><?php echo $fetch_data['model'];?></td>
      <td class="pt-5">Rs. <?php echo $fetch_data['price'];?></td>
      <td><img src="<?php echo $fetch_data['pimg'];?>" alt="image" height="100px" width="75px"></td>
      <td>
        <input type="hidden" class="delete_id" value="<?php echo $fetch_data['id'];?>">
        <a href="delete.php" class="btn btn-danger delete_btn mt-4">Detete</a>
      </td>
      <td><a href="update.php?updatedata=<?php echo $fetch_data['id'];?>" class="btn btn-primary pl-4 pr-4 mt-4">Edit</a></td>
      
    </tr>
    <?php
    $i++;

}?>
  </tbody>
</table>
</div>
       
            </div>
          </div>
  </section>
</div>
</div>



<?php include_once 'foot.php';?>
</body>
</html>