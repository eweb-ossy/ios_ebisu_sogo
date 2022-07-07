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

// news tabs
function tabsClose() {
    $('.tab-item:not(:first-child)').fadeOut();
    setTimeout(() => {
        $('.tab-item:first-child').removeClass('on');
    }, 500);
}
$(document).on('mouseenter click', '.tab-item:first-child', function() {
    $('.tab-item:not(:first-child)').fadeIn().css('display', 'flex');
    $(this).addClass('on');
});
$('.news-tab').on('mouseleave', function() {
    if (windowWidth > 1439) {
        tabsClose();
    }
});
$(document).on('click', '.tab-item:not(:first-child)', function() {
    tabsClose();
});
$(document).on('click', '.tab-item.on', function() {
    tabsClose();
});