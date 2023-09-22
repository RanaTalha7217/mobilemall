<!DOCTYPE html>
<html lang="en">

<head>
<?php include_once 'links.php' ?>

<body>
<?php include_once 'side-bar.php'; ?>
        <div id="main">
            <header class="mb-3">
                <a href="#" class="burger-btn d-block d-xl-none">
                    <i class="bi bi-justify fs-3"></i>
                </a>
            </header>
            
<div class="page-heading">
    <h3>Mobiles Specifications</h3>
</div>

<div class="page-content">
    <section class="row">
        <div class="col-12">
            <div class="card">
    <form method="POST" class="form-group mt-3" enctype="multipart/form-data">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
          <label for="">Mobile Name:</label>
            <select id="exampleFormControlSelect1" class="form-control" name="mbl-name">
                        <option value="">--select--</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Huawei">Huawei</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Rive">Rive</option>
                        <option value="Nokia">Nokia</option>
                        <option value="OnePlus">OnePlus</option>
                        <option value="Honor">Honor</option>
                        <option value="Q Mobile">Q Mobile</option>
                        <option value="Tecno">Tecno</option>
                        <option value="HTC">HTC</option>
                        <option value="LG">LG</option>
                        <option value="Realme">Realme</option>
                        <option value="itel">itel</option>
                        <option value="Infinix">Infinix</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Sony">Sony</option>
                        <option value="Haier">Haier</option>
                        <option value="Motorola">Motorola</option>
                        <option value="BlackBerry">BlackBerry</option>
                      </select>
          </div>
         
          <div class="col-xl-6 col-lg-6">
          <label for="">Mobile Model:</label>
            <input type="text" class="form-control" name="mbl-model">
          </div>
        </div>
        <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Price:</label>
        <input type="text" class="form-control" name="mbl-price">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Price Category:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="price-catg">
                <option value="">--select--</option>
                <option value="15,000 - 25,000">15,000 - 25,000</option>
                <option value="25001 - 35000">25001 - 35000</option>
                <option value="35001 - 50000">35001 - 50000</option>
                <option value="50001 - above">50001 - above</option> 
        </select>
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Version:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="mbl-os">
                        <option value="">--select--</option>
                        <option value="Android 13">Android 13</option>
                        <option value="Android 12L">Android 12L</option>
                        <option value="Android 12">Android 12</option>
                        <option value="Android 11">Android 11</option>
                        <option value="Android 10">Android 10</option>
                        <option value="Android Pie">Android Pie</option>
                        <option value="Android Oreo">Android Oreo</option>
                        <option value="Android Nougat">Android Nougat</option>
                </select>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile SIM:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="mbl-sim">
                <option value="">--select--</option>
                <option value="Dual SIM (Micro-SIM (3FF))">Dual SIM (Micro-SIM (3FF))</option>
                <option value="Dual SIM (Nano-SIM (4FF))">Dual SIM (Nano-SIM (4FF))</option>
                <option value="Single SIM (Micro-SIM (3FF))">Single SIM (Micro-SIM (3FF))</option>
                <option value="Single SIM (Nano-SIM (4FF))">Single SIM (Nano-SIM (4FF))</option>
        </select>
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Colors:</label>
        <select class="form-control selectpicker" multiple data-live-search="true" name="mbl-color[]">
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Gray">Gray</option>
              <option value="Brown">Brown</option>
              <option value="Pink">Pink</option>
              <option value="Sea Green">Sea Green</option>
              <option value="Cloud Lavendar">Cloud Lavendar</option>
              <option value="Mustard">Mustard</option>
              <option value="Lavender">Lavender</option>
              <option value="Phantom Green">Phantom Green</option>
              <option value="Aura White">Aura White</option>
              <option value="Burgund">Burgundy</option>
              <option value="Awesome Violet">Awesome Violet</option>
              <option value="Phantom Black">Phantom Black</option>
              <option value="Phantom Viole">Phantom Viole</option>
              <option value="Cloud Red">Cloud Red</option>
              <option value="Green">Green</option>
              <option value="Mystic Greenlish">Mystic Greenlish</option>
              <option value="Mystic Bronze">Mystic Bronze</option>
        </select>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Frequency:</label>
        <input type="text" class="form-control" placeholder="4G Band" name="mbl-band">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Processor:</label>
        <input type="text" class="form-control" placeholder="CPU" name="mbl-cpu">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Display:</label>
        <input type="text" class="form-control" placeholder="Technology" name="mbl-technology">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Size:</label>
        <select id="exampleFormControlSelect1" class="form-control" data-live-search="true" name="mbl-size">
                <option value="">--select--</option>
                <option value="4.0">4.0</option>
                <option value="4.1">4.1</option>
                <option value="4.2">4.2</option>
                <option value="4.3">4.3</option>
                <option value="4.4">4.4</option>
                <option value="4.5">4.5</option>
                <option value="4.6">4.6</option>
                <option value="4.7">4.7</option>
                <option value="4.8">4.8</option>
                <option value="4.9">4.9</option>
                <option value="5.0">5.0</option>
                <option value="5.1">5.1</option>
                <option value="5.2">5.2</option>
                <option value="5.3">5.3</option>
                <option value="5.4">5.4</option>
                <option value="5.5">5.5</option>
                <option value="5.6">5.6</option>
                <option value="5.7">5.7</option>
                <option value="5.8">5.8</option>
                <option value="5.9">5.9</option>
                <option value="6.0">6.0</option>
                <option value="6.1">6.1</option>
                <option value="6.2">6.2</option>
                <option value="6.3">6.3</option>
                <option value="6.4">6.4</option>
                <option value="6.5">6.5</option>
                <option value="6.6">6.6</option>
                <option value="6.7">6.7</option>
                <option value="6.8">6.8</option>
                <option value="6.9">6.9</option>
                <option value="7.0">7.0</option>
                <option value="7.1">7.1</option>
                <option value="7.2">7.2</option>
                <option value="7.3">7.3</option>
                <option value="7.4">7.4</option>
                <option value="7.5">7.5</option>
                <option value="7.6">7.6</option>
                <option value="7.7">7.7</option>
                <option value="7.8">7.8</option>
                <option value="7.9">7.9</option>
        </select>
        </div>
      </div>
      <br>
      <div class="row">
      <div class="col-xl-6 col-lg-6">
        <label for="">Size Category:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="size-catg">
                <option value="">--select--</option>
                <option value="Below 4.5 inch">Below 4.5 inch</option>
                <option value="4.5 to 5 inch">4.5 to 5 inch</option>
                <option value="5.1 to 5.5 inch">5.1 to 5.5 inch</option>
                <option value="5.6 to 6 inch">5.6 to 6 inch</option>
                <option value="6 to 6.9 inch">6 to 6.9 inch</option>
                <option value="7 inch and above">7 inch and above</option>
                
        </select>
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Memory:</label>
        <select class="form-control selectpicker" multiple data-live-search="true" name="mbl-built">
                <option value="">--select--</option>
                <option value="8GB">8GB</option>
                <option value="16GB">16GB</option>
                <option value="32GB">32GB</option>
                <option value="64GB">64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
        </select>
        </div>
      </div>
