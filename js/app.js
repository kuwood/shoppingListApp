var shopList = require('../shoplist/shoplist.js');
$( () => {
  //new item feature
  $('#submit').click(() =>  {
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> ' +
      $('#itemname').val() +
     '</div><div class="quantity">' +
     $('#quantity').val() +
     '</div><div class="remove"></div></li>');
    shopList.showhidebutton();
    shopList.addTomyList($('#itemname').val());
    //localStorage.myList = myList (not using)
    console.log(shopList.myList);
    //localStorage item count
    shopList.countOfItems($('#itemname').val());
  });
  //favorites button
  $('.favsshowhide').click( (event) => {
    if (shopList.favsshow == 1) {
      $('.favorites').hide();
      shopList.favsshow = 0;
    } else {
      $('.favorites').show();
      shopList.favsshow = 1;
    }
  });
  //store favorites feature
  for (let item in localStorage) {
    if (localStorage.getItem(item) > 5) {
      shopList.favs.push(item);
      console.log('Wow, it seems you really like ' + '"' + item + '"');
    }
  }
  //add from favorites feature
  $('.favorites').on('click','li', (event) => {
    shopList.addTomyList($(this).text());
    shopList.countOfItems($(this).text());
    let quantity = prompt('How many?');
    $('.todo').prepend(
      '<li><div class="divcheck"><input type="checkbox"> ' +
      $(this).text() +
     '</div><div class="quantity">' + quantity +
     '</div><div class="remove"></div></li>');
    shopList.showhidebutton();
  });
  //populate favorites feature
  shopList.favs.forEach( (item) => {
    $('.favorites').prepend(
      '<li>'+ item + '</li>');
  });
  //search feature
  $('#itemsearch').click( () => {
    let inQuiry = $('#searchbox').val();

    alldiv = $('ul').find('.divcheck');
    for (let i = 0; i < alldiv.length; i++) {
      $(alldiv[i]).parent().show();
    }
    for (let i = 0; i < alldiv.length; i++) {
      if ($(alldiv[i]).text().indexOf(inQuiry) == -1) {
        $(alldiv[i]).parent().hide();
      }
    }
  });
  //show/hide todo list feature
  $('.todoContent').on('click','button', (event) =>  {
    if ($('.showhide').text() == 'Hide list') {
      $('.todo').hide();
      $('.showhide').text('Show list');
    } else {
      $('.todo').show();
      $('.showhide').text('Hide list');
    }
  });

  //remove item feature
  shopList.deleteme('.complete');
  shopList.deleteme('.todo');
  //mark complete feature
  $('.todo').on('click','li', (event) => {
    ($('input', this).prop('checked', true));
    $('i').remove();
    $('.complete').prepend($(this));
  });
  //undo complete feature
  $('.complete').on('click','li', (event) => {
    ($('input', this).prop('checked', false));
    $('i').remove();
    $('.todo').prepend($(this));
  });
  //clear feature
  $('#clear').click( () =>  {
    $('.todo > li').remove();
    $('.complete > li').remove();
    $('.showhide').remove();
    shopList.myList = [];
  });
});
