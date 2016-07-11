/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shopList = __webpack_require__(1);
	$(function () {
	  //new item feature
	  $('#submit').click(function () {
	    $('.todo').prepend('<li><div class="divcheck"><input type="checkbox"> ' + $('#itemname').val() + '</div><div class="quantity">' + $('#quantity').val() + '</div><div class="remove"></div></li>');
	    shopList.showhidebutton();
	    shopList.addTomyList($('#itemname').val());
	    //localStorage.myList = myList (not using)
	    console.log(shopList.myList);
	    //localStorage item count
	    shopList.countOfItems($('#itemname').val());
	  });
	  //favorites button
	  $('.favsshowhide').click(function (event) {
	    if (shopList.favsshow == 1) {
	      $('.favorites').hide();
	      shopList.favsshow = 0;
	    } else {
	      $('.favorites').show();
	      shopList.favsshow = 1;
	    }
	  });
	  //store favorites feature
	  for (var item in localStorage) {
	    if (localStorage.getItem(item) > 5) {
	      shopList.favs.push(item);
	      console.log('Wow, it seems you really like ' + '"' + item + '"');
	    }
	  }
	  //add from favorites feature
	  $('.favorites').on('click', 'li', function (event) {
	    shopList.addTomyList($(undefined).text());
	    shopList.countOfItems($(undefined).text());
	    var quantity = prompt('How many?');
	    $('.todo').prepend('<li><div class="divcheck"><input type="checkbox"> ' + $(undefined).text() + '</div><div class="quantity">' + quantity + '</div><div class="remove"></div></li>');
	    shopList.showhidebutton();
	  });
	  //populate favorites feature
	  shopList.favs.forEach(function (item) {
	    $('.favorites').prepend('<li>' + item + '</li>');
	  });
	  //search feature
	  $('#itemsearch').click(function () {
	    var inQuiry = $('#searchbox').val();
	
	    alldiv = $('ul').find('.divcheck');
	    for (var i = 0; i < alldiv.length; i++) {
	      $(alldiv[i]).parent().show();
	    }
	    for (var _i = 0; _i < alldiv.length; _i++) {
	      if ($(alldiv[_i]).text().indexOf(inQuiry) == -1) {
	        $(alldiv[_i]).parent().hide();
	      }
	    }
	  });
	  //show/hide todo list feature
	  $('.todoContent').on('click', 'button', function (event) {
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
	  $('.todo').on('click', 'li', function (event) {
	    $('input', undefined).prop('checked', true);
	    $('i').remove();
	    $('.complete').prepend($(undefined));
	  });
	  //undo complete feature
	  $('.complete').on('click', 'li', function (event) {
	    $('input', undefined).prop('checked', false);
	    $('i').remove();
	    $('.todo').prepend($(undefined));
	  });
	  //clear feature
	  $('#clear').click(function () {
	    $('.todo > li').remove();
	    $('.complete > li').remove();
	    $('.showhide').remove();
	    shopList.myList = [];
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports.favsshow = 1;
	module.exports.favs = [];
	module.exports.myList = [];
	//remove item feature
	module.exports.deleteme = function (ul) {
	  $(ul).on('mouseenter', 'li', function () {
	    $(undefined).find('.remove').append('<i class="fa fa-times" aria-hidden="true"></i>');
	    $('.remove').css('color', 'red');
	    $('i').click(function () {
	      module.exports.myList.pop($(undefined).parent().parent().text());
	      $(undefined).parent().parent().remove();
	      console.log(module.exports.myList);
	    });
	  }).on('mouseleave', 'li', function () {
	    $('.remove').children().remove();
	  });
	};
	
	module.exports.showhidebutton = function () {
	  if ($('.showhide').length === 0 && $('.todo').children().length > 0) {
	    $('.todoContent').prepend('<button class="showhide">Hide list</button>');
	  }
	};
	
	//
	module.exports.addTomyList = function (target) {
	  module.exports.myList.push(target);
	};
	
	//localStorage item and item count
	module.exports.countOfItems = function (target) {
	  var count = localStorage[target];
	  if (!count) {
	    count = 1;
	  } else {
	    count++;
	  }
	  localStorage[target] = count;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=shopping-list-app.1.0.0.js.map