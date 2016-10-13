var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Marshmellow, sweet.Sweet);

function Marshmellow(sweetName, weight, cost){
	this.sweetName = sweetName || "Marshmellow";
	this.weight = weight || 10;
	this.cost = 1;
}

exports.Marshmellow = Marshmellow;