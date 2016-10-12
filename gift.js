var gifts = [];

function GiftBox(){
	this.addGift = function (candy){
		return gifts.push(candy);
	}
}

var sum = 0;
GiftBox.prototype.totalWeight = function(){
		for(var i=0; i < gifts.length; i++){
			sum+=gifts[i].getWeight();
		}
		 return sum;
	}
GiftBox.prototype.showGiftBox = function(){
		return console.log(gifts);
	}


exports.GiftBox = GiftBox;