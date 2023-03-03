$(document).ready(function(){

    $('div.nav_wrapper_block').on('click', 'div.nav_wrapper_block_wrapperlogo:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.section_block').removeClass('content_active').eq($(this).index()).addClass('content_active');
      });

});


