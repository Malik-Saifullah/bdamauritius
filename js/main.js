// sticky header
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(document).ready(function () {
    // if ( $(window).width() > 767 ) {
        $('ul.navbar-nav li.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
        });
    // }
});

// footer-slider
const swiper = new Swiper('.mobile-app-imgs-carousel', {
    slidesPerView: 1,
    slidesPerView: "auto",
    // mousewheel: true,
    keyboard: true,
    pagination: {
        el: ".swiper-pagination",
    },
});