$(function () {
  $('.header-hidden').hide();
  $('#home').addClass('open');
  $('[data-toggle="tooltip"]').tooltip({'placement': 'top'});
  setTimeout(function() {
    $('.header-hidden').fadeIn(2000);
  }, 500)
})

$('.btn-scroll').on('click', function() {
  var val = $(this).data('value');
  $('html, body').animate({
    scrollTop: $(val).offset().top
  }, 1000);
});

$(window).scroll(function(){
  if(isScrolledIntoView($('.command-in'))){
    $('.command-in').focus();
  }
  else{
    $('.command-in').blur();
  }
});

function isScrolledIntoView(elem){
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).ready(function() {
  $('#home').addClass('open');

// Command Input------------------------------

  $('input[type="text"]').keyup(function(e){

    if(e.which == 13){// ENTER key pressed
      var destination = $('input[type="text"]').val();
      var scrollTo = $('#' + destination + 'sec');
      $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
      }, 1000);
      $('input[type="text"]').val('');
    }
  });
});
