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
    nextArrow: $(".trasted-slider__arrow_next"),
    prevArrow: $(".trasted-slider__arrow_prev"),
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

  // Smoth Scroll
  var sections = $('.nav-sections');
  var nav = $('.header-nav');
  var nav_height = nav.outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
      var top = $(this).offset().top - nav_height - 100;
      var bottom = top + $(this).outerHeight() - 350;

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('.nav-link').removeClass('active');
        nav.find('.nav-link[href="#'+$(this).attr('id')+'"]').addClass('active');
      } else if (cur_pos < 300) {
        nav.find('.nav-link').removeClass('active');
      }
    });
  });

  $('a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 700);

    return false;
  });
});
