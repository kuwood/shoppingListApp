$(document).ready(function() {
  //new item feature
  $('#submit').click(function() {
    $('.todo').prepend('<li><input type="checkbox"> '
     + $('#itemname').val() + '</li>')
    /**$('.todoQuantity').prepend('<li> '
     + $('#quantity').val() + '</li>')**/
  })
  //mark complete feature
  $('.todo').on('click','li', function(event) {
    ($('input', this).prop('checked', true));
    $('.complete').prepend($(this))
  })
  //undo complete feature
  $('.complete').on('click','li', function(event) {
    ($('input', this).prop('checked', false));
    $('.todo').prepend($(this))
  })
  //clear feature
  $('#clear').click(function() {
    $('ul > li').remove()
  })
});
