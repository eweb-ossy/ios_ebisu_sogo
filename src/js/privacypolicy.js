import $ from 'jquery';
const inview = require('jquery-inview');

function getWindowWidth() {
    return $(window).width();
}
let windowWidth = getWindowWidth();
$(window).on('resize', function() {
    windowWidth = getWindowWidth();
    // parallax();
});

$('#nav_btn').on('click', function() {
    $(this).toggleClass('active');
    if (windowWidth > 1439) {
        $('#nav_menu').stop(true).animate( { width: 'toggle' }, 'slow' );
    } else {
        $('#nav_menu').slideToggle();
    }
});

$('.footer').on('inview', function(event, isInView) {
    if (isInView && windowWidth > 1439) {
        $('.nav').addClass('hide');
    } else {
        $('.nav').removeClass('hide');
    }
});