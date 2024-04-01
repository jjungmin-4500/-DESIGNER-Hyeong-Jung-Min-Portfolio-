$(document).ready(function () {
  const swiper = new Swiper('.main_visual .swiper', {
      direction: "horizontal",
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        loop: true,
      },
    });
    new Swiper('.sub_benner .swiper', {
      direction: "horizontal",
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
        loop: true,
      },

      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        800: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });

    new Swiper('.sale .swiper', {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 2500,
        loop: true,
      },
    });
    new Swiper('.mini_benner .swiper', {
      direction: "horizontal",
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      autoplay: {
        delay: 2500,
        loop: true,
      },
    });

    window.addEventListener("scroll", function () {
      console.log(window.scrollY);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 703) {
        $(".shs").addClass("animate__fadeInLeft");
      } else {
        $(".shs").removeClass("animate__fadeInLeft");
      }
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 1447) {
        $(".shs3").addClass("animate__fadeInDown");
      } else {
        $(".shs3").removeClass("animate__fadeInDown");
      }
    });

});

