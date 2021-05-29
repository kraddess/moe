$(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
        $('.main_h').addClass('sticky');
        $('.header-logo').addClass('header-logo-toggle');
        $('.header-logo').removeClass('header-logo-untoggle');
    } else {
        $('.main_h').removeClass('sticky');
        $('.header-logo').removeClass('header-logo-toggle');
        $('.header-logo').addClass('header-logo-untoggle');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});