$(document).ready(function () {
  $('[data-toggle="settings"]').click(function() {
    $('.row-offcanvas-left').toggleClass('active');
  });

  $('[data-toggle="profile"]').click(function() {
    $('.row-offcanvas-right').toggleClass('active');
  });
});
