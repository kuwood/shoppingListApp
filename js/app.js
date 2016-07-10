var shopList = require('shoplist/shoplist.js');
$(document).ready(function() {
  //new item feature
  $('#submit').click(function() {
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> ' +
      $('#itemname').val() +
     '</div><div class="quantity">' +
     $('#quantity').val() +
     '</div><div class="remove"></div></li>');
    shoplist.showhidebutton();
    shoplist.addTomyList($('#itemname').val());
    //localStorage.myList = myList (not using)
    console.log(shoplist.myList);
    //localStorage item count
    shoplist.countOfItems($('#itemname').val());
  });
  //favorites button
  $('.favsshowhide').click(function(event) {
    if (shoplist.favsshow == 1) {
      $('.favorites').hide();
      shoplist.favsshow = 0;
    } else {
      $('.favorites').show();
      shoplist.favsshow = 1;
    }
  });
  //store favorites feature
  for (var item in localStorage) {
    if (localStorage.getItem(item) > 5) {
      shoplist.favs.push(item);
      console.log('Wow, it seems you really like ' + '"' + item + '"');
    }
  }
  //add from favorites feature
  $('.favorites').on('click','li', function(event) {
    shoplist.addTomyList($(this).text());
    shoplist.countOfItems($(this).text());
    quantity = prompt('How many?');
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> ' +
      $(this).text() +
     '</div><div class="quantity">' + quantity +
     '</div><div class="remove"></div></li>');
    shoplist.showhidebutton();
  });
  //populate favorites feature
  favs.forEach(function(item) {
    $('.favorites').prepend(
      '<li>'+ item + '</li>');
  });
  //search feature
  $('#itemsearch').click(function() {
    var inQuiry = $('#searchbox').val();

    alldiv = $('ul').find('.divcheck');
    for (i = 0; i < alldiv.length; i++) {
      $(alldiv[i]).parent().show();
    }
    for (i = 0; i < alldiv.length; i++) {
      if ($(alldiv[i]).text().indexOf(inQuiry) == -1) {
        $(alldiv[i]).parent().hide();
      }
    }
  });
  //show/hide todo list feature
  $('.todoContent').on('click','button', function(event) {
    if ($('.showhide').text() == 'Hide list') {
      $('.todo').hide();
      $('.showhide').text('Show list');
    } else {
      $('.todo').show();
      $('.showhide').text('Hide list');
    }
  });

  //remove item feature
  shoplist.deleteme('.complete');
  shoplist.deleteme('.todo');
  //mark complete feature
  $('.todo').on('click','li', function(event) {
    ($('input', this).prop('checked', true));
    $('i').remove();
    $('.complete').prepend($(this));
  });
  //undo complete feature
  $('.complete').on('click','li', function(event) {
    ($('input', this).prop('checked', false));
    $('i').remove();
    $('.todo').prepend($(this));
  });
  //clear feature
  $('#clear').click(function() {
    $('.todo > li').remove();
    $('.complete > li').remove();
    $('.showhide').remove();
    shoplist.myList = [];
  });
});
