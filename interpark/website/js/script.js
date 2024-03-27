$(document).ready(function () {
  $(".menu").show();
  $(".hd_up_show").show();
  $(".hd_down_show").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".menu").hide();
      $(".hd_up_show").hide();
      $(".hd_down_show").show();
    } else {
      $(".menu").show();
      $(".hd_up_show").show();
      $(".hd_down_show").hide();
    }
  });

  $(".ranking .tab_contents>li").hide();
  $(".ranking .tab_contents>li:first").show();
  $(".ranking .tab_menu>li").click(function () {
    $(".ranking .tab_contents>li").hide();
    var tab = $(this).attr("rel");
    $(".ranking #" + tab).show();
    $(".ranking .tab_menu>li").removeClass("active");
    $(this).addClass("active");
  });

  new Swiper(".ranking .swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });
  $(".mdpick .tab_contents>li").hide();
  $(".mdpick .tab_contents>li:first").show();
  $(".mdpick .tab_menu>li").click(function () {
    $(".mdpick .tab_contents>li").hide();
    var tab = $(this).attr("rel");
    $(".mdpick #" + tab).show();
    $(".mdpick .tab_menu>li").removeClass("active");
    $(this).addClass("active");
  });

  new Swiper(".mdpick .swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });

  new Swiper(".open_content .swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: "horizontal",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".swiper.thumb", {
    spaceBetween: 10,
    slidesPerView: 15,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper(".swiper.main_visual", {
    autoplay: {
      delay: 1000,
      loop: true,
    },
    loop: true,
    thumbs: {
      swiper: swiper,
    },
  });

  new Swiper(".mb_slide .swiper", {
    autoplay: {
      delay: 1000,
      loop: true,
    },
    loop: true,
    pagination: {
      type: "fraction",
      el: ".mb_slide .swiper .swiper-pagination",
    },
  });

  new Swiper(".now_sale .swiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
   
  });

  $(".play .tab_contents>li").hide();
  $(".play .tab_contents>li:first").show();
  $(".play .tab_menu>li").click(function () {
    $(".play .tab_contents>li").hide();
    var tab = $(this).attr("rel");
    $(".play #" + tab).show();
    $(".play .tab_menu>li").removeClass("active");
    $(this).addClass("active");
  });

  new Swiper(".play .swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".bottom_banner_slide .swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  $(".lang_view").hide();
  $(".lang_btn").click(function () {
    $(".lang_view").toggle();
  });

  $(".read_more").hide();
  $(".read_more_btn").click(function () {
    $(".read_more").toggle();
  });
});
