var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Marshmellow, sweet.Sweet);

function Marshmellow(){
	Marshmellow.uber.constructor.apply(this, ["Marshmellow", 1.9, 23]);
}




exports.Marshmellow = Marshmellow;