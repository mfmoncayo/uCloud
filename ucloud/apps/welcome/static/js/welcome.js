$(document).ready(function(){

  $(".enterLinks").hover(function(){
    $(".enterLinks").css("background-color","transparent");
  });

  $(".inactiveApplet").hover(
    function(){
      $(this).css("border-bottom","2px solid rgba(255, 243, 236, 0.25)").css("text-decoration","none");
    }, function(){
      $(this).css("border-bottom","none");
    }
  );

  $("#leftTab").click(function(){
    $("#registerForm").show();
    $("#loginForm").hide();
    $("#forgotForm").hide();

    $("#leftTab").addClass("active activeTab");
    $("#leftTab").removeClass("inactiveTab");
    $("#leftTab a").attr('id', 'currentTab');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active activeTab");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active activeTab");
    $("#rightTab a").removeAttr('id');
  });

  $("#middleTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").show();
    $("#forgotForm").hide();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active activeTab");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("active activeTab");
    $("#middleTab").removeClass("inactiveTab");
    $("#middleTab a").attr('id', 'currentTab');

    $("#rightTab").addClass("inactiveTab");
    $("#rightTab").removeClass("active activeTab");
    $("#rightTab a").removeAttr('id');
  });

  $("#rightTab").click(function(){
    $("#registerForm").hide();
    $("#loginForm").hide();
    $("#forgotForm").show();

    $("#leftTab").addClass("inactiveTab");
    $("#leftTab").removeClass("active activeTab");
    $("#leftTab a").removeAttr('id');

    $("#middleTab").addClass("inactiveTab");
    $("#middleTab").removeClass("active activeTab");
    $("#middleTab a").removeAttr('id');

    $("#rightTab").addClass("active activeTab");
    $("#rightTab").removeClass("inactiveTab");
    $("#rightTab a").attr('id', 'currentTab');
  });

  $("input[name='email']").parent().css("margin-bottom","0");
  $(".password2").parent().css("margin-bottom","0");
  $(".password3").parent().css("margin-top","-1px");

});
