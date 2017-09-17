$(document).ready(function() {

  initialize();

  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });

  setTimeout(function () {
    $("#earth_div2").css("visibility","hidden");
  }, 10);

  setTimeout(function () {
    $("#earth_div2").css("position","absolute");
    $("#earth_div2").css("margin-left","250px");
    $("#earth_div2").css("margin-top","220px");
    $("#earth_div2").css("height","230px");
    $("#earth_div2").css("width","230px");
    $("#earth_div2 canvas").css("margin-left","-180px");
    $("#earth_div2 canvas").css("margin-top","-32px");
    $("#earth_div2 canvas").css("height","130%");
    $("#earth_div2 canvas").css("width","260%");
    $("#earth_div2 canvas").next().css("margin-left","55px");
    $("#earth_div2 canvas").next().css("margin-bottom","10px");
  }, 100);

  setTimeout(function () {
    $("#earth_div2").css("position","absolute");
  }, 1000);

  $(".logo").click(function(e) {
      e.stopPropagation();
      if($('.worldView').hasClass('dead')) {
        $("#earth_div2").css('visibility','visible');
        $(".worldView").css('visibility','visible');
        $("#earth_div2").css('opacity','1');
        $(".worldView").css('opacity','1');
        $(".worldView").addClass('alive');
        $(".worldView").removeClass('dead');
      }
      else {
        $("#earth_div2").css('visibility','hidden');
        $(".worldView").css('visibility','hidden');
        $("#earth_div2").css('opacity','0');
        $(".worldView").css('opacity','0');
        $(".worldView").removeClass('alive');
        $(".worldView").addClass('dead');
      }
  });

  $(".navWidthLeft2").css("width","12%");
  $(".navWidthLeft2").css("-webkit-flex","0 0 12%");
  $(".navWidthLeft2").css("margin-right","4.66667%");

  $(".hoveringBtn").mouseover(function () {
    $(this).css('background', 'rgba(0, 0, 0, .6)');
  }).mouseout(function () {
    $(this).css('background', 'rgba(0, 0, 0, .4)');
  });

  $(".hoveringBtn2").mouseover(function () {
    $(this).css('background', 'rgba(0, 0, 0, .4)');
  }).mouseout(function () {
    $(this).css('background', 'rgba(0, 0, 0, 0');
  });

  $(".tabColorActive").css("color","rgba(255,255,255,.8)");
  $(".tabColor").css("color","rgba(255,255,255,.5)");
  $(".tabColor").mouseover(function () {
    $(this).css("color","rgba(255,255,255,.8)");
  }).mouseout(function () {
    $(this).css("color","rgba(255,255,255,.5)");
  });
  $(".tabDropdown").click(function () {
    if($(this).parents()[1].hasClass('show')) {
      $(this).css("color","rgba(255,255,255,.8)");
      $(this).css("background","rgba(0,0,0,.6)");
    }
    else {
      $(this).css("color","rgba(255,255,255,.5)");
      $(this).css("background","rgba(0,0,0,.4)");
    }
  });


  $(".nav-link.specialTabs").css("background","rgba(0,0,0,.4)");
  $(".nav-link.specialTabs").css("border-color","rgba(0,0,0,.6)");

  $(".nav-link.active").css("background","rgba(0,0,0,.6)");
  $(".nav-link.active").css("border-color","rgba(0,0,0,.6)");

  $(".tabDivider").css("background-color","rgba(0,0,0,.6)");
  $(".tabDivider").css("border","1px solid rgba(0,0,0,.6)");

  $(".explore").click(function () {
    if($('.col-4').hasClass('collapseNavFixLeft')) {
      $(".noDisplaySubNav").css('display','block');
      $(".collapseNavFix").addClass('hoveringBtn');
      $(".collapseNavFix").css('background-color','rgba(0,0,0,.4)');
      $(".collapseNavFix").css('transition','.05s linear');
      $(".collapseNavFixLeft").attr('class', 'col-4 fixLeft');
    }
    else {
      $(".fixLeft").attr('class', 'col-4 collapseNavFixLeft');
      $(".collapseNavFix").removeClass('hoveringBtn');
      setTimeout(function () {
        $(".collapseNavFix").css("display", "none");
      }, 300);
    }
  });

  $(".profFix").css("margin-right","0px");
  $(".leaflet-control-attribution").css("margin-right","615px");
  $(".leaflet-left > .leaflet-control-zoomhome").css("margin-bottom","28px");

});
