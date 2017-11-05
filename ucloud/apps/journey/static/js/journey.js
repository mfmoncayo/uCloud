$(document).ready(function() {

  $(".colorControl").mouseover(function () {
    $(this).css("color","rgba(255,255,255,.8)");
  }).mouseout(function () {
    $(this).css("color","rgba(255,255,255,.4)");
  });

});
