var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Cookie, sweet.Sweet);

function Cookie(){
	Cookie.uber.constructor.apply(this, ["Cookie", 1.2, 23]);
}


exports.Cookie = Cookie;