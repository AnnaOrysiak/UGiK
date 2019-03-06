$(document).ready(function () {
  $('#toggler').click(function () {
    $(this).toggleClass('open');
    $('nav ul').toggleClass('open');
  });
});