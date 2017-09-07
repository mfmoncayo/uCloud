$(document).ready(function(){

  $(".activeApplet").css("text-decoration","none");
  $(".inactiveApplet").css("text-decoration","none");

  $(".enterLinks").hover(function(){
    $(".enterLinks").css("background-color","transparent");
  });

  $(".inactiveApplet").hover(
    function(){
      $(this).css("border-bottom","2px solid rgba(255, 243, 236, 0.25)");
    }, function(){
      $(this).css("border-bottom","none");
    }
  );

  $(".ucloudContainer").click(function(){
    $(".ucloudContainer").show();
    $(".liveContainer").hide();
    $(".missionContainer").hide();
    $(".contactContainer").hide();
  });

  $(".liveContainer").click(function(){
    $(".ucloudContainer").hide();
    $(".liveContainer").show();
    $(".missionContainer").hide();
    $(".contactContainer").hide();
  });

  $(".missionContainer").click(function(){
    $(".ucloudContainer").hide();
    $(".liveContainer").hide();
    $(".missionContainer").show();
    $(".contactContainer").hide();
  });

  $(".contactContainer").click(function(){
    $(".ucloudContainer").shidehow();
    $(".liveContainer").hide();
    $(".missionContainer").hide();
    $(".contactContainer").show();
  });

  $(".leftTab").click(function(){
    $(".registerForm").show();
    $(".loginForm").hide();
    $(".forgotForm").hide();

    $(".leftTab").addClass("active activeTab");
    $(".leftTab").removeClass("inactiveTab");
    $(".leftTab a").attr('id', 'currentTab');

    $(".middleTab").addClass("inactiveTab");
    $(".middleTab").removeClass("active activeTab");
    $(".middleTab a").removeAttr('id');

    $(".rightTab").addClass("inactiveTab");
    $(".rightTab").removeClass("active activeTab");
    $(".rightTab a").removeAttr('id');
  });

  $(".middleTab").click(function(){
    $(".registerForm").hide();
    $(".loginForm").show();
    $(".forgotForm").hide();

    $(".leftTab").addClass("inactiveTab");
    $(".leftTab").removeClass("active activeTab");
    $(".leftTab a").removeAttr('id');

    $(".middleTab").addClass("active activeTab");
    $(".middleTab").removeClass("inactiveTab");
    $(".middleTab a").attr('id', 'currentTab');

    $(".rightTab").addClass("inactiveTab");
    $(".rightTab").removeClass("active activeTab");
    $(".rightTab a").removeAttr('id');
  });

  $(".rightTab").click(function(){
    $(".registerForm").hide();
    $(".loginForm").hide();
    $(".forgotForm").show();

    $(".leftTab").addClass("inactiveTab");
    $(".leftTab").removeClass("active activeTab");
    $(".leftTab a").removeAttr('id');

    $(".middleTab").addClass("inactiveTab");
    $(".middleTab").removeClass("active activeTab");
    $(".middleTab a").removeAttr('id');

    $(".rightTab").addClass("active activeTab");
    $(".rightTab").removeClass("inactiveTab");
    $(".rightTab a").attr('id', 'currentTab');
  });

  $("input[name='email']").parent().css("margin-bottom","0");
  $(".password2").parent().css("margin-bottom","0");
  $(".password3").parent().css("margin-top","-1px");

});