<br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Card:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="mbl-card">
                <option value="">--select--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
        </select>
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Main Camera MP:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="cam-MP">
                <option value="">--select--</option>
                <option value="8MP">8MP</option>
                <option value="12MP">12MP</option>
                <option value="16MP">16MP</option>
                <option value="20MP">20MP</option>
                <option value="32MP">32MP</option>
                <option value="48MP">48MP</option>
                <option value="64MP">64MP</option>
                <option value="108MP">108MP</option>
        </select>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Cameras:</label>
        <input type="text" class="form-control" placeholder="Main" name="mbl-main">
        </div>
        <div class="col-xl-6 col-lg-6 mt-2"><br>
        <input type="text" class="form-control" placeholder="Front" name="mbl-front">
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Connectivity:</label>
        <input type="text" class="form-control" placeholder="Bluetooth" name="mbl-bluetooth">
        </div>
        <div class="col-xl-6 col-lg-6 mt-2"><br>
        <input type="text" class="form-control" placeholder="USB" name="mbl-usb">
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Sensors:</label>
        
        <select class="form-control selectpicker" multiple data-live-search="true" name="mbl-sensor[]">
              <option value="Accelerometer">Accelerometer</option>
              <option value="Gyroscope">Gyroscope</option>
              <option value="Barometer">Barometer</option>
              <option value="Compass">Compass</option>
              <option value="Proximity">Proximity</option>
              <option value="Fingerprint">Fingerprint </option>
              <option value="Fingerprint (under display)">Fingerprint (under display)</option>
        </select>
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Torch:</label>
        <select id="exampleFormControlSelect1" class="form-control" name="mbl-torch">
                <option value="">--select--</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
        </select>
        </div>
      </div>
        <br>
        <div class="row">
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile Battery:</label>
        <input type="text" class="form-control" placeholder="Capacity" name="mbl-capacity">
        </div>
        <div class="col-xl-6 col-lg-6">
        <label for="">Mobile RAM:</label>
        <select class="form-control selectpicker" multiple data-live-search="true" name="mob-ram">
                <option value="">--select--</option>
                <option value="2GB">2GB</option>
                <option value="3GB">3GB</option>
                <option value="4GB">4GB</option>
                <option value="6GB">6GB</option>
                <option value="8GB">8GB</option>
                <option value="12GB">12GB</option>
                <option value="16GB">16GB</option>
                <option value="32GB">32GB</option>
        </select>
        </div>
      </div>
        
        <br>
        <label for="">Upload Mobile Image:</label>
        <input type="file" class="form-control" name="file" id="exampleInputPassword1">
        <br>
        <label for="">Mobile Detail:</label>
        <textarea name="mbl-detail" class="form-control" rows="8" cols="50"></textarea><br>
        <br>
        <button class="btn btn-danger mb-2" name="insert">SUBMIT</button>
      </div>
    </form>         
            </div>
          </div>
  </section>
