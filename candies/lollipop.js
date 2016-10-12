var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Lollipop, sweet.Sweet);

function Lollipop(){
	Lollipop.uber.constructor.apply(this, ["Lollipop", 1.2, 29]);
}




exports.Lollipop = Lollipop;