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

                    <!-- =====================show start on cards start=============== -->
                    

                    <!-- Google Tag Manager (noscript) -->

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVJZRQM"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
<script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-161547453-1');
    </script>

    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TVJZRQM');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Facebook Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2929701183800241');
        fbq('track', 'PageView');
    </script>
    <noscript>
        <img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=2929701183800241&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Facebook Pixel Code -->

    <!--Start of PG -->
    
    <script type="text/javascript">
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(function() {
            window.googletag.pubads().enableAsyncRendering();
            window.googletag.pubads().disableInitialLoad();
        });
        (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
    </script>
    <script>
        __tcfapi("addEventListener", 2, function(tcData, success) {
            if (success && tcData.unicLoad === true) {
                if (!window._initAds) {
                    window._initAds = true;

                    var script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://dsh7ky7308k4b.cloudfront.net/publishers/mobilemallpk.min.js';
                    document.head.appendChild(script);

                }
            }
        });
    </script>
    <!--End of PG -->

    


    <!-- =================Start================== -->
    <script type="text/javascript">
        $("#halfstarsReview-5051").rating({
            emptyStar: "fa fa-star-o",
            filledStar: "fa fa-star",
            halfStar: "fa fa-star-half-o",
            color: "darkorange",
            align: "center",
            value: $("#myrating_value").val(),
            half: true,
            click: function(e) {
                //console.log(e);
                //mystoreid $("#halfstarsInput").val(e.stars);
                $(".ratingValue p").text(e.stars + '/5');
                $("#rating_value").val(e.stars);

            }
        });
    </script>
    <!-- ==================ENd=================== -->


    <!--============Start=============  -->
    <script type="text/javascript">
        $("#halfstarsReview-5135").rating({
            emptyStar: "fa fa-star-o",
            filledStar: "fa fa-star",
            halfStar: "fa fa-star-half-o",
            color: "darkorange",
            align: "center",
            value: $("#myrating_value").val(),
            half: true,
            click: function(e) {
                //console.log(e);
                //mystoreid $("#halfstarsInput").val(e.stars);
                $(".ratingValue p").text(e.stars + '/5');
                $("#rating_value").val(e.stars);

            }
        });
    </script>
    <!-- ==============End============ -->


    <script type="text/javascript">
        $(document).ready(function() {
            $("#compare1").autocomplete({
                source: "https://mobilemall.pk/dropdown-search",
                minLength: 1,
                select: function(event, ui) {
                    window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                }
            });
            $("#compare2").autocomplete({
                source: "https://mobilemall.pk/dropdown-search",
                minLength: 1,
                select: function(event, ui) {
                    window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                }
            });
            $("#compare3").autocomplete({
                source: "https://mobilemall.pk/dropdown-search",
                minLength: 1,
                select: function(event, ui) {
                    window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                }
            });
            $("#compare4").autocomplete({
                source: "https://mobilemall.pk/dropdown-search",
                minLength: 1,
                select: function(event, ui) {
                    window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                }
            });
        });


        window.onscroll = function() {
            myFunction()
        };

        var header = document.getElementById("search");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }


        /*
        if($("#side_banner1").length>0) 
        		{
        			var offset1 = $("#side_banner1").offset();
        			var topPadding1 = 120;
        			var backtoNormal1 = 310;
        			$(window).scroll(function () {
        				var tostopSticky = $('#topSticky1').offset();
        				if ($(window).scrollTop() > offset1.top) {
        					if ((tostopSticky.top - backtoNormal1) > $(window).scrollTop()) {
        						$("#side_banner1").css({
        							marginTop: ($(window).scrollTop() + 0) - (offset1.top + topPadding1)
        						});
        					}
        				} else {
        					$("#side_banner1").css({
        						marginTop: 0
        					});
        				}
        				;
        			});
        		}
        		
        		
        		if($("#side_banner2").length>0) 
        		{
        			var offset = $("#side_banner2").offset();
        			var topPadding = 45;
        			var backtoNormal = 550;
        			$(window).scroll(function () {
        				var tostopSticky = $('#topSticky2').offset();
        				if ($(window).scrollTop() > offset.top) {
        					if ((tostopSticky.top - backtoNormal) > $(window).scrollTop()) {
        						$("#side_banner2").css({
        							marginTop: ($(window).scrollTop() + 0) - (offset.top + topPadding)
        						});
        					}
        				} else {
        					$("#side_banner2").css({
        						marginTop: 0
        					});
        				}
        				;
        			});
        		}

        */
    </script>


    <!--Add to Cart Start /-->
<script>
    function opencompare(url) {
        window.open(url, '_self');
    }


    function removecompare(id) {
        $.ajax({ //make ajax request to cart_process.php
            url: "https://mobilemall.pk/product-remove-card/" + id,
            type: "POST",
            dataType: "json", //expect json value from server
            data: ''
        }).done(function(data) {
            window.location.reload();
        });
    }
</script>
<!--Add to Cart End /-->

<!-- ================================mob_detail.php==================================== -->

