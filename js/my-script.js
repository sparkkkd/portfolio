$(document).ready(function () {

/** ----------------------------------- Menu ----------------------------------- **/

  $('.menu__button').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('menu__button_active');
    $('.menu').toggleClass('menu_active');
    $('.menu-cursor').toggleClass('menu-cursor_active');
  });

/** ----------------------------------- Smooth Scroll ----------------------------------- **/

  $('a.item__box').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 60 + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    $('.menu').toggleClass('menu_active');
    $('.menu__button').toggleClass('menu__button_active');
    $('.menu-cursor').toggleClass('menu-cursor_active');
    return false;
  });
 
/** ----------------------------------- Custom cursor ----------------------------------- **/

  /* Global cursor */
  "use strict"
  var cursor = document.querySelector('#cursor');
  var cursorListener = function cursorListener (event){
    cursor.style.top = event.y + 'px';
    cursor.style.left = event.x + 'px';
  };
  window.addEventListener('mousemove', cursorListener);

  /* Menu cursor */
  $(document).mousemove(function(e){
    $('.menu-cursor').css({left:e.pageX, top:e.pageY});
  });
 
/** ----------------------------------- Slick slider ----------------------------------- **/

$(document).ready(function(){
  $('.works__slider').slick({
    appendArrows: $('.slider__arrows'),
    prevArrow: '<button class="prev-arrow"></button>',
    nextArrow: '<button class="next-arrow"></button>'
  });
});



});
