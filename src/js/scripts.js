// слайдер в header
$(document).ready(function() {
  var headerSlider = function() {
    var container = $('.header__slides-inner');
    var controls = $('.header__main-slider .main-slider__control-item');

    slider(controls, container);
  }

  var exampleSlider = function() {
    var big = $('.slider-item__example-item');
    big.each(function(){
      var container = $(this).find('.example-item__image-slider-inner');
      var controls = $(this).find('.example-item__image-slider__controls .main-slider__control-item');

      slider(controls, container);
    })

  }


  exampleSlider();
  headerSlider();
});


function slider(controls, container) {
  var controlsLength = controls.length;

  controls.on('click', function() {
    var fullWidth = container.width();
    var index = $(this).index();

    var marginLeft = -(fullWidth * index / controlsLength) ;

    container.animate({marginLeft: marginLeft + 'px'}, function() {
      controls.removeClass('main-slider__control-item--current');
      $(controls[index]).addClass('main-slider__control-item--current');
    });

    return false;
  })
}

/* overlay form  */
$(document).ready(function() {
  $('.why-us__button').on('click', function() {
    form();
  });

  $('.button-try').on('click', function() {
    form();
  });

  $(".main__callback-form").submit(function() {
    debugger;
    var form_data = $(this).serialize();
    $.ajax(
      {
        type: "POST",
        url: "../mail/index.php",
        data: form_data,
        success: function() {
          console.log('>>>> success');
           closeOverlayIfNeeded();
        },
        error: function() {
          console.log('>>>> error');
          closeOverlayIfNeeded();
        }
      }
    );
  });
});

function form() {
  var overlay = $('.overlay');
  var closeButton = $('.overlayCloseButton');
  var form = $('.main__callback-form');
  var body = $('body');

  overlay.addClass('overlayViisible');
  closeButton.addClass('overlayViisible');
  form.addClass('overlayForm');
  body.addClass('fixedBody');

  closeButton.on('click', function() {
    form.removeClass('overlayForm');
    overlay.removeClass('overlayViisible');
    body.removeClass('fixedBody');
    $(this).removeClass('overlayViisible');
  });
}

function closeOverlayIfNeeded() {
  var overlay = $('.overlay');
  var closeButton = $('.overlayCloseButton');
  var form = $('.main__callback-form');
  var body = $('body');

  form.removeClass('overlayForm');
  overlay.removeClass('overlayViisible');
  body.removeClass('fixedBody');
  closeButton.removeClass('overlayViisible');
}




/* cтарый juery слайдер */
 // (function(){
 // var container = $('.examples__slider-inner'),
 // 	listitem = container.find('.examples__slider-item'),
 // 	liWidth = listitem.first().width(),
 // 	Lengthlistitem = listitem.length,
 // 	totaliWidth = liWidth * Lengthlistitem,
 // 	current = 1,
 // 	autoslide = 0;
 //
 // setInterval(function() {
 //
 // 	if (autoslide != 0){
 //
 // 			var currentmargin = container.css('magrin-left');
 // 				futurmargin = currentmargin - (current * liWidth);
 //
 // 				current++;
 // 				if (current == Lengthlistitem) {
 // 					current = 0;
 // 				}
 // 				container.animate({'margin-left': futurmargin});
 // 		}
 //
 // 	},8000);
 //
 // $('.nav_button').on('click',function(){
 // 		autoslide = 0;
 // 	var direction = $(this).data('dir'),
 // 		loc = liWidth;
 // 		(direction === 'next') ? ++current : --current;
 // 		if (current === 0) {
 // 			current = Lengthlistitem;
 // 			loc = totaliWidth - liWidth ;
 // 			direction = 'next';
 // 		} else if (current - 1 === Lengthlistitem) {
 // 		current = 1;
 // 		loc = 0;
 // 		}
 // 		transition(container, loc, direction);
 //
 // });
 //
 //
 // function transition( funcontainer, loc, direction){
 // 	var unit;
 // 	if (direction && loc !== 0 ) {
 // 		unit =  (direction === 'next') ? '-=' : '+=';
 // 	}
 // 	funcontainer.animate({
 // 	'margin-left' : unit ? (unit + loc) : loc
 // 	});
 //
 // }
 //
 //
 // })();


/*   var examplesSlider = function() {
    var controls = $('.examples__slider-control');
    var container = $('.examples__slider-inner');
    var items = $('.examples__slider-item');
    var prev = controls.filter(function(item){
      return $(this).attr('data-dir') === 'prev';
    })[0];
    var next = controls.filter(function(item){
      return $(this).attr('data-dir') === 'next';
    })[0];
    var containerWidth =  parseInt(container.css('width'));
    var itemsLength = items.length;
    var itemWidth = parseInt($(items[0]).css('width'));

    var curMargin = parseInt(container.css('marginLeft'));
    var currentItemIndex = ((items.length * curMargin) / containerWidth);

    if (!currentItemIndex) {
      $(prev).addClass('disable-control');
    }

    if (currentItemIndex === itemsLength - 1) {
      $(next).addClass('disable-control');
    }

    var a = 5;

    controls.on('click', function() {
      var controls = $('.examples__slider-control');
      var container = $('.examples__slider-inner');
      var items = $('.examples__slider-item');
      var prev = controls.filter(function(item){
        return $(this).attr('data-dir') === 'prev';
      })[0];
      var next = controls.filter(function(item){
        return $(this).attr('data-dir') === 'next';
      })[0];
      var containerWidth =  parseInt(container.css('width'));
      var itemsLength = items.length;
      var itemWidth = parseInt($(items[0]).css('width'));

      var curMargin = parseInt(container.css('marginLeft'));
      var currentItemIndex = ((items.length * curMargin) / containerWidth);
      var dir = $(this).attr('data-dir');
      var newMargin;

      if (dir === 'next') {
        newMargin = curMargin - itemWidth;
        container.animate({marginLeft: newMargin + 'px'}, function() {
          if (!currentItemIndex + 1) {
            $(prev).addClass('disable-control');
          } else {
            $(prev).removeClass('disable-control');
          }

          if (currentItemIndex + 1 === itemsLength - 1) {
            $(next).addClass('disable-control');
          } else {
            $(next).removeClass('disable-control');
          }

        });
        return false;
      }

      newMargin = curMargin + itemWidth;
      container.animate({marginLeft: newMargin + 'px'}, function() {
        debugger;
        if (!currentItemIndex - 1) {
          $(prev).addClass('disable-control');
        }

        if (currentItemIndex + 1 === itemsLength - 1) {
          $(next).addClass('disable-control');
        }

      });
      return false;
    })
  } */
