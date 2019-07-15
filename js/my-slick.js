$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    autoplay: true,
    pauseOnDotsHover: true,
    arrows: false,
    speed: 1000,
    appendDots: $('header')
  });
});