$(document).ready(function() {

  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });

  $(".glogo").click(function(e) {
      e.stopPropagation();
      if($('.worldView').hasClass('dead')) {
        $("#earth_div2").css('visibility','visible');
        $(".worldView").css('visibility','visible');
        $(".worldView2").css('visibility','visible');
        $("#earth_div2").css('opacity','1');
        $(".worldView").css('opacity','1');
        $(".worldView2").css('opacity','1');
        $(".worldView").addClass('alive');
        $(".worldView").removeClass('dead');
        $(".bookView").css('visibility','hidden');
        $(".bookView").css('opacity','0');
        $(".bookView").addClass('dead');
        $(".bookView").removeClass('alive');
      }
      else {
        $("#earth_div2").css('visibility','hidden');
        $(".worldView").css('visibility','hidden');
        $(".worldView2").css('visibility','hidden');
        $("#earth_div2").css('opacity','0');
        $(".worldView").css('opacity','0');
        $(".worldView2").css('opacity','0');
        $(".worldView").removeClass('alive');
        $(".worldView").addClass('dead');
      }
  });

  $(".blogo").click(function(e) {
      e.stopPropagation();
      if($('.bookView').hasClass('dead')) {
        $(".bookView").css('visibility','visible');
        $(".bookView").css('opacity','1');
        $(".bookView").addClass('alive');
        $(".bookView").removeClass('dead');
        $("#earth_div2").css('visibility','hidden');
        $(".worldView").css('visibility','hidden');
        $(".worldView2").css('visibility','hidden');
        $("#earth_div2").css('opacity','0');
        $(".worldView").css('opacity','0');
        $(".worldView2").css('opacity','0');
        $(".worldView").addClass('dead');
        $(".worldView").removeClass('alive');
      }
      else {
        $(".bookView").css('visibility','hidden');
        $(".bookView").css('opacity','0');
        $(".bookView").addClass('dead');
        $(".bookView").removeClass('alive');
      }
  });

  $('body').on("click", ".accountDrop.dropdown-menu", function (e) {
    $(this).parent().is(".open") && e.stopPropagation()
  });

  $(".secondDrop").click(function() {
    if($(this).siblings(".dropdown-menu").hasClass('block')){
      $(this).siblings(".dropdown-menu").removeClass('block');
    }
    else {
      $(this).siblings(".dropdown-menu").addClass('block');
    }
  });

  $(document).click(function(e) {
  var target = e.target;
    if (!$(target).is('.secondDrop') ) {
    $(".secondDrop").siblings(".dropdown-menu").removeClass('block');
    }
  });

  $(".radioSelect").click(function () {
    if($(this).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true)) {
    }
    else {
    $(this).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true);
    }
  });

  $(".wactTitle").click(function() {
    $(".dropFix").toggle();
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

  $(".secondDrop").click(function() {
    $(this).css("display","show");
  });

});
