// adding slider

var mixer = mixitup('.directions__list');

$(document).on('click', '.directions__filter-btn', function () {
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active');

})

$('.team__slider').slick({
  arrows: false,
  slidesToShow: 4,
  infinite: false,
  draggable: false,
  waitForAnimate: false,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2.5,
        draggable:true
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        dots: true,
        appendDots: $('.team__dots'),
      }
    },
  ]
})

$('.team__slider-prev').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
  e.preventDefault()
  $('.team__slider').slick('slickNext')
})

$('.testimonials__slider').slick({
  arrows: false,
  dots: true,
  appendDots: $('.testimonials__dots'),
  slidesToShow: 1,
  infinite: false,
  waitForAnimate: false,
})

$('.testimonials__prev').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickPrev')
})
$('.testimonials__next').on('click', function (e) {
  e.preventDefault()
  $('.testimonials__slider').slick('slickNext')
})

// function that allows the items to stay opened
// 
// $('.program__acc-link').on('click', function (e) {
//   e.preventDefault()
//   $(this).toggleClass('program__acc-item--active')
//   $(this).children('.program__acc-text').slideToggle()
// })


// adding toggle section
$('.program__acc-link').on('click', function (e) {
  e.preventDefault()

  if ($(this).hasClass('program__acc-item--active')) {
    $(this).removeClass('program__acc-item--active')
    $(this).children('.program__acc-text').slideUp()

  }
  else {
    $('.program__acc-link').removeClass('program__acc-item--active')
    $('.program__acc-text').slideUp()
    $(this).addClass('program__acc-item--active')
    $(this).children('.program__acc-text').slideDown()
  }
});

//adding scroll to anchors
$(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
  e.preventDefault()
  var id = $(this).attr('href'),
    top = $(id).offset().top - 100
  $('body,html').animate({ scrollTop: top }, 800);
});

//animation of the burger menu button

setInterval(() => {
  if ($(window).scrollTop() > 100 && $('.header__top').hasClass('header__top--open') === false) {
    $('.burger').addClass('burger--follow');
  } else {
    $('.burger').removeClass('burger--follow');
  }
}, 0)

//animation of the side navbar

$('.burger, .overlay').on('click', function (e) {
  e.preventDefault();
  $('.header__top').toggleClass('header__top--open');
  $('.overlay').toggleClass('overlay--show');
  $('.burger').toggleClass('open');
})





