console.log("cineplus.js");

$(window).load(function(){
  $('#loading-screen').fadeOut(2000);
});

$('#slider-main').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


$('.slider-categories').slick({
  infinite: true,
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true
});


$('.nav-tabs-movies a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})