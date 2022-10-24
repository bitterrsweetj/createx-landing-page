var mixer = mixitup('.directions__list');

$(document).on('click', '.directions__filter-btn', function () {
  $('.directions__filter-btn').removeClass('directions__filter-btn--active')
  $(this).addClass('directions__filter-btn--active');

})

$('.team__slider').slick({
  arrows: false,
  slidesToShow: 4,
  infinite: true,
  draggable: false,
  waitForAnimate: false,
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
  infinite: true,
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

})

