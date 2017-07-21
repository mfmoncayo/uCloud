$(document).ready(function(){

  $("#leftTab").click(function(){
    $("#registerForm").show();
    $("#loginForm").hide();
    $("#forgotForm").hide();

    $("#leftTab").addClass("active");
    $("#leftTab").removeClass("inactiveTab");
    $("#leftTab a").attr('id', 'currentTab');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active");
    $("#rightTab a").removeAttr('id');
  });

  $("#middleTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").show();
    $("#forgotForm").hide();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("active");
    $("#middleTab").removeClass("inactiveTab");
    $("#middleTab a").attr('id', 'currentTab');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active");
    $("#rightTab a").removeAttr('id');
  });

  $("#rightTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").hide();
    $("#forgotForm").show();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("active");
    $("#rightTab").removeClass("inactiveTab");
    $("#rightTab a").attr('id', 'currentTab');
  });

});
