$(document).ready(function(){
    $(".section_4 .tab_contents>li").hide();
    $(".section_4 .tab_contents>li:first").show();
    $(".section_4 .tab_menu>li").click(function () {
      $(".section_4 .tab_contents>li").hide();
      var tab = $(this).attr("rel");
      $(".section_4 #" + tab).show();
      $(".section_4 .tab_menu>li").removeClass("active");
      $(this).addClass("active");
    });


    $(".drawing_area").hide();
  $(".drawing_file").click(function () {
    $(".drawing_area").show();
  });
  $(".drawing_close_btn").click(function () {
    $(".drawing_area").hide();
  });

  const swiper = new Swiper('.drawing_content .swiper', {
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

    //attr_method
    $(".average").each(function(index){
      const $score=$(this).attr("data-score");
      console.log($score);
      $(this).find(".bar").css("width", $score + "%");
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1300) {
    $(".attr_method").addClass("animate__fadeIn");
  } else {
    $(".attr_method").removeClass("animate__fadeIn");
  }
});
const $resMenu=document.querySelector(".res_menu")
console.log($resMenu)

function openMenu(){
  $resMenu.classList.add("active");
}
function closeMenu(){
  $resMenu.classList.remove("active");
}
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
});

