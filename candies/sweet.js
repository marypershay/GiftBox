function Sweet(){}

Sweet.prototype.sweetName = "no name";
Sweet.prototype.cost = 0;
Sweet.prototype.weight = 0;


Sweet.prototype.getWeight = function(){
 	return this.weight;
};

Sweet.prototype.getCost = function(){
 	return this.cost;
};

exports.Sweet = Sweet;