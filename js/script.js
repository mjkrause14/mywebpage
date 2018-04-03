$('.btn-scroll').on('click', function() {
  var val = $(this).data('value');
  $('html, body').animate({
    scrollTop: $(val).offset().top
  }, 2000);
});
