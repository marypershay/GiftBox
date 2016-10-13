function GiftBox(){
	var gifts = [];
	this.addGift = function (candy){
		return gifts.push(candy);
	}
	
	this.showGiftBox = function(){
		return console.log(gifts);
	}
	var sum = 0;
	this.totalWeight = function(){
		for(var i=0; i < gifts.length; i++){
			sum+=gifts[i].getWeight();
		}
		 return sum;
	}

	this.sortByCost= function(){
		return console.log(gifts.sort(compareCost));
	}
}

function compareCost(candy1, candy2) {
  return candy1.cost - candy2.cost;
}

exports.GiftBox = GiftBox;