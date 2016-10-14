var prompt = require('prompt');


var cookie_constr = require('./candies/cookie');
var lollipop_constr = require('./candies/lollipop');
var marshmellow_constr = require('./candies/marshmellow');

var giftbox_constr = require('./gift');
 
var giftBox = new giftbox_constr.GiftBox();

var lollipopWithCherry = new lollipop_constr.Lollipop("Cherry");
var cookieWithDarkChoclate = new cookie_constr.Cookie("Dark choclate", 15); 
var cookieDoubleOreo = new cookie_constr.Cookie();
var marshmellow = new marshmellow_constr.Marshmellow();

prompt.start();

prompt.get(['lollipopWithCherryCount', 'cookieWithDarkChoclateCount', 'cookieDoubleOreoCount', 'marshmellowCount'], function (err, result) {

	for(var i = 0; i < result.lollipopWithCherryCount; i++){
		giftBox.addGift(lollipopWithCherry);
	}

	
	for(var i = 0; i < result.cookieWithDarkChoclateCount; i++){
		giftBox.addGift(cookieWithDarkChoclate);
	}

	for(var i = 0; i < result.cookieDoubleOreoCount; i++){
		giftBox.addGift(cookieDoubleOreo);
	}

	for(var i = 0; i < result.marshmellowCount; i++){
		giftBox.addGift(marshmellow);
	}

	console.log('The giftbox consist of:');
    console.log(lollipopWithCherry.sweetName + ' with ' + lollipopWithCherry.taste + ' : ' + result.lollipopWithCherryCount);
    console.log(cookieWithDarkChoclate.sweetName + ' with ' + cookieWithDarkChoclate.filling +' : ' + result.cookieWithDarkChoclateCount);
    console.log(cookieDoubleOreo.sweetName + ' with ' + cookieDoubleOreo.filling +' : ' + result.cookieDoubleOreoCount);
    console.log(marshmellow.sweetName + ' with ' + marshmellow.filling +' : ' + result.marshmellowCount);

    console.log("Total weight: " + giftBox.totalWeight());

    console.log("Sorted sweets in the giftBox by cost: ");
    giftBox.sortByCost();


    console.log("Cookies with filling: ");
    giftBox.showGifts(giftBox.filterCookies());

});