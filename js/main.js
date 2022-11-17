$(document).scroll(function () {
    if ($(this).scrollTop() > 101) {
        $("#logo").css("color", "green");
    } else if ($(this).scrollTop() < 101) {
        $("#logo").css("color", "#fff");
    }
});

$(".owl-carousel").owlCarousel({
    rtl: false,
    loop: true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplaySpeed: 2500,
    autoplayHoverPause: false,
    margin: 50,
    nav: false,
    dots: false,
    stagePadding: 0,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        },
    },
});

AOS.init();