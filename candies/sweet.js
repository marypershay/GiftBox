function Sweet(sweetName, cost, weight){
	this.sweetName = sweetName || "no name";
	this.cost = cost || 0;
	this.weight = weight || 0;
}

Sweet.prototype.getWeight = function(){
 	return this.weight;
};


exports.Sweet = Sweet;