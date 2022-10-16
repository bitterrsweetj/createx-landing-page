$(function () {
  var mixer = mixitup('.directions__list');

  $(document).on('click', '.directions__filter-btn', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active');
  
  })

})