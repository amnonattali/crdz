// Card class 

var Card = function(suit, value){

    var that = Object.create(Card.prototype);
    var suits = ["clubs", "diamonds", "hearts", "spades"];
    var values = ["ace", "2", "3", "4", "5", "6", "7",
                  "8", "9", "10", "jack", "queen", "king"];
    var img = values[value + 1] + "_of_" + suits[suit]

    that.getSuit  = function(){ return suit;  }
    that.getValue = function(){ return value; }
    that.getImg   = function(){ return img;   }
    that.getIndex = function() {
      return (suit * 13 + value);
    }

}
