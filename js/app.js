//remove item feature
deleteme = function (ul) {
  $(ul).on('mouseenter','li', function() {
    $(this).find('.remove').append('<i class="fa fa-times" aria-hidden="true"></i>')
    $('.remove').css('color','red')
    $('i').click(function() {
      myList.pop($(this).parent().parent().text())
      $(this).parent().parent().remove()
      console.log(myList)
    })
  })
  .on('mouseleave','li', function() {
    $('.remove').children().remove()
})};

showhidebutton = function() {
  if ($('.showhide').length == 0
   && $('.todo').children().length > 0) {
    $('.todoContent').prepend('<button class="showhide">Hide list</button>')
  }
}

//
addTomyList = function(target) {
  myList.push(target)
}

//localStorage item and item count
countOfItems = function(target) {
  var count = localStorage[target]
  if (!count) {
    count = 1
  } else {
    count++
  }
  localStorage[target] = count
}
var favsshow = 1
var favs = []
var myList = []
$(document).ready(function() {
  //new item feature
  $('#submit').click(function() {
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> '
     + $('#itemname').val() +
     '</div><div class="quantity">' +
     $('#quantity').val() +
     '</div><div class="remove"></div></li>')
    showhidebutton()
    addTomyList($('#itemname').val())
    //localStorage.myList = myList (not using)
    console.log(myList)
    //localStorage item count
    countOfItems($('#itemname').val())
  })
  //favorites button
  $('.favsshowhide').click(function(event) {
    if (favsshow == 1) {
      $('.favorites').hide()
      favsshow = 0
    } else {
      $('.favorites').show()
      favsshow = 1
    }
  })
  //store favorites feature
  for (item in localStorage) {
    if (localStorage.getItem(item) > 5) {
      favs.push(item)
      console.log('Wow, it seems you really like ' + '"' + item + '"')
    }
  }
  //add from favorites feature
  $('.favorites').on('click','li', function(event) {
    addTomyList($(this).text())
    countOfItems($(this).text())
    quantity = prompt('How many?')
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> '
     + $(this).text() +
     '</div><div class="quantity">' + quantity +
     '</div><div class="remove"></div></li>')
    showhidebutton()
  })
  //populate favorites feature
  favs.forEach(function(item) {
    $('.favorites').prepend(
      '<li>'+ item + '</li>')
  })
  //search feature
  $('#itemsearch').click(function() {
    var inQuiry = $('#searchbox').val()

    alldiv = $('ul').find('.divcheck')
    for (i = 0; i < alldiv.length; i++) {
      $(alldiv[i]).parent().show()
    }
    for (i = 0; i < alldiv.length; i++) {
      if ($(alldiv[i]).text().indexOf(inQuiry) == -1) {
        $(alldiv[i]).parent().hide()
      }
    }
  })
  //show/hide todo list feature
  $('.todoContent').on('click','button', function(event) {
    if ($('.showhide').text() == 'Hide list') {
      $('.todo').hide()
      $('.showhide').text('Show list')
    } else {
      $('.todo').show()
      $('.showhide').text('Hide list')
    }
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
    $('.todo > li').remove()
    $('.complete > li').remove()
    $('.showhide').remove()
    myList = []
  })
});
