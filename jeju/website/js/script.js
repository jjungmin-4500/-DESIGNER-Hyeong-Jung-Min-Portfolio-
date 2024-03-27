$(document).ready(function(){
  $(".search_input").slideUp();
  $(".search_btn").click(function () {
    $(".search_input").slideToggle("slow");
  });
  
      $(".course_lt .tab_contents>li").hide();
      $(".course_lt .tab_contents>li:first").show();
      $(".course_lt .tab_menu>li").click(function () {
        $(".course_lt .tab_contents>li").hide();
        var tab = $(this).attr("rel");
        $(".course_lt #" + tab).show();
        $(".course_lt .tab_menu>li").removeClass("active");
        $(this).addClass("active");
      });

      $(".walking_map .tab_contents>li").hide();
      $(".walking_map .tab_contents>li:first").show();
      $(".walking_map .tab_menu>li").click(function () {
        $(".walking_map .tab_contents>li").hide();
        var tab = $(this).attr("rel");
        $(".walking_map #" + tab).show();
        $(".walking_map .tab_menu>li").removeClass("active");
        $(this).addClass("active");
      });
    
      
      new Swiper(".culture_bt .swiper", {
        autoplay: {
          delay: 3000,
        },
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
      
      new Swiper(".course_rt .swiper", {
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
      
      new Swiper(".experience_bt .swiper", {
        autoplay: {
          delay: 2000,
        },
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });

      window.addEventListener('scroll',function(){
        console.log(window.scrollY);
      })

      $(window).scroll(function () {
        if ($(window).scrollTop() >= 0) {
          $(".icon_box i").css("color","white");
        }
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 710) {
          $(".icon_box i").css("color","#FFA033");
        }
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 1599) {
          $(".icon_box i").css("color","white");
        }
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 2480) {
          $(".icon_box i").css("color","#FFA033");
        }
      });
});