var sweet = require('./sweet');
var inherit = require('../inherit');

inherit.inherit(Lollipop, sweet.Sweet);

function Lollipop(taste, sweetName, cost, weight){
	this.taste = taste || "without taste";
	this.sweetName = sweetName || "Lollipop";
	this.cost = cost || 1.8;
	this.weight = weight || 23;
}

exports.Lollipop = Lollipop;