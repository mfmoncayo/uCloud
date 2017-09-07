$(document).ready(function() {
  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });

  $(".navWidthLeft2").css("width","12%");
  $(".navWidthLeft2").css("-webkit-flex","0 0 12%");
  $(".navWidthLeft2").css("margin-right","4.66667%");

  $(".hoveringBtn").mouseover(function () {
    $(this).css('background', 'rgba(0, 0, 0, .6)');
  }).mouseout(function () {
    $(this).css('background', 'rgba(0, 0, 0, .4)');
  });

  $(".explore").click(function () {
    if($('.col-4').hasClass('collapseNavFixLeft')) {
      $(".collapseNavFix").css('background','rgba(0,0,0,.4)');
      $(".collapseNavFix").css('transition','.5s linear');
      $(".collapseNavFix").css('box-shadow','0px 0px 5px #888888');
      $(".collapseNavFixLeft").attr('class', 'col-4 fixLeft');
    }
    else {
      $(".fixLeft").attr('class', 'col-4 collapseNavFixLeft');
      $(".collapseNavFix").css('background','none');
      $(".collapseNavFix").css('box-shadow','none');
    }
  });

  $(".footerWidthLeft2").css("width","12%");
  $(".footerWidthLeft2").css("-webkit-flex","0 0 12%");
  $(".profFix").css("margin-right","0px");
});
