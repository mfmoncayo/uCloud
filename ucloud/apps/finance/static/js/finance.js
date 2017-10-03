$(document).ready(function() {

$(".famSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","block");
  $(".finDesignGroupContainer2").css("display","none");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","none");
  $(".finDesignGroupContainer3a").css("display","none");

  $(".detailTitle").text("Career Status");
  $(".finDesignDetailsContainer1").css("display","block");
  $(".finDesignDetailsContainer2").css("display","none");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","none");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".bizSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","block");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","none");
  $(".finDesignGroupContainer3a").css("display","none");

  $(".detailTitle").text("Business Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","block");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","none");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".firmSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","block");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","none");
  $(".finDesignGroupContainer3a").css("display","none");
  $(this).parents([1]).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true);

  $(".detailTitle").text("Business Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","block");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","none");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".employeeSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","none");
  $(".finDesignGroupContainer2a").css("display","block");
  $(".finDesignGroupContainer3").css("display","none");
  $(".finDesignGroupContainer3a").css("display","none");
  $(this).parents([1]).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true);

  $(".detailTitle").text("Employee Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","none");
  $(".finDesignDetailsContainer2a").css("display","block");
  $(".finDesignDetailsContainer3").css("display","none");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".orgSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","none");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","block");
  $(".finDesignGroupContainer3a").css("display","none");

  $(".detailTitle").text("Organization Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","none");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","block");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".groupSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","none");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","block");
  $(".finDesignGroupContainer3a").css("display","none");
  $(this).parents([1]).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true);

  $(".detailTitle").text("Organization Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","none");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","block");
  $(".finDesignDetailsContainer3a").css("display","none");
});

$(".memberSelect").click(function () {
  $(".otherDesignRelatedContainer").css("opacity","1");
  $(".finDesignGroupContainer1").css("display","none");
  $(".finDesignGroupContainer2").css("display","none");
  $(".finDesignGroupContainer2a").css("display","none");
  $(".finDesignGroupContainer3").css("display","none");
  $(".finDesignGroupContainer3a").css("display","block");
  $(this).parents([1]).siblings('.radioSelectMe').find('.toggleRadio').prop("checked", true);

  $(".detailTitle").text("Member Status");
  $(".finDesignDetailsContainer1").css("display","none");
  $(".finDesignDetailsContainer2").css("display","none");
  $(".finDesignDetailsContainer2a").css("display","none");
  $(".finDesignDetailsContainer3").css("display","none");
  $(".finDesignDetailsContainer3a").css("display","block");
});

$(".breakSelect").click(function () {
  $(".finDesignCareerContainer1").css("opacity","1");
  $(".finDesignCareerContainer2").css("opacity","0");
  $(".finDesignCareerContainer3").css("opacity","0");
  $(".finDesignCareerContainer4").css("opacity","0");
});

$(".studentSelect").click(function () {
  $(".finDesignCareerContainer1").css("opacity","0");
  $(".finDesignCareerContainer2").css("opacity","1");
  $(".finDesignCareerContainer3").css("opacity","0");
  $(".finDesignCareerContainer4").css("opacity","0");
});

$(".partSelect").click(function () {
  $(".finDesignCareerContainer1").css("opacity","0");
  $(".finDesignCareerContainer2").css("opacity","0");
  $(".finDesignCareerContainer3").css("opacity","1");
  $(".finDesignCareerContainer4").css("opacity","0");
});

$(".fullSelect").click(function () {
  $(".finDesignCareerContainer1").css("opacity","0");
  $(".finDesignCareerContainer2").css("opacity","0");
  $(".finDesignCareerContainer3").css("opacity","0");
  $(".finDesignCareerContainer4").css("opacity","1");
});

});
