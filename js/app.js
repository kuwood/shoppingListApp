$(document).ready(function() {
  $('#submit').click(function() {
    $('.todo').prepend('<li><input type="checkbox"> '
     + $('#itemname').val() + '</li>')
    $('.todoQuantity').prepend('<li> '
     + $('#quantity').val() + '</li>')
  })
});
