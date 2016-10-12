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
}

exports.GiftBox = GiftBox;