$(document).ready(function() {
  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });
});
