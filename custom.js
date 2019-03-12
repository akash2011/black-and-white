/* Custom Javascript */
$(window).on('load',function(){
  //simple use
  $('.ex1').textyle();
  $('.desc').textyle();
  //you can select options or add callback
  $('.ex2').textyle({
            duration : 400,
            delay : 100,
            easing : 'swing',
            callback : function(){
              $(this).css({
                color : 'coral',
                transition : '1s',
              });
              $('.desc').css('opacity',1);
            }
          });
});
