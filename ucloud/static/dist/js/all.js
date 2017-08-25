$(document).ready(function(){
  $(".row").click(function(){
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
}
