module.exports.favsshow = 1;
module.exports.favs = [];
module.exports.myList = [];
//remove item feature
module.exports.deleteme = function(ul) {
  $(ul).on('mouseenter', 'li', function() {
      $(this).find('.remove').append('<i class="fa fa-times" aria-hidden="true"></i>');
      $('.remove').css('color', 'red');
      $('i').click(function() {
        module.exports.myList.pop($(this).parent().parent().text());
        $(this).parent().parent().remove();
        console.log(module.exports.myList);
      });
    })
    .on('mouseleave', 'li', function() {
      $('.remove').children().remove();
    });
};

module.exports.showhidebutton = function() {
  if ($('.showhide').length === 0 &&
    $('.todo').children().length > 0) {
    $('.todoContent').prepend('<button class="showhide">Hide list</button>');
  }
};

//
module.exports.addTomyList = function(target) {
  module.exports.myList.push(target);
};

//localStorage item and item count
module.exports.countOfItems = function(target) {
  var count = localStorage[target];
  if (!count) {
    count = 1;
  } else {
    count++;
  }
  localStorage[target] = count;
};
