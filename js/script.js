$(document).ready(function(){

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
        'margin': '10px',
        'border-radius': '5px',
        'box-shadow': '0 0 5px rgba(0, 0, 0, 0.3)',
    });
    
    // взаємодія з альбомом
    $('#album img').on('click', function() {
    // отримуємо шлях до вибраного зображення
    var src = $(this).attr('src');

    // створюємо модальне вікно з великим зображенням
    $('body').append('<div id="modal"><img src="' + src + '" alt="Modal"></div>');
    
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
    // з'явлення модального вікна з плавною анімацією
    $('#modal').fadeIn(200);

    // закриваємо модальне вікно при кліку на зображення або поза ним
    $('#modal, #modal img').on('click', function() {
        // зникнення модального вікна з плавною анімацією
        $('#modal').fadeOut(200, function() {
        $(this).remove();
        });
    });
    });

});


