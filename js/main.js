// sticky header
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
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