<script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-161547453-1');
    </script>


    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Mobile Prices",
                "item": "https://mobilemall.pk/"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "ZTE Mobiles",
                "item": "https://mobilemall.pk/prices/zte"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "ZTE Nubia Red Magic 7 Pro",
                "item": "https://mobilemall.pk/zte-nubia-red-magic-7-pro-price-in-pakistan"
            }]
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "ZTE Nubia Red Magic 7 Pro",
            "image": [
                "https://mobilemall.pk/public_html/images/product/product_1644080856ZTE-Nubia-Red-Magic-7-Pro.jpg"
            ],
            "description": "The lowest price of zte nubia red magic 7 pro price in pakistan Rs 151,999/- Check prices from all online stores in pakistan, compare specs, features set price alerts - 2021",
            "sku": "5131",
            "mpn": "25655",
            "brand": {
                "@type": "Brand",
                "name": "ZTE Mobiles"
            },
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Muhammad Ahsan"
                }
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "268"
            },
            "offers": {
                "@type": "Offer",
                "url": "https://mobilemall.pk/zte-nubia-red-magic-7-pro-price-in-pakistan",
                "priceCurrency": "Rs",
                "price": "151999",
                "priceValidUntil": "2022-02-24",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": "https://schema.org/InStock",
                "seller": {
                    "@type": "Organization",
                    "name": "MobileMall"
                }
            }
        }
    </script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
                    "@type": "Question",
                    "name": "Q: What is the ZTE Nubia Red Magic 7 Pro price in Pakistan?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ZTE Nubia Red Magic 7 Pro is Android 12

                        Phone Comes at the price of 151,
                        999 and $ 871 in Pakistan.
                        "
                    }
                },
                {
                    "@type": "Question",
                    "name": "Q: What Are The Specifications Of ZTE Nubia Red Magic 7 Pro?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "ZTE Nubia Red Magic 7 Pro Comes With 8GB, 128GB in Silver, Blue/Red

                        color having Qualcomm Snapdragon 8 Gen 1
                        Processor.This Smartphone Weights 218 g(7.69 oz)
                        .
                        "
                    }
                },
                {
                    "@type": "Question",
                    "name": "Q: ZTE Nubia Red Magic 7 Pro Launch Date?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "31 August 2022 is the launch date of ZTE Nubia Red Magic 7 Pro."
                    }
                }
            ]
        }
    </script>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TVJZRQM');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Facebook Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2929701183800241');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
			src="https://www.facebook.com/tr?id=2929701183800241&ev=PageView&noscript=1"
		/></noscript>
    <!-- End Facebook Pixel Code -->

    <meta property="fb:app_id" content="1242125849502613" />

    <!-- TrustBox script -->
    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
    <!-- End TrustBox script -->

    <!--Start of PG -->
    <script src="https://cmp.uniconsent.com/v2/stub.min.js"></script>
    <script async src='https://cmp.uniconsent.com/v2/7d36a06938/cmp.js'></script>
    <script type="text/javascript">
        window.googletag = window.googletag || {};
        window.googletag.cmd = window.googletag.cmd || [];
        window.googletag.cmd.push(function() {
            window.googletag.pubads().enableAsyncRendering();
            window.googletag.pubads().disableInitialLoad();
        });
        (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
    </script>
    <script>
        __tcfapi("addEventListener", 2, function(tcData, success) {
            if (success && tcData.unicLoad === true) {
                if (!window._initAds) {
                    window._initAds = true;

                    var script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://dsh7ky7308k4b.cloudfront.net/publishers/mobilemallpk.min.js';
                    document.head.appendChild(script);

                }
            }
        });
    </script>
    <!--End of PG -->

    <script type="text/javascript">
            $(document).ready(function() {
                $("#compare1").autocomplete({
                    source: "https://mobilemall.pk/dropdown-search",
                    minLength: 1,
                    select: function(event, ui) {
                        window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                    }
                });
                $("#compare2").autocomplete({
                    source: "https://mobilemall.pk/dropdown-search",
                    minLength: 1,
                    select: function(event, ui) {
                        window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                    }
                });
                $("#compare3").autocomplete({
                    source: "https://mobilemall.pk/dropdown-search",
                    minLength: 1,
                    select: function(event, ui) {
                        window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                    }
                });
                $("#compare4").autocomplete({
                    source: "https://mobilemall.pk/dropdown-search",
                    minLength: 1,
                    select: function(event, ui) {
                        window.location.href = $("#compare_link").val() + "/" + ui.item.value;
                    }
                });
            });


            window.onscroll = function() {
                myFunction()
            };

            var header = document.getElementById("search");
            var sticky = header.offsetTop;

            function myFunction() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }


            /*
            if($("#side_banner1").length>0) 
            		{
            			var offset1 = $("#side_banner1").offset();
            			var topPadding1 = 120;
            			var backtoNormal1 = 310;
            			$(window).scroll(function () {
            				var tostopSticky = $('#topSticky1').offset();
            				if ($(window).scrollTop() > offset1.top) {
            					if ((tostopSticky.top - backtoNormal1) > $(window).scrollTop()) {
            						$("#side_banner1").css({
            							marginTop: ($(window).scrollTop() + 0) - (offset1.top + topPadding1)
            						});
            					}
            				} else {
            					$("#side_banner1").css({
            						marginTop: 0
            					});
            				}
            				;
            			});
            		}
            		
            		
            		if($("#side_banner2").length>0) 
            		{
            			var offset = $("#side_banner2").offset();
            			var topPadding = 45;
            			var backtoNormal = 550;
            			$(window).scroll(function () {
            				var tostopSticky = $('#topSticky2').offset();
            				if ($(window).scrollTop() > offset.top) {
            					if ((tostopSticky.top - backtoNormal) > $(window).scrollTop()) {
            						$("#side_banner2").css({
            							marginTop: ($(window).scrollTop() + 0) - (offset.top + topPadding)
            						});
            					}
            				} else {
            					$("#side_banner2").css({
            						marginTop: 0
            					});
            				}
            				;
            			});
            		}

            */
        </script>