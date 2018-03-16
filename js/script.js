$(document).ready(function() {
  // Main menu burger
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // Languages
  $('#language_ru').addClass('active');


});
