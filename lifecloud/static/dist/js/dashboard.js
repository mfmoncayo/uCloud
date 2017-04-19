$(document).ready(function() {
  $(".logo").mouseover(function () {
    $(this).attr('src', '../../static/dist/images/logo2.png');
  }).mouseout(function () {
    $(this).attr('src', '../../static/dist/images/logo.png');
  });

  $(".exploreRightBtn").click(function () {
    //FINISH ADDING JQUERY TO SHOW PLUS BTN on EXPLORE >>>
    var attr = $(".exploreRightBtn2").attr('display');
    if(attr==="undefined"){
      $(".exploreRight").addClass('exploreRight2');
    };
    else(){
      $(".exploreRight").addClass('exploreRight2');
    };
  });

  $('.datepicker').datepicker({
    startDate: '-3d'
  });

});
