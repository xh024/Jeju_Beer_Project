$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,               
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    autoplaySpeed:6000,
    autoHeight:true, 
    responsive: {
      992:{
      items:6
      },
      991:{
      items:3
      }
    }
  });
  $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
  })
});