// will first fade out the loading animation
jQuery("#status").fadeOut();
// will fade out the whole DIV that covers the website.
jQuery("#preloader").delay(500).fadeOut("slow");

//Progress Bar / Levels
if($('.progress-levels .progress-box .bar-fill').length){
$(".progress-box .bar-fill").each(function() {
var progressWidth = $(this).attr('data-percent');
$(this).css('width',progressWidth+'%');
$(this).children('.percent').html(progressWidth+'%');
});
}

$('.owl-carousel1').owlCarousel({
loop:true,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
margin:15,
items:1,
dots:false,
nav:false
},

480:{
margin:15,
items:2,
dots:false,
nav:false
},

600:{
margin:15,
items:2,
dots:false,
nav:false
},

1199:{
margin:15,
items:3,
dots:false,
nav:false
},

1200:{
margin:30,
items:4,
nav:false,
dots:false,
loop:false
}
}
})



$('.logo-carousel').owlCarousel({
loop:true,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
margin:5,
items:1,
dots:false,
nav:false
},
600:{
margin:5,
items:3,
dots:false,
nav:false
},
1000:{
margin:40,
items:5,
nav:false,
dots:false,
 
}
}
})

$('.our-staff').owlCarousel({
loop:true,
autoplay:true,
responsiveClass:true,
responsive:{
0:{
margin:5,
items:1,
nav:false,
dots:true
},
360:{
margin:5,
items:1,
nav:false,
dots:true
},

414:{
margin:15,
items:2,
nav:false,
dots:true
},

480:{
margin:15,
items:2,
dots:false,
nav:false
},

600:{
margin:0,
items:7,
nav:false,
dots:true
},
991:{
margin:0,
items:4,
nav:false,
dots:true
},
1000:{
margin:0,
items:4,
nav:false,
dots:true
},
1440:{
margin:0,
items:5,
nav:false,
dots:true
},
1442:{
margin:0,
items:7,
nav:false,
dots:true
}

}
})


$(document).on('ready', function() {
$(".center").slick({
 dots: false,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});