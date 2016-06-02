deleteme = function (ul) {
  $(ul).on('mouseenter','li', function() {
    $(this).append('<i class="fa fa-times" aria-hidden="true"></i>')
    $('i').css('color','red')
    $('i').click(function() {
      $(this).parent().remove()
    })
  })
  .on('mouseleave','li', function() {
    $('i').remove()
})};

$(document).ready(function() {
  //new item feature
  $('#submit').click(function() {
    $('.todo').prepend('<li><input type="checkbox"> '
     + $('#itemname').val() + '</li>')
    /**$('.todoQuantity').prepend('<li> '
     + $('#quantity').val() + '</li>')**/
  })
  //remove item feature
  deleteme('.complete')
  deleteme('.todo')
  //mark complete feature
  $('.todo').on('click','li', function(event) {
    ($('input', this).prop('checked', true));
    $('i').remove()
    $('.complete').prepend($(this))
  })
  //undo complete feature
  $('.complete').on('click','li', function(event) {
    ($('input', this).prop('checked', false));
    $('i').remove()
    $('.todo').prepend($(this))
  })
  //clear feature
  $('#clear').click(function() {
    $('ul > li').remove()
  })
});
