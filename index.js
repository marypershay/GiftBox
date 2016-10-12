var prompt = require('prompt');


var cookie_constr = require('./candies/cookie');
var lollipop_constr = require('./candies/lollipop');
var marshmellow_constr = require('./candies/marshmellow');

var giftbox_constr = require('./gift');



var lollipop = new lollipop_constr.Lollipop();

var marshmellow = new marshmellow_constr.Marshmellow();

var cookie = new cookie_constr.Cookie();


 
var giftBox = new giftbox_constr.GiftBox();
giftBox.addGift(lollipop);
giftBox.addGift(lollipop);
giftBox.addGift(lollipop);
giftBox.addGift(cookie);
giftBox.addGift(lollipop);
giftBox.addGift(marshmellow);
giftBox.showGiftBox();
console.log(giftBox.totalWeight());


 
// prompt.start();


// prompt.get(['username', 'email'], function (err, result) {
//     // 
//     // Log the results. 
//     // 
//     console.log('Command-line input received:');
//     console.log('  username: ' + result.username);
//     console.log('  email: ' + result.email);
// });