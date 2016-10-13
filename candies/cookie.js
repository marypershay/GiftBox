var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Cookie, sweet.Sweet);

function Cookie(filling,weight, sweetName, cost){
	this.filling = filling || "without filling";
	this.sweetName = sweetName || "Cookie";
	this.cost = cost || 1.1;
	this.weight = weight || 10;
}


exports.Cookie = Cookie;