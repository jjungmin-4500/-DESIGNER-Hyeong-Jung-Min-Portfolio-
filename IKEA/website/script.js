$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ["page0", "page1", "page2", "page3", "page4", "page5", "page6"],
    menu: "#myMenu",
    navigation: true,
    navigationPosition: "right",

    onLeave: function (origin, destination, direction, trigger) {
      if (origin.index == 0) {
        $("header").css("color", "#000");
      }
      if (origin.index == 1) {
        $("#sect1 .ani_img").removeClass("animate__jello");
        $("#sect1 .ani_txt").removeClass("animate__bounce");
      }
      if (origin.index == 6) {
        $("header").css("color", "#000");
      }
    },

    afterLoad: function (origin, destination, direction, trigger) {
      if (destination.index == 0) {
        $("header").css("color", "#fff");
      }
      if (destination.index == 1) {
        $("#sect1 .ani_img").addClass("animate__jello");
        $("#sect1 .ani_txt").addClass("animate__zoomIn");
      }
      if (destination.index == 6) {
        $("header").css("color", "#fff");
      }
    },
  });

  $(".top_btn").click(function () {
    fullpage_api.moveTo("page0");
  });

  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 500,
    auto: true,
    controls: false,
    pager: false,
    speed: 1200,
    pause: 2000,
  });
});
