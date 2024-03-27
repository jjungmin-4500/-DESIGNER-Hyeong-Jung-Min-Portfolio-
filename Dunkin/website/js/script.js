$(document).ready(function(){
  new Swiper('.main_visual .swiper', {
    autoplay: {
      delay: 2000,
      loop: true,
    },
  
    direction: 'horizontal',
    loop: true,
  

    pagination: {
      el: '.main_visual .swiper-pagination',
      clickable:true,
    },
  
    navigation: {
      nextEl: '.main_visual .swiper-button-next',
      prevEl: '.main_visual .swiper-button-prev',
    },
  
  });
  new Swiper('.new_event_slide .swiper', {
    autoplay: {
      delay: 2000,
      loop: true,
    },
  
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.new_event .swiper-pagination',
      clickable:true,
    },
  
  });
  window.addEventListener('scroll',function(){
    console.log(window.scrollY);
  })

  $(window).scroll(function(){
    if($(window).scrollTop()>=1000){
      $('.txt_ani_1').addClass('animate__fadeInLeft');
      $('.txt_ani_2').addClass('animate__fadeInRight');
    }else{
      $('.txt_ani_1').removeClass('animate__fadeInLeft');
      $('.txt_ani_2').removeClass('animate__fadeInRight');}
  });
  
  $(".depth2 ul").stop().slideUp();
  $(".depth2 .flex").stop().slideUp();
  $(".menu4>ul>li").mouseenter(function () {
    $(this).find(".depth2 ul").stop().slideDown();
    $(this).find(".depth2 .flex").stop().slideDown();
  });
  $(".menu4>ul>li").mouseleave(function () {
    $(this).find(".depth2 ul").stop().slideUp();
    $(this).find(".depth2 .flex").stop().slideUp();
  });

  $('.top_banner_content').slideUp();
  $('.top_banner_btn').click(function(){
    $('.top_banner_content').stop().slideToggle();
  });

  $('.popup_close_btn').click(function(){
    $('.popup').hide();
  });

  $(".search_area").hide();
  $(".search_up").click(function () {
    $(".search_area").show();
  });
  $(".search_close_btn").click(function () {
    $(".search_area").hide();
  });
  

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 2200) {
      $(".img1").addClass("ani_img");
      $(".img2").addClass("ani_img");
    } else {
      $(".img1").removeClass("ani_img");
      $(".img2").removeClass("ani_img");
    }
  });

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