<!DOCTYPE html>
<html lang="en">

<head>
    <title>ZTE Nubia Red Magic 7 Pro Price In Pakistan - MobileMall</title>
    <?php include_once 'links.php';?>

</head>

<body class="home">
    <!-- Google Tag Manager (noscript) -->

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVJZRQM"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <!-- Consent buttons  -->

    <div id="uniconsent-config"></div>
 <?php include_once 'header.php'?>
    <section id="search">
        <div class="container">
            <div class="site_search">
                <form class="form-inline mr-auto">

                    <input class="form-control-lg" type="text" id="tags" name="tags" placeholder="Let's Find a Mobile For You!" aria-label="Search">
                    <button class="btn btn-lg search-submit form-rounded" type="button" id="srch_id" onclick="srch();">Search</button>

                    <!-- AUTOCOMPLETE Start -->
                    <link rel="stylesheet" href="https://mobilemall.pk/public_html/css/jquery-ui.css">
                    <script src="https://mobilemall.pk/public_html/js/jquery-ui.js"></script>
                    <!-- AUTOCOMPLETE End /-->

                    <script type="text/javascript">
                        //For Searching Start
                        function srch() {
                            var tags = $("#tags").val();
                            window.location.href = "https://mobilemall.pk/search/" + tags;
                        }
                        //For Searching Data Dropdown;
                        $(document).ready(function() {
                            $("#tags").autocomplete({

                                source: "https://mobilemall.pk/dropdown-search",
                                minLength: 1,
                                select: function(event, ui) {
                                    window.location.href = "https://mobilemall.pk/" + ui.item.value;
                                }
                            });
                            var obj = $("#tags").data("autocomplete");
                            obj && (obj._renderItem = function(ul, item) {
                                return $('')
                                    .data("item.autocomplete", item)
                                    .append("<li class='mysearch ui-autocomplete-row'>" + item.label + "<li>")
                                    .appendTo(ul);
                            });

                            //Search Enter Click
                            $('#tags').keypress(function(event) {
                                if (event.keyCode == 13) {
                                    $('#srch_id').click();
                                    event.preventDefault();
                                    return false;
                                }
                            });
                        });
                        //For Searching End/
                    </script>
                </form>
            </div>
        </div>
    </section>
    <div style="text-align: center;" class="AdsbySOD SOD_970x250"></div>
    <!-- TAGNAME: 300x250_Top -->
    <div id='div-gpt-ad-mobilemallpk40127'>
    </div>
    <script src="https://mobilemall.pk/public_html/js/rating.js"></script>
    <div class="page">
        <div class="container">
            <div class="breadcrumbs" style="margin-bottom: 10px">
                <div style="float:left;">
                <?php include_once 'connection.php';?>
                <?php
                        $mob_Id = $_GET['mobdetail'];

                        $select_data = "SELECT * FROM mobilepics WHERE id = '$mob_Id'";
                        $select_mob_data = mysqli_query($conn, $select_data);
                        $fetch_data = mysqli_fetch_array($select_mob_data);
                        ?>
                    <ul>
                        <li>
                            <a href="http://localhost/mobile/index.php"> <span>Mobile Prices</span> </a>
                        </li>
                        <li>
                            <a href="index.php?mobName=<?php echo $fetch_data['mobilename'];?>"> <span><?php echo $fetch_data['mobilename'];?> Mobiles</span></a>
                        </li>
                        <li>
                            <a href="#"> <span> <?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?> Price In Pakistan</span> </a>
                        </li>
                    </ul>
                </div>

                <div style="float:right; font-weight: normal;"><span>Updated on: Feb 24, 2022</span></div>
                <div style="clear:both;"></div>
            </div>
            <section class="">
                <div class="row">
                    <div class="col-sm-2">
                        <div id="side_nav" class="side_nav1 side_nav d-none d-sm-block">
                            <strong class="menu_title browse_by"> Menu </strong>
                            <!-- ======================MENU BAR===================== -->
                            <nav>
                                <ul id="menu-categories" class="menu">
                                    <li><a href="#price-pakistan" id="overview">Price In Pakistan</a></li>
                                    <li><a href="#launch" id="overview">Launch</a></li>
                                    <li><a href="#network" id="overview">Network</a></li>
                                    <li><a href="#body" id="overview">Body</a></li>
                                    <li><a href="#display" id="overview">Display</a></li>
                                    <li><a href="#platform" id="overview">Platform</a></li>
                                    <li><a href="#memory" id="overview">Memory</a></li>
                                    <li><a href="#main-camera" id="overview">Main Camera</a></li>
                                    <li><a href="#selfie-camera" id="overview">Selfie Camera</a></li>
                                    <li><a href="#battery" id="overview">Battery</a></li>
                                    <li><a href="#smartphone-features" id="overview">Smartphone Features</a></li>
                                    <li><a href="#sound" id="overview">Sound</a></li>
                                    <li><a href="#connectivity" id="overview">Connectivity</a></li>

                                </ul>
                            </nav>



                        </div>
                        <div id="side_nav" class="side_nav1 side_nav d-none d-sm-block">
                        </div>

                        <div style="" id="side_banner1" class="AdsbySOD SOD_160x600"></div>
                        <!-- TAGNAME: 300x250_incontent -->
                        <div id='div-gpt-ad-mobilemallpk40129'>
                        </div>
                    </div>
                    <?php include_once 'connection.php';?>

                    <?php
                        $mob_Id = $_GET['mobdetail'];

                        $select_data = "SELECT * FROM mobilepics WHERE id = '$mob_Id'";
                        $select_mob_data = mysqli_query($conn, $select_data);
                        $fetch_data = mysqli_fetch_array($select_mob_data);
                        ?>
                    <div class="col-sm-8">
                        <div class="device_detail_header">
                            <div class="row">
                                <div class="col-md-4" style="text-align: center;margin: 0 auto;">
                                    <img src="<?php echo 'admin/' .$fetch_data['pimg'];?>" alt="<?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?>" class="img-responsive" style="height: 300px ;width: auto;" />

                                </div>
                                <div class="col-md-8">
                                    <div class="device_brief">
                                        <h1 class="roboto_slab"><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?> Price In Pakistan</h1>
                                        <div class="d-inline-flex align-items-center">
                                            <!-- <strong class="supported_bands d-inline-flex align-items-center mr-2"> <span>Supported Bands <?php echo $fetch_data['band'];?></span></strong> -->
                                        </div><br/>
                                        <div class="d-inline-flex align-items-center">
                                            <div class="device_price"><sup>Rs</sup> <?php echo $fetch_data['price'];?>/-</div>

                                            <!-- <div class="device_price" style="padding:10px;">
                                                <span style='font-size: 15px;padding-left: 8px;'>Coming Soon</span>
                                            </div> -->
                                            <div class="d-none d-md-block">
                                                <button onclick="opencompare('https://mobilemall.pk/compare/zte-nubia-red-magic-7-pro-price-in-pakistan');" class="d-none d-md-block ajax_add_to_cart2 has_icon add_compare_w_icon" type="button" name="ajax_add_to_cart2" data-toggle="tooltip" data-placement="top"
                                                    title="Add this mobile to comparison list">
														
													</button>
                                                <a style="min-height: 20px;font-family: 'Roboto Slab';font-weight: 600;font-size: 15px;background-color: #fff;color: #741fa2;border-radius: 5px;line-height: 1;margin-right: 5px;" onclick="opencompare('https://mobilemall.pk/compare/zte-nubia-red-magic-7-pro-price-in-pakistan');"
                                                    type="button">Compare</a>
                                            </div>

                                        </div>


                                        <div class="device_brand_and_model"> <strong> <span>Brand</span> <a href="index.php?mobName=<?php echo $fetch_data['mobilename'];?>"><?php echo $fetch_data['mobilename'];?> </a> </strong> <strong> <span>Model</span> <?php echo $fetch_data['model'];?> </strong></div>
                                        <ul class="device_feature_summary d-flex flex-wrap">
                                            <li class="processor_small">
                                                <span>processor</span><br />
                                                <strong><?php echo $fetch_data['cpu'];?></strong><br />
                                                <!--<ol></ol> -->
                                            </li>
                                            <li class="screen_small">
                                                <span>screen</span><br />
                                                <strong><?php echo $fetch_data['size'];?>"</strong><br />
                                            </li>
                                            <li class="battery_small">
                                                <span>battery</span><br />
                                                <strong> <?php echo $fetch_data['batteryCapacity'];?></strong>
                                            </li>
                                            <li class="camera_small">
                                                <span>camera</span><br />
                                                <strong> <?php echo $fetch_data['camMP'];?> </strong>
                                            </li>
                                            <li class="memory_small">
                                                <span>memory</span><br />
                                                <strong><?php echo $fetch_data['mobRam'];?>, <?php echo $fetch_data['builtIn'];?></strong><br/>
                                            </li>
                                            <li class="physical_small">
                                                <span>OS</span><br />
                                                <strong><?php echo $fetch_data['os'];?></strong><br />
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <section>


                            <h2 class="section_heading m0"><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?> Specifications</h2>
                            <div id="" class="device_details">
                                <div class="device_data_sheet">

                                    <div class="price-pakistan" id="price-pakistan">

                                        <h2 class="h3">Price In Pakistan</h2>

                                        <ul>
                                            <li><strong>Box Price</strong> <span> <sup>Rs </sup><?php echo $fetch_data['price'];?>/-<span style='font-size: 10px;padding-left: 5px;'>Expected Price</span> </span>
                                            </li>
                                            <li><strong>USD Price</strong> <span>$ <?php echo $fetch_data['price']/177;?>/- </span></li>
                                            <li><strong>Brand</strong> <span> <?php echo $fetch_data['mobilename'];?> Mobiles </span></li>
                                            <li><strong>Model No</strong> <span> <?php echo $fetch_data['model'];?> </span></li>
                                        </ul>

                                    </div>

                                    <div class="launch" id="launch">

                                        <h2 class="h3"> Launch</h2>

                                        <ul>
                                            <li><strong>Launch Date</strong> <span> <?php echo $fetch_data['date_time'];?></span></li>
                                        </ul>

                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="network" id="network">

                                        <h2 class="h3"> Network</h2>

                                        <ul>
                                            <li><strong>Bands</strong> <span> <?php echo $fetch_data['band'];?></span></li>
                                            <li><strong>3G bands</strong> <span>(In progress)  HSDPA 850 / 900 / 1900 / 2100CDMA2000 1xEV-DO </span></li>
                                            <li><strong>4G bands</strong> <span>(In progress)  LTE (unspecified)</span></li>
                                            <li><strong>5G bands</strong> <span>(In progress)  SA/NSA</span></li>
                                            <li><strong>Speed</strong> <span>(In progress)  HSPA 42.2/5.76 Mbps, LTE-A, 5G 7.5 Gbps DL</span></li>
                                        </ul>

                                    </div>

                                    <div class="body" id="body">

                                        <h2 class="h3"> Body</h2>

                                        <ul>
                                            <li><strong>Dimensions</strong> <span> 168.6 x 78 x 9.8 mm (6.64 x 3.07 x 0.39 in)</span></li>
                                            <li><strong>Weight</strong> <span> 218 g (7.69 oz)</span></li>
                                            <li><strong>Build</strong> <span> <?php echo $fetch_data['technology'];?></span></li>
                                            <li><strong>SIM</strong> <span> <?php echo $fetch_data['sim'];?> SIM (Nano-SIM, dual stand-by)</span></li>
                                            <li><strong>Colors</strong> <span> <?php echo $fetch_data['colors'];?></span></li>
                                        </ul>

                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="display" id="display">

                                        <h2 class="h3"> Display</h2>

                                        <ul>
                                            <li><strong>Type</strong> <span> OLED, 165Hz capacitive touchscreen, 16M colors</span></li>
                                            <li><strong>Size</strong> <span> <?php echo $fetch_data['size'];?>inches</span></li>
                                            <li><strong>Resolution</strong> <span> 1080 x 2400 pixels, 19.5:9 ratio</span></li>
                                        </ul>

                                    </div>

                                    <div class="platform" id="platform">

                                        <h2 class="h3"> Platform</h2>

                                        <ul>
                                            <li><strong>OS</strong> <span> Android <?php echo $fetch_data['os'];?></span></li>
                                            <li><strong>Chipset</strong> <span> Qualcomm SM8250 Snapdragon 8 Gen 1</span></li>
                                            <li><strong>CPU</strong> <span> <?php echo $fetch_data['cpu'];?></span></li>
                                            <li><strong>GPU</strong> <span> AAdreno 650</span></li>
                                        </ul>

                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="memory" id="memory">

                                        <h2 class="h3"> Memory</h2>

                                        <ul>
                                            <li><strong>RAM</strong> <span> <?php echo $fetch_data['mobRam'];?></span></li>
                                            <li><strong>Storage</strong> <span> <?php echo $fetch_data['builtIn'];?></span></li>
                                            <li><strong>Card Slot</strong> <span> <?php echo $fetch_data['card'];?></span></li>
                                        </ul>

                                    </div>

                                    <div class="main-camera" id="main-camera">

                                        <h2 class="h3"> Main Camera</h2>

                                        <ul>
                                            <li><strong>Triple</strong> <span><?php echo $fetch_data['mainCamera'];?> </span></li>
                                            <li><strong></strong> <span>In Progress</span></li>
                                            <li><strong></strong> <span> In Progress</span></li>
                                            <li><strong>Features</strong> <span> In Progress</span></li>
                                            <li><strong>Video</strong> <span> In Progress</span></li>
                                        </ul>

                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="selfie-camera" id="selfie-camera">

                                        <h2 class="h3"> Selfie Camera</h2>

                                        <ul>
                                            <li><strong>Single</strong> <span> <?php echo $fetch_data['frontCamera'];?></span></li>
                                            <li><strong>Features</strong> <span> In Progress </span></li>
                                            <li><strong>Video</strong> <span> In Progress </span></li>
                                        </ul>

                                    </div>

                                    <div class="battery" id="battery">

                                        <h2 class="h3"> Battery</h2>

                                        <ul>
                                            <li><strong>Capacity</strong> <span> Li-Po <?php echo $fetch_data['batteryCapacity'];?>, non-removable </span></li>
                                        </ul>

                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="smartphone-features" id="smartphone-features">

                                        <h2 class="h3"> Smartphone Features</h2>

                                        <ul>
                                            <li><strong>Sensors</strong> <span> <?php echo $fetch_data['sensors'];?></span></li>
                                        </ul>

                                    </div>

                                    <div class="sound" id="sound">

                                        <h2 class="h3"> Sound</h2>

                                        <ul>
                                            <li><strong>Loudspeaker</strong> <span>(In Progress) Yes  </span></li>
                                            <li><strong>3.5mm jack</strong> <span>(In Progress) Yes  </span></li>
                                        </ul>



                                    </div>
                                    <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>

                                    <div class="connectivity" id="connectivity">

                                        <h2 class="h3"> Connectivity</h2>

                                        <ul>
                                            <li><strong>WLAN</strong> <span> (In Progress)Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot</span></li>
                                            <li><strong>Bluetooth</strong> <span> <?php echo $fetch_data['Bluetooth'];?> </span></li>
                                            <li><strong>GPS</strong> <span> (In Progress)Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS </span></li>
                                            <li><strong>NFC</strong> <span>(In Progress) Yes  </span></li>
                                            <li><strong>USB</strong> <span> <?php echo $fetch_data['usb'];?></span></li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                            <div id="device_description">
                                <h3 class="section_heading m0"><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?> Information</h3>
                                <div class="device_overview">
                                    <p><?php echo $fetch_data['mobiledisc'];?>.</p>
                                </div>
                            </div>
                            <div id="side_nav" class="side_nav1 side_nav">
                                <!-- <div id="side_nav22" class="side_nav side_nav_brand22">
                                    <strong class="menu_title browse_by">ZTE Mobiles </strong>

                                    <nav>
                                        <ul id="menu-categories" class="menu">
                                            <li><a href="https://mobilemall.pk/nubia-red-magic-7-5g-price-in-pakistan">ZTE Nubia Red Magic 7 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-7-pro-price-in-pakistan">ZTE Nubia Red Magic 7 Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-voyage-20-pro-pakistan-in-pakistan">ZTE Voyage 20 Pro Price  In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a31-plus-price-in-pakistan">ZTE Blade A31 Plus Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a71-price-in-pakistan">ZTE Blade A71 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6s-price-in-pakistan">ZTE nubia Red Magic 6s Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6s-pro-price-in-pakistan">ZTE Nubia Red Magic 6s Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-v30-price-in-pakistan">ZTE Blade V30 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-30-5g-price-in-pakistan">ZTE Axon 30 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-v30-vita-price-in-pakistan">ZTE Blade V30 Vita Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6r-price-in-pakistan">ZTE Nubia Red Magic 6R Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-z30-pro-price-in-pakistan">ZTE nubia Z30 Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-11-prime-price-in-pakistan">ZTE Blade 11 Prime Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/ztw-axon-30-ultra-price-in-pakistan">ZTE Axon 30 Ultra Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-30-pro-5g-price-in-pakistan">ZTE Axon 30 Pro 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-s30-price-in-pakistan">ZTE S30 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/nubia-red-magic-6-price-in-pakistan">Zte Nubia Red Magic 6 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6-pro-price-in-pakistan">ZTE Nubia Red Magic 6 Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-x1-5g-price-in-pakistan">ZTE Blade X1 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-20-5g-extreme-price-in-pakistan">ZTE Axon 20 5G Extreme Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-20-5g-price-in-pakistan">ZTE Blade 20 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-20-pro-5g-price-pakistan">ZTE Blade 20 Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a7s-2020-price-in-pakistan">ZTE Blade A7s 2020 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-v2020-5g-price-in-pakistan">ZTE Blade V2020 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-20-5g-price-in-pakistan">ZTE Axon 20 5G Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-5s-price-in-pakistan">ZTE nubia Red Magic 5S Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a5-2020-price-in-pakistan">ZTE Blade A5 2020 Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-s30-pro-price-in-pakistan">ZTE S30 Pro Price In Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-red-magic-5g">Zte Nubia Red Magic 5G Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-grand-x-lte-t82">Zte Grand X Lte T82 Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-v10">Zte Blade V10 Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a7">Zte Blade A7 Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-l8">Zte Blade L8 Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-10-pro-5g">Zte Axon 10 Pro 5G Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-nubia-alpha">Zte Nubia Alpha Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-axon-10s-pro-5g">Zte Axon 10S Pro 5G Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-10-prime">Zte Blade 10 Prime Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a7-prime">Zte Blade A7 Prime Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a5-2019">Zte Blade A5 (2019) Price in Pakistan</a></li>
                                            <li><a href="https://mobilemall.pk/zte-blade-a3-2019">Zte Blade A3 (2019) Price in Pakistan</a></li>

                                        </ul>

                                    </nav>


                                </div> -->

                                <!-- <div id="side_nav" class="side_nav side_nav_brand">
                                    <strong class="menu_title browse_by"> Mobile Brands </strong>

                                    <nav>
                                        <ul id="menu-categories" class="menu">
                                            <li><a href="https://mobilemall.pk/prices/samsung-mobiles">Samsung Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/huawei-mobiles">Huawei Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/vivo">Vivo Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/honor-mobile">Honor Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/oppo-mobiles">Oppo Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/realme-mobiles">Realme Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/nokia-mobiles">Nokia Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/xiaomi-mobiles">Xiaomi Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/infinix-mobiles">Infinix Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/apple-iphone">Apple IPhone</a></li>
                                            <li><a href="https://mobilemall.pk/prices/tecno-mobiles">Tecno Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/qmobile">QMobile</a></li>
                                            <li><a href="https://mobilemall.pk/prices/lenovo-mobiles">Lenovo Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/sony-mobiles">Sony Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/lg-mobiles">LG Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/itel-mobiles">Itel Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/oneplus">OnePlus Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/google">Google Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/asus">Asus Mobiles</a></li>
                                            <li><a href="https://mobilemall.pk/prices/tcl-mobile-prices">Tcl Mobiles</a></li>

                                            <li><a href="https://mobilemall.pk/prices">View All</a></li>
                                        </ul>

                                    </nav>


                                </div> -->

                            </div>
                            <!-- <div class="device_data_sheet">
                                <div>
                                    <h3 class="h3">International Price List of ZTE Nubia Red Magic 7 Pro</h3>

                                    <ul>
                                        <li><a href="https://mobilemall.pk/mm/canada/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Canada</strong> <span style="width: 45%;"> $ 1,132/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/india/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in India</strong> <span style="width: 45%;"> ₹ 65,325/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/kuwait/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Kuwait</strong> <span style="width: 45%;"> KD 261/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/malaysia/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Malaysia</strong> <span style="width: 45%;"> RM 3,658/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/nepal/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Nepal</strong> <span style="width: 45%;"> रू 104,520/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/philippines/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Philippines</strong> <span style="width: 45%;"> ₱ 43,986/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/qatar/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Qatar</strong> <span style="width: 45%;"> QR 3,170/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/saudiarabia/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Saudi Arabia</strong> <span style="width: 45%;"> SR 3,266/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/singapore/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Singapore</strong> <span style="width: 45%;"> $ 1,193/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/srilanka/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Sri Lanka</strong> <span style="width: 45%;"> රු 175,942/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/UAE/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in UAE</strong> <span style="width: 45%;"> AED 3,197/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/uk/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in UK</strong> <span style="width: 45%;"> £ 653/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/usa/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in USA</strong> <span style="width: 45%;"> $ 871/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/indonesia/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Indonesia</strong> <span style="width: 45%;"> Rp 12,194/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/china/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in China</strong> <span style="width: 45%;"> ¥ 5,574/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/brazil/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Brazil</strong> <span style="width: 45%;"> R$ 4,895/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/russia/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Russia</strong> <span style="width: 45%;"> ₽ 65,761/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/morocco/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Morocco</strong> <span style="width: 45%;"> .د.م. 8,013/-</span></a></li>
                                        <li><a href="https://mobilemall.pk/mm/algeria/zte-nubia-red-magic-7-pro"><strong style="width: 50%;"><label style="font-size: 30px;margin: 0px;padding: 0px;line-height: 0px;">. </label> Price in Algeria</strong> <span style="width: 45%;">  دج 121,505/-</span></a></li>
                                    </ul>
                                </div>
                                <h3 class="h3"><a href="https://mobilemall.com.bd/zte-nubia-red-magic-7-pro-price-in-bangladesh" target="_blank" rel="nofollow">ZTE Nubia Red Magic 7 Pro Price in Bangladesh</a></h3>
                            </div> -->


                            <!-- <div class="device_data_sheet">
                                <div>
                                    <h3 class="h3">Frequently Asked Questions (FAQ) on ZTE Nubia Red Magic 7 Pro</h3>
                                    <div class="device_overview" style="margin: 0px;">
                                        <p><strong>Q: What is the ZTE Nubia Red Magic 7 Pro price in Pakistan?</strong>
                                            <br>ZTE Nubia Red Magic 7 Pro is Android 12 Phone Comes at the price of 151,999 and $ 871 in Pakistan.
                                            <br><br>
                                            <strong>Q: What Are The Specifications Of ZTE Nubia Red Magic 7 Pro?</strong>
                                            <br> ZTE Nubia Red Magic 7 Pro Comes With 8GB, 128GB in Silver, Blue/Red color having Qualcomm Snapdragon 8 Gen 1 Processor. This Smartphone Weights 218 g (7.69 oz) and carrying 4500mAh battery.
                                            <br><br>
                                            <strong>Q: ZTE Nubia Red Magic 7 Pro Launch Date?</strong>
                                            <br> 31 August 2022 is the launch date of ZTE Nubia Red Magic 7 Pro.</p>
                                    </div>
                                </div>
                            </div> -->

                             <!-- <div class="device_data_sheet">
                                <div>
                                    <h2 class="h3">ZTE Nubia Red Magic 7 Pro City Prices in Pakistan</h2>

                                    <div class="table-responsive">
                                        <table class="table table-hover table-bordered">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th style="background-color: #741fa2;">City</th>
                                                    <th style="background-color: #741fa2;">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Karachi</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Lahore</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Faisalabad</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Islamabad</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Peshawar</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                                <tr>
                                                    <th>ZTE Nubia Red Magic 7 Pro Price in Quetta</th>
                                                    <td><sup>Rs</sup> 151,999/-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div> -->



                            <div style="text-align: center;" class="AdsbySOD SOD_728x90"></div>
                            <!-- TAGNAME: 300x250_top1 -->
                            <div id='div-gpt-ad-mobilemallpk40128'>
                            </div>
                            <!-- TAGNAME: 728X90_Incontent -->
                            <div id='div-gpt-ad-mobilemallpk40138'>
                            </div>

                            <div class="home_page_price_list">
                                <h2 style="border-radius: 5px; background-image: none; text-align: center;">
                                    <span class="roboto_slab" style="font-weight: 700; font-size: 24px; color: #741fa2; text-transform: initial;">What mobile can you get in similar price range Rs. ±5000 /-?</span><br/>
                                    <!-- <strong style="font-size: 18px; color: #ff5c6d;">Rs. 146999 — Rs. 156999 </strong> -->

                                </h2>

                                <ul class="devices_list row no-gutters">
                                    <?php include_once 'connection.php';?>
                                <?php
                                $mob_Price = $_GET['mobPrice'];
                                 $mob_Id = $_GET['mobdetail'];
                                $select_user = "SELECT * FROM mobilepics WHERE id!='$mob_Id' AND (price BETWEEN '$mob_Price'-5000 AND '$mob_Price'+ 5000)  ORDER BY id DESC";
                                $select_user_data = mysqli_query($conn, $select_user);
                                while($fetch_data = mysqli_fetch_array($select_user_data)){
                                ?>
                                <li class="col-12 col-lg-6">
									<div class="device_tile d-flex align-items-start justify-content-space">

										<a class="" href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?>">
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
													
													<div><sup>Rs. </sup><?php echo $fetch_data['price'];?></div>
													
												</div>
												
											</div>
										</div>
                                    </div>
								</li>
                                <?php }?>

                                </ul>

                            </div>
           
                        </section>
                        <div>

                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                            <ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-4388107725439879" data-ad-slot="9822513923"></ins>
                            <script>
                                (adsbygoogle = window.adsbygoogle || []).push({});
                            </script>


                        </div>

                    </div>
                    <div class="col-sm-2 d-none d-md-block">



                        <div class="d-none d-md-block">
                            <div id="fb-root"></div>
                            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0" nonce="6v4mODEX"></script>
                            <div class="fb-page" data-href="https://www.facebook.com/mobilemall.pk" data-tabs="timeline" data-width="180" data-height="180" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false">
                                <blockquote cite="https://www.facebook.com/mobilemall.pk" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mobilemall.pk">Mobilemall</a></blockquote>
                            </div>
                        </div>
                        <!-- =========================Related Mobiles======================= -->
                        <div class="side_nav mobile_nav3" id="side_nav3">
                        <?php
                                $mob_Id = $_GET['mobdetail'];
                                $select_user = "SELECT * FROM mobilepics WHERE id='$mob_Id' ORDER BY id DESC LIMIT 6";
                                $select_user_data = mysqli_query($conn, $select_user);
                                $fetch_data = mysqli_fetch_array($select_user_data)
                                ?>
                               
                            <strong class="menu_title browse_by"><?php echo $fetch_data['mobilename'];?> Mobiles</strong>
                            <ul>
                            <?php
                               
                                $mob_Id = $_GET['mobdetail'];
                                $mob_name = $_GET['mobName'];
                                $select_user = "SELECT * FROM mobilepics WHERE id!='$mob_Id' and mobilename ='$mob_name' ORDER BY id DESC";
                                $select_user_data = mysqli_query($conn, $select_user);
                                while($fetch_data = mysqli_fetch_array($select_user_data)){
                                ?>
                                <li>
                                    <a class="d-flex align-items-center" href="mob_detail.php?mobdetail=<?php echo $fetch_data['id'];?>& mobName=<?php echo $fetch_data['mobilename'];?> & mobPrice=<?php echo $fetch_data['price'];?>" title="<?php echo $fetch_data['mobilename'];?>">
                                        <div class="small_device_detail_image">
                                            <img class="lazy loaded" style="object-fit: cover;height: 50px;width: 30px;" src="<?php echo 'admin/' .$fetch_data['pimg'];?>" alt="<?php echo $fetch_data['mobilename'];?>">

                                        </div>
                                        <div class="small_device_title">
                                            <p><?php echo $fetch_data['mobilename'];?> <?php echo $fetch_data['model'];?></p>
                                            <strong>Rs. <?php echo $fetch_data['price'];?>/-</strong>
                                        </div>
                                    </a>
                                </li>
                             <?php }?>
                                <!-- <li><a style="padding: 8px 15px;" href="https://mobilemall.pk/prices/zte">View All<br/></a></li> -->

                            </ul>
                        </div>

                        <div style="text-align: center;" class="AdsbySOD SOD_160x600"></div>
                        <!-- TAGNAME: 300x250_incontent -->
                        <div id='div-gpt-ad-mobilemallpk40129'>
                        </div>

                        <!-- <div id="side_nav22" class="side_nav side_nav_brand22">
                            <strong class="menu_title browse_by"> </strong>

                            <nav>
                                <ul id="menu-categories" class="menu">
                                    <li><a href="https://mobilemall.pk/nubia-red-magic-7-5g-price-in-pakistan">ZTE Nubia Red Magic 7 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-7-pro-price-in-pakistan">ZTE Nubia Red Magic 7 Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-voyage-20-pro-pakistan-in-pakistan">ZTE Voyage 20 Pro Price  In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a31-plus-price-in-pakistan">ZTE Blade A31 Plus Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a71-price-in-pakistan">ZTE Blade A71 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6s-price-in-pakistan">ZTE nubia Red Magic 6s Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6s-pro-price-in-pakistan">ZTE Nubia Red Magic 6s Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-v30-price-in-pakistan">ZTE Blade V30 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-30-5g-price-in-pakistan">ZTE Axon 30 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-v30-vita-price-in-pakistan">ZTE Blade V30 Vita Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6r-price-in-pakistan">ZTE Nubia Red Magic 6R Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-z30-pro-price-in-pakistan">ZTE nubia Z30 Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-11-prime-price-in-pakistan">ZTE Blade 11 Prime Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/ztw-axon-30-ultra-price-in-pakistan">ZTE Axon 30 Ultra Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-30-pro-5g-price-in-pakistan">ZTE Axon 30 Pro 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-s30-price-in-pakistan">ZTE S30 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/nubia-red-magic-6-price-in-pakistan">Zte Nubia Red Magic 6 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-6-pro-price-in-pakistan">ZTE Nubia Red Magic 6 Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-x1-5g-price-in-pakistan">ZTE Blade X1 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-20-5g-extreme-price-in-pakistan">ZTE Axon 20 5G Extreme Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-20-5g-price-in-pakistan">ZTE Blade 20 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-20-pro-5g-price-pakistan">ZTE Blade 20 Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a7s-2020-price-in-pakistan">ZTE Blade A7s 2020 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-v2020-5g-price-in-pakistan">ZTE Blade V2020 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-20-5g-price-in-pakistan">ZTE Axon 20 5G Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-5s-price-in-pakistan">ZTE nubia Red Magic 5S Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a5-2020-price-in-pakistan">ZTE Blade A5 2020 Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-s30-pro-price-in-pakistan">ZTE S30 Pro Price In Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-red-magic-5g">Zte Nubia Red Magic 5G Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-grand-x-lte-t82">Zte Grand X Lte T82 Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-v10">Zte Blade V10 Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a7">Zte Blade A7 Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-l8">Zte Blade L8 Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-10-pro-5g">Zte Axon 10 Pro 5G Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-nubia-alpha">Zte Nubia Alpha Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-axon-10s-pro-5g">Zte Axon 10S Pro 5G Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-10-prime">Zte Blade 10 Prime Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a7-prime">Zte Blade A7 Prime Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a5-2019">Zte Blade A5 (2019) Price in Pakistan</a></li>
                                    <li><a href="https://mobilemall.pk/zte-blade-a3-2019">Zte Blade A3 (2019) Price in Pakistan</a></li>

                                </ul>

                            </nav>


                        </div> -->

                        <div id="side_nav" class="side_nav side_nav_brand">
                            <strong class="menu_title browse_by"> Mobile Brands </strong>

                            <nav>
                                <ul id="menu-categories" class="menu">
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


                        <div id="side_banner2" class="AdsbySOD SOD_160x600"></div>
                        <!-- TAGNAME: 300x250_incontent -->
                        <div id='div-gpt-ad-mobilemallpk40129'>
                        </div>

                        <!-- TAGNAME: 160x600_right_col -->
                        <div id='div-gpt-ad-mobilemallpk40135'>
                        </div>



                    </div>
                </div>
            </section>


            <div id="topSticky1">

            </div>
            <div id="topSticky2">

            </div>


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
        </div>
        <div style="text-align: center;" class="AdsbySOD SOD_970x250"></div>
        <!-- TAGNAME: 300x250_bottom -->
        <div id='div-gpt-ad-mobilemallpk40130'>
        </div>

        <?php include_once 'footer.php'?>

       

<?php include_once 'foot.php';?>
</body>

</html>
