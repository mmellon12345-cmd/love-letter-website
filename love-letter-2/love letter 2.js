$(document).ready(function () {
  $('#open').on('click', function () {
    $('#envelope').removeClass('close').addClass('open');
  });
  $('#reset').on('click', function () {
    $('#envelope').removeClass('open').addClass('close');
  });
});