</div>
</div>
           
<?php include_once 'connection.php';?>


<?php
    if(isset($_POST['insert'])){
      $mbl_name = $_POST['mbl-name'];
      $mbl_model = $_POST['mbl-model'];
      $mbl_price = $_POST['mbl-price'];
      $price_catg = $_POST['price-catg'];
      $mbl_os = $_POST['mbl-os'];
      $mbl_sim = $_POST['mbl-sim'];
      $mbl_color = $_POST['mbl-color'];
      $chkclrstr = implode(" ", $mbl_color);
      $mbl_band = $_POST['mbl-band'];
      $mbl_cpu = $_POST['mbl-cpu'];
      $mbl_technology = $_POST['mbl-technology'];
      $mbl_size = $_POST['mbl-size'];
      $size_catg = $_POST['size-catg'];
      $mbl_built = $_POST['mbl-built'];
      $mbl_card = $_POST['mbl-card'];
      $cam_MP = $_POST['cam-MP'];
      $mbl_main = $_POST['mbl-main'];
      $mbl_front = $_POST['mbl-front'];
      $mbl_bluetoth = $_POST['mbl-bluetooth'];
      $mbl_usb = $_POST['mbl-usb'];
      $mbl_sensor = $_POST['mbl-sensor'];
      $chksensorstr = implode(" ", $mbl_sensor);
      $mbl_torch = $_POST['mbl-torch'];
      $mbl_capacity = $_POST['mbl-capacity'];
      $mbl_ram = $_POST['mob-ram'];
      $mbl_detail = $_POST['mbl-detail'];

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
      $check=mysqli_query($conn,"SELECT * FROM mobilepics WHERE (model='$mbl_model') AND (builtIn='$mbl_built') AND (mobRam='$mbl_ram')");
      $checkrows=mysqli_num_rows($check);
      if($checkrows>0) {
        ?>
        <script>
        alert("Already Exist");
        location.replace('mobile-add.php');
        </script>
        <?php
     }
     else {
      $insert = "INSERT INTO mobilepics(mobilename, model, price, price_category, os, sim, colors, band, cpu, technology, size, sizeCategory, builtIn, card, camMP, mainCamera, frontCamera, Bluetooth, usb, sensors, torch, batteryCapacity, mobiledisc, pimg, mobRam) 
      Values ('$mbl_name', '$mbl_model', '$mbl_price', '$price_catg', '$mbl_os', '$mbl_sim', '$chkstr', '$mbl_band', '$mbl_cpu', '$mbl_technology', '$mbl_size', '$size_catg', '$mbl_built', '$mbl_card', '$cam_MP', '$mbl_main', '$mbl_front', '$mbl_bluetoth', '$mbl_usb', '$chksensorstr', '$mbl_torch', '$mbl_capacity', '$mbl_detail', '$destinationfile', '$mbl_ram')";
      $insert_data = mysqli_query($conn, $insert);
      mysqli_close($conn);
      if($insert_data){
        ?>
        <script>
        alert("Inserted");
        location.replace('mobile-add.php');
        </script>
        <?php
      }
      else{
        ?>
        <script>
        alert("Not Inserted");
        </script>
        <?php
      }
    }
    }
?>







<?php include_once 'foot.php';?>
</body>
</html>