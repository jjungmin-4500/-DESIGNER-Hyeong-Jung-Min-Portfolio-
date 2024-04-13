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

    //attr_method
    $(".average").each(function(index){
      const $score=$(this).attr("data-score");
      console.log($score);
      $(this).find(".bar").css("width", $score + "%");
  });

});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1350) {
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

