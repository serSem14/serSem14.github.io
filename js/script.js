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

      // ===================================================================
      // зум і переміщення зображення
      var mouseX;
      var mouseY;
      var mouseDown = false;
      var scale = 1;
      var translateX = 0;
      var translateY = 0;
    
      $('#modal img').on('mousedown', function(event) {
          $(this).css({'cursor': 'grabbing'});
          mouseX = event.pageX;
          mouseY = event.pageY;
          mouseDown = true;
      });
    
      $('#modal img').on('mouseup', function(event) {
         $(this).css({'cursor': 'grab'});
          mouseDown = false;
      });
    
      $('#modal img').on('mousemove', function(event) {
          if (mouseDown) {
              event.preventDefault();
              var newMouseX = event.pageX;
              var newMouseY = event.pageY;
              var deltaX = newMouseX - mouseX;
              var deltaY = newMouseY - mouseY;
              translateX += deltaX;
              translateY += deltaY;
              mouseX = newMouseX;
              mouseY = newMouseY;
              $(this).css('transform', 'scale(' + scale + ') translate(' + translateX + 'px, ' + translateY + 'px)');
          }
      });
    
      $('#modal img').on('wheel', function(event) {
          event.preventDefault();
          if (event.originalEvent.deltaY > 0) {
              scale /= 1.1;
          } else {
              scale *= 1.1;
          }
          $(this).css('transform', 'scale(' + scale + ') translate(' + translateX + 'px, ' + translateY + 'px)');
      });

      // ===================================================================

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

      let contacts = document.querySelectorAll('.footer_wrapper_contacts');
      let menu = document.querySelector('.menu');
      let simbolBeck = document.querySelectorAll('.menu_slide_simbol');
      
      contacts.forEach(function(contact) {
        contact.addEventListener('click', function() {
          menu.style.transform = 'translateX(0)';
        });
      });
      
      simbolBeck.forEach(function(simbol) {
        simbol.addEventListener('click', function() {
          menu.style.transform = 'translateX(100%)';
        });
      });
    
});

