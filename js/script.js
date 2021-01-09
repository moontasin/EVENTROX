// preloder
setTimeout(function(){
$(".preloder").fadeOut()
},2000)


// ============stiky bar===============
$(window).scroll(function () {
  var scrollamount = $(window).scrollTop()

  if (scrollamount > 150) {
    $(".menu").addClass("fixed")
  } else {
    $(".menu").removeClass("fixed")
  }

  if (scrollamount > 1000) {
    $(".btop").fadeIn();
  } else {
    $(".btop").fadeOut();
  }
})


// animated js
new WOW().init();

// banner js
$('.banners').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
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

// counter js

// Set the date we're counting down to
var countDownDate = new Date("dec 14, 2021 23:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$('.venobox').venobox();