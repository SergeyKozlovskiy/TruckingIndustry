    $(document).ready(function () {
      $(".main_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      });
      $(".benefits").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 560,
            settings: "slick"
          },
          {
            breakpoint: 4000,
            settings: "unslick"
          }
        ]
      });
      $(".cars").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 1500,
            settings: "slick"
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 4000,
            settings: "unslick"
          }
        ]
      });
      $(".reviews").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<div class="arrows left"></div>',
        nextArrow: '<div class="arrows right"></div>'
      });

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

    var wrapper = document.querySelectorAll('.wrapper');
    wrapper.forEach(function(el, i) {
      el.style.background = `url(../img/benefits/${i}.png) bottom no-repeat`;
    });
});





