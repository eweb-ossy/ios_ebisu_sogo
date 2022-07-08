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

$('#getAddress').on('click', function() {
    let zipcode1 = $('[name="zipcode1"]').val();
    let zipcode2 = $('[name="zipcode2"]').val();
    let zipcode = zipcode1 + zipcode2;
    if (zipcode.length === 7) {
        $.ajax({
            url: 'https://zipcloud.ibsnet.co.jp/api/search',
            data: {
                zipcode: zipcode
            },
            dataType: "jsonp",
        })
        .done(function(data) {
            $('#pref_name').val(data.results[0].address1);
            $('#address').val(data.results[0].address2+data.results[0].address3);
        })
    }
});