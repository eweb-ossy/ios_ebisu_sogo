import $ from 'jquery';
const inview = require('jquery-inview');
// import 'rellax';
import Rellax from 'rellax';

function getWindowWidth() {
    return $(window).width();
}
let windowWidth = getWindowWidth();
$(window).on('resize', function() {
    windowWidth = getWindowWidth();
    // parallax();
});

// function parallax() {
//     let rellax = new Rellax('.parallax', {
//         speed: 1
//     });
//     if (windowWidth < 1440) {
//         rellax.refresh();
//         rellax.destroy();
//     }
// }
// parallax();

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

// 
$('[href^="#"]').on('click', function() {
    let href = $(this).attr('href');
    let target = $(href == '#' || href == '' ? 'html' : href);
    let postion = target.offset().top;
    $('body,html').animate({scrollTop: postion}, 1000, 'swing');
});