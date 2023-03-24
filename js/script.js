$(document).ready(function() {

    $('div.nav_wrapper_block').on('click', 'div.nav_wrapper_block_wrapperlogo:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.section_block').removeClass('content_active').eq($(this).index()).addClass('content_active');
      });
    

    // додаткові стилі для контейнера та зображень
    $('#album').css({
        'display': 'flex',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
        'align-items': 'center',
    });
    
    $('#album img').css({
        'max-width': '100%',
        'height': 'auto',
        'margin' : '0px',
        'border-radius': '5px',
        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.3)',
        'cursor': 'zoom-in',
    });
    
    // взаємодія з альбомом
    $('#album img').on('click', function() {
    // отримуємо шлях до вибраного зображення
    var src = $(this).attr('src');

    // створюємо модальне вікно з великим зображенням
    $('body').append('<div id="modal"><img src="' + src + '" alt="Modal"></div>');
    // з'явлення модального вікна з плавною анімацією
    $('#modal').fadeIn(200);
    // додаткові стилі для модального вікна та зображення
    $('#modal').css({
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%',
      'background-color': 'rgba(0, 0, 0, 0.7)',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'z-index': 999,
    });
  
    $('#modal img').css({
      'max-width': '90%',
      'max-height': '90%',
    });

    $('#modal img').on('click', function() {
      if ($(this).hasClass('zoomed')) {
        $(this).css({'transform': 'scale(1)', 'cursor': 'zoom-in'});
        $(this).removeClass('zoomed');
      } else {
        $(this).css({'transform' : 'scale(1.5)', 'cursor': 'move'});
        $(this).addClass('zoomed');
      }
    });
    
    $('#modal img').on('mousemove', function(event) {
      if ($(this).hasClass('zoomed') && event.buttons === 1) {
        var mouseX = event.pageX - $(this).offset().left;
        var mouseY = event.pageY - $(this).offset().top;
        var translateX = ((mouseX / $(this).width()) - 0.5) * 300;
        var translateY = ((mouseY / $(this).height()) - 0.5) * 300;
        $(this).css('transform', 'scale(1.5) translate(' + translateX + 'px, ' + translateY + 'px)');
      }
    });
    
    $('#modal img').on('mousedown', function(event) {
      if ($(this).hasClass('zoomed') && event.buttons === 1) {
        $(this).css({'cursor': 'grabbing'});
        $(this).on('mouseleave', function() {
          $(this).css({'cursor': 'move'});
        });
      }
    });
    
    $('#modal img').on('mouseup', function(event) {
      $(this).css({'cursor': 'move'});
      $(this).off('mouseleave');
    });

    // закриваємо модальне вікно при кліку на зображення або поза ним
    $('#modal, #modal img').on('click', function(event) {
        if ($(event.target).is('#modal')) {
          // зникнення модального вікна з плавною анімацією
          $('#modal').fadeOut(200, function() {
            $(this).remove();
          });
        }
    });

    });
    
});

