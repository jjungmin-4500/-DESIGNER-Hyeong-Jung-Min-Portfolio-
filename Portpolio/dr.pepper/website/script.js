$(document).ready(function () {
    $(".products .tab_contents>li").hide();
    $(".products .tab_contents>li:first").show();
    $(".products .tab_menu>li").click(function () {
      $(".products .tab_contents>li").hide();
      var tab = $(this).attr("rel");
      $(".products #" + tab).show();
      $(".products .tab_menu>li").removeClass("active");
      $(this).addClass("active");
    });
  
    new Swiper(".products .swiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper('.products .swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
          delay: 2000,
          disableOnInteraction:true,
      },
      
      breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
      }
  })

  new Swiper(".sect_3_slide .swiper", {
    autoplay: {
      delay: 2500,
      loop: true,
    },
    pagination: {
      el: ".new_event_slide .swiper-pagination",
      clickable: true,
    },
  });

  $('.top_banner_content').slideUp();
  $('.top_banner_btn').click(function(){
    $('.top_banner_content').stop().slideToggle();
  });

window.addEventListener('scroll',function(){
  console.log(window.scrollY);
})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 0) {
    $(".hd_top a strong").css("color","white");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1859) {
    $(".hd_top a strong").css("color","#952A3B");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 2800) {
    $(".hd_top a strong").css("color","white");
  }
});


$(window).scroll(function () {
  if ($(window).scrollTop() >= 4300) {
    $(".moon_1").addClass("animate__fadeInLeft");
  } else {
    $(".moon_1").removeClass("animate__fadeInLeft");
  }
});
$(window).scroll(function () {
  if ($(window).scrollTop() >= 5100) {
    $(".moon_2").addClass("animate__fadeInLeft");
    $(".bi").addClass("animate__zoomIn");
    $(".bo").addClass("animate__zoomIn");
  } else {
    $(".moon_2").removeClass("animate__fadeInLeft");
    $(".bi").removeClass("animate__zoomIn");
    $(".bo").removeClass("animate__zoomIn");
  }
});

// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 5000) {
//     $(".moon_1").addClass("animate__fadeInLeft");
//   } else {
//     $(".moon_1").removeClass("animate__fadeInLeft");
//   }
// });
// $(window).scroll(function () {
//   if ($(window).scrollTop() >= 5650) {
//     $(".moon_2").addClass("animate__fadeInLeft");
//     $(".bi").addClass("animate__zoomIn");
//     $(".bo").addClass("animate__zoomIn");
//   } else {
//     $(".moon_2").removeClass("animate__fadeInLeft");
//     $(".bi").removeClass("animate__zoomIn");
//     $(".bo").removeClass("animate__zoomIn");
//   }
// });


  });