$(document).ready(function() {
  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });

  $(".navWidthLeft2").css("width","12%");
  $(".navWidthLeft2").css("-webkit-flex","0 0 12%");
  $(".navWidthLeft2").css("margin-right","4.66667%");

$(".tabColorActive").css("color","rgba(255,255,255,.8)");
  $(".tabColor").css("color","rgba(255,255,255,.5)");
  $(".tabColor").mouseover(function () {
    $(this).css("color","rgba(255,255,255,.8)");
  }).mouseout(function () {
    $(this).css("color","rgba(255,255,255,.5)");
  });


  $(".nav-link.specialTabs").css("background","rgba(0,0,0,.4)");
  $(".nav-link.specialTabs").css("border-color","rgba(0,0,0,.6)");

  $(".nav-link.active").css("background","rgba(0,0,0,.6)");
  $(".nav-link.active").css("border-color","rgba(0,0,0,.6)");

  $(".hoveringBtn").mouseover(function () {
    if($(this).css('display','block')) {
      $(".hoveringBtn").mouseover(function () {
        $(this).css('background', 'rgba(0, 0, 0, .6)');
      }).mouseout(function () {
        $(this).css('background', 'rgba(0, 0, 0, .4)');
      });
    }
    else{
    };
  });

  $(".explore").click(function () {
    if($('.col-4').hasClass('collapseNavFixLeft')) {
      $(".noDisplaySubNav").css('display','block');
      $(".collapseNavFix").addClass('hoveringBtn');
      $(".collapseNavFix").css('background-color','rgba(0,0,0,.4)');
      $(".collapseNavFix").css('transition','.05s linear');
      $(".collapseNavFix").css('box-shadow','0px 0px 5px #888888');
      $(".collapseNavFixLeft").attr('class', 'col-4 fixLeft');
    }
    else {
      $(".fixLeft").attr('class', 'col-4 collapseNavFixLeft');
      $(".noDisplaySubNav").css('display','none');
      $(".collapseNavFix").css('background','none');
      $(".collapseNavFix").css('box-shadow','none');
      $(".collapseNavFix").removeClass('hoveringBtn');
    }
  });

  $(".profFix").css("margin-right","0px");
  $(".leaflet-control-attribution").css("margin-right","615px");
  $(".leaflet-left > .leaflet-control-zoomhome").css("margin-bottom","28px");

});
