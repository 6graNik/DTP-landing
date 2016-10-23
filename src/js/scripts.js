// слайдер в header
$(document).ready(function() {
  var controls = $('.main-slider__control-item');
  var controlsLength = controls.length;

  controls.on('click', function() {
    var container = $('.header__slides-inner');
    var fullWidth = container.width();
    var index = $(this).index();

    var marginLeft = -(fullWidth * index / controlsLength) ;

    container.animate({marginLeft: marginLeft + 'px'}, function() {
      controls.removeClass('main-slider__control-item--current');
      $(controls[index]).addClass('main-slider__control-item--current');
    });

    return false;
  })
});
