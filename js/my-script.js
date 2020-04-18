$(document).ready(function () {

  /* menu */
  $('.menu__button').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('menu__button_active');
    $('.menu').toggleClass('menu_active');
  });


});