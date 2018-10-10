$(document).ready(function(){
  $('.team-carousel').slick({
  	slidesToShow: 3,
 		slidesToScroll: 1,
  	autoplaySpeed: 3000,
  	prevArrow: '<i class="fas fa-angle-left left-arrow"></i>',
  	nextArrow: '<i class="fas fa-angle-right right-arrow"></i>',
  	dots: true,
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

  $('.hamburger').click(function() {
  	$('.nav').toggle();
  })

});

//anchor jquery below

 $(document).ready(function() {
  $(".anchor-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});


