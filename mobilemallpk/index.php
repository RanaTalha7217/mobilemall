<!DOCTYPE html>
<html lang="en">

<head>
    <title>Mobilemall: Mobile Phone Prices in Pakistan - WhatMobile </title>
    <?php include_once 'links.php';?>
    
</head>

<body class="home">
    <!-- =======================Database Connection===================== -->
    <?php include_once 'connection.php';?>
    <!-- Consent buttons  -->
<style>
    .btn:hover{background-color:black !important}
</style>
    <div id="uniconsent-config"></div>
    <?php include_once'header.php'?>

    <section id="search">
        <div class="container">
            <div class="site_search">
                <form class="form-inline mr-auto">
                    <input class="form-control-lg" type="text" id="tags" name="tags" placeholder="Let's Find a Mobile For You!" aria-label="Search">
                    <button class="btn btn-lg search-submit form-rounded" type="button" id="srch_id" onclick="srch();">Search</button>
                </form>
            </div>
        </div>
    </section> <input type="hidden" name="min_range" id="min_range" value="10000" />
    <input type="hidden" name="max_range" id="max_range" value="250000" />

    <script src="https://mobilemall.pk/public_html/js/range.js"></script>
    <script src="https://mobilemall.pk/public_html/js/rating.js"></script>

    <!-- TAGNAME: 300x250_Top -->
    <div id='div-gpt-ad-mobilemallpk40127'></div>
    <div class="page">
        <div class="container">
            <section class="">
                <div class="row mobileRow" id="circle">
                    <div class="col-sm-6 col-md-3">
                        <div class="category-frame">
                            <h2 class="category-header">
                                <span class="cat-title">Mobile phones under</span>
                                <strong>Rs.15,000 To 25,000 PKR</strong>
                            </h2>
                            <div class="scroll-bar-wrap">
                                <ul class="category-content d-flex align-items-start flex-wrap">
                                    <!-- ================Select Query Start WHERE price BETWEEN 15000 AND 25000================= -->
                                    <?php
                                     $select_user = "SELECT * FROM mobilepics WHERE price BETWEEN 15000 AND 25000 ORDER BY id DESC LIMIT 6";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>

                                    <li class="category-items">
                                        <a href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?> & mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>" class="d-flex align-items-center">
                                            <div class="small_device_detail_image" style="background-image: url('<?php echo 'admin/' .$fetch_data['pimg'];?>')"> &nbsp;</div>
                                            <div class="small_device_title">
                                                <p><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></p>
                                                <strong>Rs. <?php echo number_format($fetch_data['price']);?>/-</strong>
                                            </div>
                                        </a>
                                    </li>
                                    <?php }?>

                                </ul>

                                <div class="cover-bar"></div>
                            </div>
                            <?php
                                     $select_user = "SELECT price_category FROM mobilepics WHERE price_category = '15,000 - 25,000' ORDER BY id DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     $fetch_data = mysqli_fetch_array($select_user_data)
                                    ?>
                            <a href="filter_by_price.php?filter-price=<?php echo $fetch_data['price_category'];?>" class="more_button">VIEW ALL</a>
                        </div>
                    </div>
                     <!-- ================Select Query Start WHERE price 25,000 & Rs.35,000================= -->
                    <div class="col-sm-6 col-md-3">
                        <div class="category-frame">
                            <h2 class="category-header">
                                <span class="cat-title">Mobile phones under</span>
                                <strong>Rs.25,001 To Rs.35,000 PKR</strong>
                            </h2>
                            <div class="scroll-bar-wrap">
                                <ul class="category-content d-flex align-items-start flex-wrap">
                                <?php
                                     $select_user = "SELECT * FROM mobilepics WHERE price BETWEEN 25001 AND 35000 ORDER BY id DESC LIMIT 6";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>

                                    <li class="category-items">
                                        <a href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?> & mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>" class="d-flex align-items-center">
                                            <div class="small_device_detail_image" style="background-image: url('<?php echo 'admin/' .$fetch_data['pimg'];?>')"> &nbsp;</div>
                                            <div class="small_device_title">
                                                <p><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></p>
                                                <strong>Rs. <?php echo number_format($fetch_data['price']);?>/-</strong>
                                            </div>
                                        </a>
                                    </li>
                                    <?php }?>
                                </ul>

                                <div class="cover-bar"></div>
                            </div>
                            <?php
                                     $select_user = "SELECT price_category FROM mobilepics WHERE price_category = '25,001 - 35,000' ORDER BY id DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     $fetch_data = mysqli_fetch_array($select_user_data)
                            ?>
                            <a href="filter_by_price.php?filter-price=<?php echo $fetch_data['price_category'];?>" class="more_button">VIEW ALL</a>
                        </div>
                    </div>
                     <!-- ================Select Query Start WHERE price 35,000 & Rs.50,000================= -->
                    <div class="col-sm-6 col-md-3">
                        <div class="category-frame">
                            <h2 class="category-header">
                                <span class="cat-title">Mobile phones under</span>
                                <strong>Rs.35,001 To Rs.50,000 PKR</strong>
                            </h2>
                            <div class="scroll-bar-wrap">
                                <ul class="category-content d-flex align-items-start flex-wrap">
                                <?php
                                    $select_user = "SELECT * FROM mobilepics WHERE price BETWEEN 35001 AND 50000 ORDER BY id DESC LIMIT 6";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>

                                    <li class="category-items">
                                        <a href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?> & mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>" class="d-flex align-items-center">
                                            <div class="small_device_detail_image" style="background-image: url('<?php echo 'admin/' .$fetch_data['pimg'];?>')"> &nbsp;</div>
                                            <div class="small_device_title">
                                                <p><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></p>
                                                <strong>Rs. <?php echo number_format($fetch_data['price']);?>/-</strong>
                                            </div>
                                        </a>
                                    </li>
                                    <?php }?>
                                </ul>

                                <div class="cover-bar"></div>
                            </div>
                            <?php
                                     $select_user = "SELECT price_category FROM mobilepics WHERE price_category = '35,001 - 50,000' ORDER BY id DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     $fetch_data = mysqli_fetch_array($select_user_data)
                            ?>
                            <a href="filter_by_price.php?filter-price=<?php echo $fetch_data['price_category'];?>" class="more_button">VIEW ALL</a>
                        </div>
                    </div>
                    <!-- ================Select Query Start WHERE price 50,000 & above================= -->
                    <div class="col-sm-6 col-md-3">
                        <div class="category-frame">
                            <h2 class="category-header">
                                <span class="cat-title">Mobile phones under</span>
                                <strong>Rs.50,001 To Above</strong>
                            </h2>
                            <div class="scroll-bar-wrap">
                                <ul class="category-content d-flex align-items-start flex-wrap">
                                <?php
                                     $select_user = "SELECT * FROM mobilepics WHERE (price BETWEEN 50001 AND 90999) OR (price BETWEEN 100000 AND 300000) ORDER BY id DESC  LIMIT 6";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>

                                    <li class="category-items">
                                        <a href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?> & mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>" class="d-flex align-items-center">
                                            <div class="small_device_detail_image" style="background-image: url('<?php echo 'admin/' .$fetch_data['pimg'];?>')"> &nbsp;</div>
                                            <div class="small_device_title">
                                                <p><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></p>
                                                <strong>Rs. <?php echo number_format($fetch_data['price']);?>/-</strong>
                                            </div>
                                        </a>
                                    </li>
                                    <?php }?>
                                </ul>

                                <div class="cover-bar"></div>
                            </div>
                            <?php
                                     $select_user = "SELECT price_category FROM mobilepics WHERE price_category = '50,001 - above' ORDER BY id DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     $fetch_data = mysqli_fetch_array($select_user_data)
                            ?>
                            <a href="filter_by_price.php?filter-price=<?php echo $fetch_data['price_category'];?>" class="more_button">VIEW ALL</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- TAGNAME: 300x250_Top -->
            <div id='div-gpt-ad-mobilemallpk40127'></div>
            
            <section class="">
                <div class="row">
                    
                    <div class="col-sm-2">
                        <div id="side_nav22" class="side_nav side_nav_brand22">
                                                <!--======New Mobile Grid==========  -->
                            <strong class="menu_title browse_by">New Mobiles </strong>

                            <nav>
                                
                                <ul id="menu-categories" class="menu">
                                    <?php include_once 'connection.php';?>
                                <?php
                                     $select_user = "SELECT DISTINCT mobilename FROM mobilepics ORDER BY mobilename ASC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                    
                                    <li><a href="index.php?chooseMob=<?php echo $fetch_data['mobilename'];?>"><?php echo $fetch_data['mobilename'];?> Mobiles</a></li>
                                    
                                    <?php };?>

                                    <!-- <li><a href="https://mobilemall.pk/upcoming-mobiles-in-pakistan">View All</a></li> -->
                                </ul>
                                
                            </nav>
                        </div>

                                                        <!--======Mobile Brand Grid==========  -->
                        <div id="side_nav" class="side_nav side_nav_brand">
                            <strong class="menu_title browse_by"> Mobile Brands </strong>

                            <nav>
                                <ul id="menu-categories" class="menu">
                                <?php include_once 'connection.php';?>
                                <?php
                                     $select_user = "SELECT DISTINCT mobilename FROM mobilepics ORDER BY mobilename ASC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                    <li><a href="index.php?chooseMobBrand=<?php echo $fetch_data['mobilename'];?>"><?php echo $fetch_data['mobilename'];?> Mobiles</a></li>
                                    <?php }?>
                                    <!-- <li><a href="https://mobilemall.pk/prices">View All</a></li> -->
                                </ul>

                            </nav>


                        </div>
                                                        <!--======Best Mobile Grid==========  -->

                        <div id="side_nav2" class="side_nav mobile_nav">
                            <strong class="menu_title browse_by"> Best Mobiles </strong>

                            <nav>
                                <ul id="menu-categories" class="menu">
                                <?php include_once 'connection.php';?>
                                <?php
                                     $select_user = "SELECT * FROM mobilepics WHERE (price BETWEEN 50000 AND 90999) OR (price BETWEEN 100000 AND 300000) ORDER BY id DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                    <li class="pr-1"><a href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?>& mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>"><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></a></li>
                                    <?php   };?>
                                </ul>
                            </nav>

                        </div>
                        <div style="position: sticky;top:90;">
                            <div style="text-align: center;" class="AdsbySOD SOD_160x600"></div>
                            <!-- TAGNAME: 300x250_top1 -->
                            <div id='div-gpt-ad-mobilemallpk40128'></div>
                        </div>
                    </div>
                    <div class="col-sm-8"  id="mobile-list">

                    <ul class="devices_list row no-gutters" >
															<!--========SELECT Query for grid=========-->
                        <?php
                        if(isset($_GET['mobName'])){
                            $mob_name = $_GET['mobName'];
                            $select_user = "SELECT * FROM mobilepics WHERE mobilename='$mob_name' ORDER BY id DESC  ";
                        }
                        elseif(isset($_GET['chooseMob'])){
                            $mob_choose = $_GET['chooseMob'];
                            $select_user = "SELECT * FROM mobilepics WHERE mobilename='$mob_choose' ORDER BY id DESC LIMIT 2";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                            
                        }
                        elseif(isset($_GET['chooseMobBrand'])){
                            $choose_mob_brand = $_GET['chooseMobBrand'];
                            $select_user = "SELECT * FROM mobilepics WHERE mobilename='$choose_mob_brand' ORDER BY id DESC";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                        }
                        elseif(isset($_GET['mob-Ram'])){
                            $choose_mob_ram = $_GET['mob-Ram'];
                            $select_user = "SELECT * FROM mobilepics WHERE mobRam='$choose_mob_ram ' ORDER BY id DESC";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                        }
                        elseif(isset($_GET['mob-Storage'])){
                            $choose_mob_str = $_GET['mob-Storage'];
                            $select_user = "SELECT * FROM mobilepics WHERE builtIn='$choose_mob_str' ORDER BY id DESC";
                        }
                        elseif(isset($_GET['choose-Cam'])){
                            $choose_cam = $_GET['choose-Cam'];
                            $select_user = "SELECT * FROM mobilepics WHERE camMP='$choose_cam' ORDER BY id DESC";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                        }
                        elseif(isset($_GET['choose-Catg'])){
                            $choose_catg = $_GET['choose-Catg'];
                            $select_user = "SELECT * FROM mobilepics WHERE sizeCategory='$choose_catg' ORDER BY id DESC";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                        }
                        elseif(isset($_GET['choose-battery'])){
                            $choose_catg = $_GET['choose-battery'];
                            $select_user = "SELECT * FROM mobilepics WHERE batteryCapacity='$choose_catg' ORDER BY id DESC ";
                            echo "<script>jQuery('html, body').animate({
                                scrollTop: jQuery('.mobileRow').offset().top
                            }, 200);</script>";
                        }
                        else{
                            $select_user = "SELECT * FROM mobilepics ORDER BY id DESC LIMIT 30";
                        }
                        
                        $select_user_data = mysqli_query($conn, $select_user); 
                        while($fetch_data = mysqli_fetch_array($select_user_data)){
                        ?>
								<li class="col-12 col-lg-6">
									<div class="device_tile d-flex align-items-start justify-content-space">
										<a class="" href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?> & mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>">
                                        
											<div class="device_image col-auto">

												<img src="<?php echo 'admin/' .$fetch_data['pimg'];?>" style="" width="109" alt="Image <?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?>" class="img-fluid">

											</div>
										
										<div class="device_snapshot col">
											
												<div class="device_title"><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?> Price In Pakistan</div>
                                        </a>	
											<div class="device_info d-flex align-items-center justify-content-space flex-wrap">
                                                <div class="col"><span>display</span> <strong><?php echo $fetch_data['size'];?>"</strong></div>
                                                    <div class="col"><span>storage</span> <strong><?php echo $fetch_data['builtIn'];?></strong></div>
                                                        <div class="col"><span>RAM</span> <strong><?php echo $fetch_data['mobRam'];?></strong></div>
                                                </div>
											<div class="device_extra_info">
												<div class="device_ratings">
													
													<div class="d-none d-md-block hidden-sm-down has_icon antutu_w_icon" data-toggle="tooltip" data-placement="top" title=""></div>
													<div class="d-none d-md-block hidden-sm-down has_icon camera_w_icon" data-toggle="tooltip" data-placement="top" title="<?php echo $fetch_data['mainCamera'];?>"></div>
													<div class="d-none d-md-block hidden-sm-down has_icon battery_w_icon" data-toggle="tooltip" data-placement="top" title="<?php echo $fetch_data['batteryCapacity'];?>"></div>
													<div class="rating_stars">
														<div id="halfstarsReview-5130" style="font-size:18px;display:inline !important;text-align: center;" ></div>
														<input name="rating_value" type="hidden" id="rating_value" value="2" />
														<input name="myrating_value" type="hidden" id="myrating_value" value="" />
														<input name="mystoreid" type="hidden" id="mystoreid" value="5130" />
														<!--<div class="ratingValue11"><p>0/5</p></div>-->
														<div style="clear:both;"></div>
														<p id="rsuccess1" style="display: none;" class="mysuccess">Thank you for rating.</p>
														<p id="rerror1" style="display: none;" class="myerror">Error rating not submit try again.</p>
                                                        
                                                    </div>

                                                    <style>
                                                    .checked {
                                                    margin-top:7.5px;
                                                    color: orange;
                                                    }
                                                    .checked1{
                                                    margin-top:7.5px;
                                                    }

                                                    </style>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked1"></span>
                                                    <span class="fa fa-star checked1"></span>

													<script type="text/javascript"> 
													
													</script>
													
													
                                        </div>
												<div class="device_compare_prices">
													<div class="d-none d-md-block">
                                                        <button onclick="opencompare('https://mobilemall.pk/compare/nubia-red-magic-7-5g-price-in-pakistan');" class="d-none d-md-block ajax_add_to_cart2 has_icon add_compare_w_icon" type="button"  name="ajax_add_to_cart2"  data-toggle="tooltip" data-placement="top" title="Add this mobile to comparison list" ></button>
                                                            <a style="min-height: 20px;" onclick="opencompare('https://mobilemall.pk/compare/nubia-red-magic-7-5g-price-in-pakistan');" type="button">Compare</a>
                                                    </div>
											
													<div><sup>Rs. </sup><?php echo number_format($fetch_data['price']);?></div>
													
												</div>
												
											</div>
										</div>
                                    </div>
								</li>
                                <?php }?>
								
								
								</ul>
                        <!-- ===================pagination Start================= -->
                    <!-- `        <div class="col-12 center-page">
                                    <nav class="navigation pagination" role="navigation" aria-label="&nbsp;">
                                        <div class="nav-links">
                                            &nbsp;
                                            <a class="current">1</a>
                                            <a href="" data-ci-pagination-page="2">2</a>
                                            <a href="" data-ci-pagination-page="3">3</a>
                                            <a href="" data-ci-pagination-page="2">
                                                <i class="last fa fa-arrow-right"></i>
                                            </a>
                                            <a href="" data-ci-pagination-page="165">
                                                <i class="last fa fa-angle-double-right"></i>
                                            </a> 
                                            <i class="loading fa fa-spinner fa-spin orange bigger-125 hide"></i>
                                        </div>
                                    </nav>
                                </div>` -->
                        <!-- ===================pagination End================= -->
                        <div class="col-12 center-page">
                            <div>
                                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                                <ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-4388107725439879" data-ad-slot="8137979971"></ins>
                                <script>
                                    (adsbygoogle = window.adsbygoogle || []).push({});
                                </script>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-2">
                        <div class="d-none d-md-block">
                            <div id="fb-root"></div>
                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="6v4mODEX"></script>
                            <div class="fb-page" data-href="https://m.facebook.com/TheIconicBlogger/" data-tabs="timeline" data-width="180" data-height="180" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
                                <blockquote cite="https://m.facebook.com/TheIconicBlogger/" class="fb-xfbml-parse-ignore"><a href="https://m.facebook.com/TheIconicBlogger/">The Iconic Blogger</a></blockquote>
                            </div>
                        </div>
                        <div class="side_nav sort">
                            <div id="filter1">
                                <strong class="ram filter1">RAM</strong>
                                <nav>
                                    <ul>
                                    <?php include_once 'connection.php';?>
                                    <?php
                                     $select_user = "SELECT DISTINCT mobRam FROM mobilepics WHERE mobRam != 0 ORDER BY mobRam DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                        <li><a href="index.php?mob-Ram=<?php echo $fetch_data['mobRam'];?>">Minimum <?php echo $fetch_data['mobRam'];?></a></li>
                                        <?php }?>
                                    </ul>
                                </nav>
                            </div>
                            <div id="filter2">
                                <strong class="platform filter2">Internal Storage</strong>
                                <nav>
                                    <ul>
                                    <?php include_once 'connection.php';?>
                                    <?php
                                     $select_user = "SELECT DISTINCT builtIn FROM mobilepics WHERE builtIn != 0 ORDER BY builtIn DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                        <li><a href="index.php?mob-Storage=<?php echo $fetch_data['builtIn'];?>">Minimum <?php echo $fetch_data['builtIn'];?></a></li>
                                    <?php }?>
                                    </ul>
                                </nav>
                            </div>

               
                            <div id="filter3">
                                <strong class="camera filter3">Main Camera</strong>
                                <nav>
                                    <ul>
                                    <?php include_once 'connection.php';?>
                                    <?php
                                     $select_user = "SELECT DISTINCT camMP FROM mobilepics WHERE camMP != 0 ORDER BY builtIn DESC";
                                     $select_user_data = mysqli_query($conn, $select_user);
                                     while($fetch_data = mysqli_fetch_array($select_user_data)){
                                    ?>
                                        <li><a href="index.php?choose-Cam=<?php echo $fetch_data['camMP'];?>">Minimum <?php echo $fetch_data['camMP'];?></a></li>
                                        <?php }?>
                                    
                                    </ul>
                                </nav>
                            </div>
                            <div id="filter4">
                                <strong class="screen filter4">Screen Size</strong>
                                <nav>
                                    <ul>
                                        <?php include_once 'connection.php';?>
                                        <?php
                                        $select_user = "SELECT DISTINCT sizeCategory FROM mobilepics WHERE sizeCategory != 0 ORDER BY sizeCategory DESC";
                                        $select_user_data = mysqli_query($conn, $select_user);
                                        while($fetch_data = mysqli_fetch_array($select_user_data)){
                                        ?>
                                        <li><a href="index.php?choose-Catg=<?php echo $fetch_data['sizeCategory'];?>"><?php echo $fetch_data['sizeCategory'];?></a></li>
                                        <?php }?>
                             
                                    </ul>
                                </nav>
                            </div>
                            <div id="filter5">
                                <strong class="platform filter5">Battery Capacity</strong>
                                <nav>
                                    <ul>
                                    <?php include_once 'connection.php';?>
                                        <?php
                                        $select_user = "SELECT DISTINCT batteryCapacity FROM mobilepics WHERE batteryCapacity != 0 ORDER BY batteryCapacity DESC";
                                        $select_user_data = mysqli_query($conn, $select_user);
                                        while($fetch_data = mysqli_fetch_array($select_user_data)){
                                        ?>
                                        <li><a href="index.php?choose-battery=<?php echo $fetch_data['batteryCapacity'];?>">Minimum <?php echo $fetch_data['batteryCapacity'];?></a></li>
                                        <?php }?>
                                 
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div style="position: sticky;top:90;">
                            <div style="text-align: center;" class="AdsbySOD SOD_160x600"></div>
                            <div id='div-gpt-ad-mobilemallpk40128'>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section class="aux">
                <div class="row">



                    <div class="col-sm-6 col-md-4">

                        <div class="aux_box">
                            <div class="aux_box_image">
                                <a href="https://mobilemall.pk/blog/samsung-galaxy-s22-plus-review" target="_blank">
						<img style="height: 240px;width: 380px;" class="lazy loading" alt="Samsung Galaxy S22 Plus Review" src="https://mobilemall.pk/blog/wp-content/uploads/2022/02/Samsung-Galaxy-S22-Plus-Review.jpg" data-was-processed="true" title="Samsung Galaxy S22 Plus Review" />
						</a>
                            </div>
                            <div>
                                <a href="https://mobilemall.pk/blog/samsung-galaxy-s22-plus-review" target="_blank">
                                    <h4 title="Samsung Galaxy S22 Plus Review">Samsung Galaxy S22 Plus Review</h4>
                                </a>

                            </div>
                        </div>

                    </div>





                    <div class="col-sm-6 col-md-4">

                        <div class="aux_box">
                            <div class="aux_box_image">
                                <a href="https://mobilemall.pk/blog/are-selling-sports-cards-as-nft-a-big-business-these-days" target="_blank">
						<img style="height: 240px;width: 380px;" class="lazy loading" alt="Are Selling Sports Cards As NFT A Big Business These Days" src="https://mobilemall.pk/blog/wp-content/uploads/2022/02/Are-Selling-Sports-Cards-as-NFT-A-Big-Business-These-Days.jpg" data-was-processed="true" title="Are Selling Sports Cards As NFT A Big Business These Days" />
						</a>
                            </div>
                            <div>
                                <a href="https://mobilemall.pk/blog/are-selling-sports-cards-as-nft-a-big-business-these-days" target="_blank">
                                    <h4 title="Are Selling Sports Cards As NFT A Big Business These Days">Are Selling Sports Cards As NFT A Big Business These Da</h4>
                                </a>

                            </div>
                        </div>

                    </div>





                    <div class="col-sm-6 col-md-4">

                        <div class="aux_box">
                            <div class="aux_box_image">
                                <a href="https://mobilemall.pk/blog/heres-how-to-use-your-mobile-phone-while-traveling-abroad" target="_blank">
						<img style="height: 240px;width: 380px;" class="lazy loading" alt="For Work Or Pleasure, Here’s How To Use Your Mobile Phone While Traveling Abroad" src="https://mobilemall.pk/blog/wp-content/uploads/2022/02/For-Work-or-Pleasure-Heres-How-to-Use-Your-Mobile-Phone-While-Traveling-Abroad.jpg" data-was-processed="true" title="For Work Or Pleasure, Here’s How To Use Your Mobile Phone While Traveling Abroad" />
						</a>
                            </div>
                            <div>
                                <a href="https://mobilemall.pk/blog/heres-how-to-use-your-mobile-phone-while-traveling-abroad" target="_blank">
                                    <h4 title="For Work Or Pleasure, Here’s How To Use Your Mobile Phone While Traveling Abroad">For Work Or Pleasure, Here’s How To Use Your Mobile P</h4>
                                </a>

                            </div>
                        </div>

                    </div>




                </div>
            </section>
            <div style="text-align: center;" class="AdsbySOD SOD_970x250"></div>
            <!-- TAGNAME: 300x250_incontent -->
            <div id='div-gpt-ad-mobilemallpk40129'>
            </div>
            </br>
        </div>


    </div>

<?php include_once'footer.php'?>
   
<?php include_once 'foot.php';?>
</body>

</html>
<!-- TAGNAME: 300x250_bottom -->
<div id='div-gpt-ad-mobilemallpk40130'>
</div>

