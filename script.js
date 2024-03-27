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
});