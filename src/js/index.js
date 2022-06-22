import $ from 'jquery';
const inview = require('jquery-inview');
import 'slick-carousel';
import 'rellax';
import Rellax from 'rellax';

(function () {
    if (typeof EventTarget !== 'undefined') {
      let supportsPassive = false;
      try {
        // Test via a getter in the options object to see if the passive property is accessed
        const opts = Object.defineProperty({}, 'passive', {
          get: () => {
            supportsPassive = true;
          },
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
      } catch (e) {}
      const func = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function (type, fn) {
        this.func = func;
        this.func(type, fn, supportsPassive ? { passive: false } : false);
      };
    }
})();

// slider 
$('#slider_info').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    // fade: true,
    // cssEase: 'linear'
});
$('#slider_daichi').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    // fade: true,
    // cssEase: 'linear'
});
$('#slider_factory').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    // fade: true,
    // cssEase: 'linear'
});
$('#slider_deli').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    // fade: true,
    // cssEase: 'linear'
});
$('#slider_dining').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    // fade: true,
    // cssEase: 'linear'
});
$('#slider_liquor').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    // fade: true,
    // cssEase: 'linear'
});

function mvSlider() {
    const mvSlide = document.getElementById('mv_slide');
    const mvSlideItem = mvSlide.querySelectorAll('.slide-item');
    const totalNum = mvSlideItem.length - 1;
    const fadeTime = 2000;
    const intarvalTime = 8000;
    let actNum = 0;
    let nowSlide;
    let nextSlide;

    mvSlideItem[0].classList.add('show', 'zoom');
    setInterval(() => {
        if (actNum < totalNum) {
            nowSlide = mvSlideItem[actNum];
            nextSlide = mvSlideItem[++actNum];
            nowSlide.classList.remove('show');
            nextSlide.classList.add('show', 'zoom');
            setTimeout(() => {
                nowSlide.classList.remove('zoom');
            }, fadeTime);
        } else {
            nowSlide = mvSlideItem[actNum];
            nextSlide = mvSlideItem[actNum = 0];
            nowSlide.classList.remove('show');
            nextSlide.classList.add('show', 'zoom');
            setTimeout(() => {
                nowSlide.classList.remove('zoom');
            }, fadeTime)
        };
    }, intarvalTime);
}
mvSlider();

function getWindowWidth() {
    return $(window).width();
}
let windowWidth = getWindowWidth();
$(window).on('resize', function() {
    windowWidth = getWindowWidth();
    parallax();
});

// let scroll = true;
// const handle = (event) => {
//     event.preventDefault();
// }
$('#nav_btn').on('click', function() {
    $(this).toggleClass('active');
    if (windowWidth > 1439) {
        $('#nav_menu').stop(true).animate( { width: 'toggle' }, 'slow' );
    } else {
        $('#nav_menu').slideToggle();
    }
    // scroll = !scroll;
    // if (scroll) {
    //     document.removeEventListener('touchmove', handle, { passive: false });
    //     document.removeEventListener('mousewheel', handle, { passive: false });
    // } else {
    //     document.addEventListener('touchmove', handle, { passive: false });
    //     document.addEventListener('mousewheel', handle, { passive: false });
    // }
});

$('.fadein').on('inview', function(event, isInView) {
    if (isInView) {
        $(this).addClass('is-animated');
    }
});

function parallax() {
    let rellax = new Rellax('.parallax', {
        speed: 1
    });
    if (windowWidth < 1440) {
        rellax.refresh();
        rellax.destroy();
    }
}
parallax();

$('.footer').on('inview', function(event, isInView) {
    if (isInView && windowWidth > 1439) {
        $('.nav').addClass('hide');
    } else {
        $('.nav').removeClass('hide');
    }
});

$('#mv_scroll').on('click', function() {
    let postion = $('.info-place').offset().top;
    $('body,html').animate({scrollTop: postion}, 1000, 'swing');
});
