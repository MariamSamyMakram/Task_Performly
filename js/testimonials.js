$(document).ready(function(){
    $('.images-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-slider'
    });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.images-slider',
    dots: true,
    arrows: false,
  });

});