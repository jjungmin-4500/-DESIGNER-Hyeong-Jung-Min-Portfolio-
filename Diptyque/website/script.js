$(document).ready(function () {

  $('.top_banner_content').slideUp();
  $('.top_banner_btn').click(function(){
    $('.top_banner_content').stop().slideToggle();
  });


  $(".search_area").hide();
  $(".search_up").click(function () {
    $(".search_area").show();
  });
  $(".search_close_btn").click(function () {
    $(".search_area").hide();
  });

  $(".log_area").hide();
  $(".log_up").click(function () {
    $(".log_area").show();
  });
  $(".log_close_btn").click(function () {
    $(".log_area").hide();
  });

  $(".shopping_area").hide();
  $(".shopping_up").click(function () {
    $(".shopping_area").show();
  });
  $(".shopping_close_btn").click(function () {
    $(".shopping_area").hide();
  });

  const swiper1 = new Swiper('.sub_benner .swiper', {
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
  
  const swiper2 = new Swiper(".mini_banner .swiper", {
      autoplay: {
        delay: 3000,
        loop: true,
      },
  
      loop: true,
  
      pagination: {
        el: ".mini_banner .swiper-pagination",
        type: "fraction",
      },
  
      navigation: {
        nextEl: ".mini_banner .swiper-button-next",
        prevEl: ".mini_banner .swiper-button-prev",
      },
    });
  
    $(".mini_banner .button_resume").hide();
  
    $(".mini_banner .button_pause").click(function () {
      swiper2.autoplay.stop();
      $(".mini_banner .button_pause").hide();
      $(".mini_banner .button_resume").show();
    });
    $(".mini_banner .button_resume").click(function () {
      swiper2.autoplay.start();
      $(".mini_banner .button_pause").show();
      $(".mini_banner .button_resume").hide();
    });


var $body = document.querySelector("body");
var $header = document.querySelector("header");

var $headerTop = $header.offsetTop;
console.log($headerTop);

$body.onscroll = move_scroll;
function move_scroll(){
    var $scrollTop = window.scrollY;
    console.log($scrollTop);
    if($scrollTop > 80){
        $header.classList.add("sticky");
    }else{
        $header.classList.remove("sticky");
    }
}
var $resBtn = document.querySelector(".res_btn i:first-child");
console.log($resBtn);
$resBtn.onclick = openMenu;
function openMenu(){
    console.log($resBtn.closest(".wrap"));
    $resBtn.closest(".wrap").classList.add("showMenu");
}
var $closeBtn = document.querySelector(".res_btn i:last-child");
console.log($closeBtn);
$closeBtn.onclick = closeMenu;
function closeMenu(){
    $closeBtn.closest(".wrap").classList.remove("showMenu");
}
var $eachMenu1 = document.querySelector(".menu > ul > li:nth-child(1)");
var $eachMenu2 = document.querySelector(".menu > ul > li:nth-child(2)");
var $eachMenu3 = document.querySelector(".menu > ul > li:nth-child(3)");
var $eachMenu4 = document.querySelector(".menu > ul > li:nth-child(4)");
var $eachMenu5 = document.querySelector(".menu > ul > li:nth-child(5)");
var $eachMenu6 = document.querySelector(".menu > ul > li:nth-child(6)");
console.log($eachMenu1);
console.log($eachMenu2);
console.log($eachMenu3);
console.log($eachMenu4);
console.log($eachMenu5);
console.log($eachMenu6);

$eachMenu1.onclick = openSub1;
$eachMenu2.onclick = openSub2;
$eachMenu3.onclick = openSub3;
$eachMenu4.onclick = openSub4;
$eachMenu5.onclick = openSub5;
$eachMenu6.onclick = openSub6;

function openSub1(a){
    console.log(a);
    a.preventDefault();
    $eachMenu1.classList.add("active");
    $eachMenu2.classList.remove("active");
    $eachMenu3.classList.remove("active");
    $eachMenu4.classList.remove("active");
    $eachMenu5.classList.remove("active");
    $eachMenu6.classList.remove("active");
}
function openSub2(){
    $eachMenu1.classList.remove("active");
    $eachMenu2.classList.add("active");
    $eachMenu3.classList.remove("active");
    $eachMenu4.classList.remove("active");
    $eachMenu5.classList.remove("active");
    $eachMenu6.classList.remove("active");
}
function openSub3(){
    $eachMenu1.classList.remove("active");
    $eachMenu2.classList.remove("active");
    $eachMenu3.classList.add("active");
    $eachMenu4.classList.remove("active");
    $eachMenu5.classList.remove("active");
    $eachMenu6.classList.remove("active");;
}
function openSub4(){
    $eachMenu1.classList.remove("active");
    $eachMenu2.classList.remove("active");
    $eachMenu3.classList.remove("active");
    $eachMenu4.classList.add("active");
    $eachMenu5.classList.remove("active");
    $eachMenu6.classList.remove("active");
}
function openSub5(){
    $eachMenu1.classList.remove("active");
    $eachMenu2.classList.remove("active");
    $eachMenu3.classList.remove("active");
    $eachMenu4.classList.remove("active");
    $eachMenu5.classList.add("active");
    $eachMenu6.classList.remove("active");
}
function openSub6(){
    $eachMenu1.classList.remove("active");
    $eachMenu2.classList.remove("active");
    $eachMenu3.classList.remove("active");
    $eachMenu4.classList.remove("active");
    $eachMenu5.classList.remove("active");
    $eachMenu6.classList.add("active");
    return false;
}
$body.onresize = resizeEvt;
function resizeEvt(){
    var $cur_width = window.innerWidth;
    if($cur_width < 640){
        document.querySelector(".wrap").classList.remove("showMenu");
        $eachMenu1.classList.remove("active");
        $eachMenu2.classList.remove("active");
        $eachMenu3.classList.remove("active");
        $eachMenu4.classList.remove("active");
        $eachMenu5.classList.remove("active");
        $eachMenu6.classList.remove("active");
    }else{
        $eachMenu1.classList.remove("active");
        $eachMenu2.classList.remove("active");
        $eachMenu3.classList.remove("active");
        $eachMenu4.classList.remove("active");
        $eachMenu5.classList.remove("active");
        $eachMenu6.classList.remove("active");
    }
}

$('.mouse').mousemove(function(e) {
  e.preventDefault();
  
  var $place = $(this);
  var offsetX = e.clientX - $place.offset().left;
  var width = $place.width();
  var scrollWidth = $place.prop("scrollWidth");
  
  var scrollLeft = offsetX / width * scrollWidth + width / 2;
  scrollLeft = scrollWidth - scrollLeft;
  $place.scrollLeft(scrollLeft);
});
});

