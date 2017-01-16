$(function(){

  $("#leftTab").click(function(){
    $("#registerForm").show();
    $("#loginForm").hide();
    $("#forgotForm").hide();
    $("#leftTab").addClass("active");
    $("#leftTab a").addClass("currentTab");
    $("#middleTab").removeClass("active");
    $("#middleTab a").removeClass("currentTab");
    $("#rightTab").removeClass("active");
    $("#rightTab a").removeClass("currentTab");
  });

  $("#middleTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").show();
    $("#forgotForm").hide();
    $("#middleTab").addClass("active");
    $("#middleTab a").addClass("currentTab");
    $("#leftTab").removeClass("active");
    $("#leftTab a").removeClass("currentTab");
    $("#rightTab").removeClass("active");
    $("#rightTab a").removeClass("currentTab");
  });

  $("#rightTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").hide();
    $("#forgotForm").show();
    $("#rightTab").addClass("active");
    $("#rightTab a").addClass("currentTab");
    $("#middleTab").removeClass("active");
    $("#middleTab a").removeClass("currentTab");
    $("#leftTab").removeClass("active");
    $("#leftTab a").removeClass("currentTab");
  });

});
