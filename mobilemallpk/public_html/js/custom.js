$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function() {
    jQuery('#side_nav>strong.menu_title.browse_by').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('.side_nav_brand>nav').toggleClass('show');
    });
    jQuery('#side_nav2>strong.menu_title.browse_by').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('.mobile_nav>nav').toggleClass('show');
    });
    jQuery('#side_nav3>strong.menu_title.browse_by').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('.mobile_nav3>ul').toggleClass('show');
    });
    jQuery('#filter1>strong.ram').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('#filter1>nav').toggleClass('show');
    });
    jQuery('#filter2>strong.platform').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('#filter2>nav').toggleClass('show');
    });
    jQuery('#filter3>strong.camera').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('#filter3>nav').toggleClass('show');
    });
    jQuery('#filter4>strong.screen').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('#filter4>nav').toggleClass('show');
    });
    jQuery('#filter5>strong.platform').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('#filter5>nav').toggleClass('show');
    });
    jQuery('#side_nav22>strong.menu_title.browse_by').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('.side_nav_brand22>nav').toggleClass('show');
    });
    jQuery('#side_nav33>strong.menu_title.browse_by').click(function(e) {
        jQuery(this).toggleClass('remove_bottom_radius');
        jQuery('.side_nav_brand33>nav').toggleClass('show');
    });
});