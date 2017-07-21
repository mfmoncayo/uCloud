$(document).ready(function () {
  $('[data-toggle="settings"]').click(function() {
    if($('#sidebarLeft').hasClass('postL')) {
        $('#sidebarLeft').removeClass('postL');
    }else{
        $('#sidebarLeft').addClass('postL');
    }
  });

  $('[data-toggle="profile"]').click(function() {
    if($('#sidebarRight').hasClass('postR')) {
        $('#sidebarRight').removeClass('postR');
    }else{
        $('#sidebarRight').addClass('postR');
    }
  });
});

//$('[data-toggle="settings"]').click(function() {
  //$('#sidebarLeft').attr('id', 'sidebarLeft2');
//});
