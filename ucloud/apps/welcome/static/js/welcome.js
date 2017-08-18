$(document).ready(function(){

  $("#leftTab").click(function(){
    $("#registerForm").show();
    $("#loginForm").hide();
    $("#forgotForm").hide();

    $("#leftTab").addClass("active activetab");
    $("#leftTab").removeClass("inactiveTab");
    $("#leftTab a").attr('id', 'currentTab');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active activetab");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active activetab");
    $("#rightTab a").removeAttr('id');
  });

  $("#middleTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").show();
    $("#forgotForm").hide();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active activetab");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("active activetab");
    $("#middleTab").removeClass("inactiveTab");
    $("#middleTab a").attr('id', 'currentTab');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active activetab");
    $("#rightTab a").removeAttr('id');
  });

  $("#rightTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").hide();
    $("#forgotForm").show();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active activetab");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active activetab");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("active activetab");
    $("#rightTab").removeClass("inactiveTab");
    $("#rightTab a").attr('id', 'currentTab');
  });

  $("input[name='email']").parent().css("margin-bottom","0");
  $(".password2").parent().css("margin-bottom","0");
  $(".password3").parent().css("margin-top","-1px");

});
