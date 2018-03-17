$(document).ready(function() {
  // Main menu burger
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  // Languages
  $('#language_ru').addClass('active');

  // Cooperation Modal
  $('.coop-modal_open').click(function() {
    $('.cooperation-modal').addClass('active');
  })

  $('.coop-modal_close').click(function() {
    $('.cooperation-modal').removeClass('active');
  })

  // Trasted Slider
  $('.trasted-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          rows: 1,
          slidesToShow: 1,
        }
      }
    ]
  });
});
