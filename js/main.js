$('.header_menu').on('click', function (e) {
    $(this).toggleClass('active');
    $('.navList').toggleClass('active_menu');
});
$('.scroll-to').on('click', function (e) {
    $('.navList').addClass('active_menu');
    $('.header_menu').removeClass('active');
});



$("a.scroll-to").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});