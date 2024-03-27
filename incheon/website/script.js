$(document).ready(function () {
  const swiper1 = new Swiper(".main_lt .swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".main_lt .swiper-pagination",
    },
    navigation: {
      nextEl: ".button-next1",
      prevEl: ".button-prev1",
    },
    autoplay: {
      delay: 5000,
      loop: true,
    },
  });

  $(".tab_content li").hide();
  $(".tab_content li:first").show();
  $(".tab_menu li a").click(function () {
    var tab = $(this).attr("rel");
    $(".tab_content li").hide();
    $("#" + tab).show();
    $(".tab_menu>li").removeClass("active");
        $(this).addClass("active");
  });

  const swiper2 = new Swiper(".new_rt .swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".new_rt .swiper-pagination",
    },
    navigation: {
      nextEl: ".button-next2",
      prevEl: ".button-prev2",
    },
    autoplay: {
      delay: 5000,
      loop: true,
    },
  });

  const swiper3 = new Swiper(".happy_slider .swiper", {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: ".happy_slider .swiper-pagination",
    },
    navigation: {
      nextEl: ".button-next3",
      prevEl: ".button-prev3",
    },
    autoplay: {
      delay: 2000,
      loop: true,
    },
    slidesPerView: 4,
  });

  $(".button-resume3").hide();
  $(".button-pause3").click(function () {
    swiper3.autoplay.stop();
    $(".button-pause3").hide();
    $(".button-resume3").show();
  });
  $(".button-resume3").click(function () {
    swiper3.autoplay.start();
    $(".button-resume3").hide();
    $(".button-pause3").show();
  });

  $(".footer1 ul").slideUp();
  $(".footer1 dt:nth-child(1) a").click(function () {
    $(".footer1 ul").slideUp();
    $(".depth2_1").slideToggle();
  });

  $(".footer1 dt:nth-child(2) a").click(function () {
    $(".footer1 ul").slideUp();
    $(".depth2_2").slideToggle();
  });

  $(".footer1 dt:nth-child(3) a").click(function () {
    $(".footer1 ul").slideUp();
    $(".depth2_3").slideToggle();
  });

  $(".footer1 dt:nth-child(4) a").click(function () {
    $(".footer1 ul").slideUp();
    $(".depth2_4").slideToggle();
  });

  $(".footer1 dt:nth-child(5) a").click(function () {
    $(".footer1 ul").slideUp();
    $(".depth2_5").slideToggle();
  });

  $(".depth2").hide();
  $(".depth1>li").mouseenter(function () {
    $(".depth2").show();
  });

  $(".depth1>li").mouseleave(function () {
    $(".depth2").hide();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".header1").hide();
      $(".header3").hide();
      $("header").css("box-shadow", "0 2px 10px gray");
    } else {
      $(".header1").show();
      $(".header3").show();
      $("header").css("box-shadow", "0 0 0");
    }
  });
});
