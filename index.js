var prompt = require('prompt');


var cookie_constr = require('./candies/cookie');
var lollipop_constr = require('./candies/lollipop');
var marshmellow_constr = require('./candies/marshmellow');

var giftbox_constr = require('./gift');
 
var giftBox = new giftbox_constr.GiftBox();

 
prompt.start();


prompt.get(['lollipopCount', 'marshmellowCount', 'cookieCount'], function (err, result) {

	for(var i = 0; i < result.lollipopCount; i++){
		giftBox.addGift(new lollipop_constr.Lollipop());
	}

	for(var i = 0; i < result.marshmellowCount; i++){
		giftBox.addGift(new marshmellow_constr.Marshmellow());
	}
	for(var i = 0; i < result.cookieCount; i++){
		giftBox.addGift(new cookie_constr.Cookie());
	}

	console.log('The giftbox consist of:');
    console.log('lollipops: ' + result.lollipopCount);
    console.log('marshmellows: ' + result.marshmellowCount);
    console.log('cookies: ' + result.cookieCount);

    console.log("Total weight: " + giftBox.totalWeight());

});