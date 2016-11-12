


var Card = function(suit, value, img){

    var that = Object.create(Card.prototype);

    that.getSuit  = function(){ return suit;  }
    that.getValue = function(){ return value; }
    that.getImg   = function(){ return img;   }
    that.getIndex = function() {
      return (suit * 13 + value);
    }

}
