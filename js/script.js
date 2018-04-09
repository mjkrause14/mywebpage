$(function () {
  $('.header-hidden').hide();
  $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
  setTimeout(function() {
    $('.header-hidden').fadeIn(2000);
  }, 1000)
})

$('.btn-scroll').on('click', function() {
  var val = $(this).data('value');
  $('html, body').animate({
    scrollTop: $(val).offset().top
  }, 1000);
});


