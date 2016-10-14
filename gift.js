function GiftBox(){
	var gifts = [];
	this.addGift = function (candy){
		return gifts.push(candy);
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

	this.filterCookies = function(){
		var filteredCookies = gifts.filter(function(candy){
			return candy.filling && (candy.sweetName == "Cookie");
		});
		return filteredCookies;
	}
	
	this.showGifts = function (showingGifts){
		return console.log(showingGifts);
	}
}

function compareCost(candy1, candy2) {
  return candy1.cost - candy2.cost;
}



exports.GiftBox = GiftBox;