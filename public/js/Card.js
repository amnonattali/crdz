


var Card = function(suit, value, img){
    
    var that = Object.create(Card.prototype);
    //var owner = 
    
    
    that.getSuit  = function(){ return suit;  }
    that.getValue = function(){ return value; }
    that.getImg   = function(){ return img;   }
    
    
    /*that.move = function(newOwner){
        owner = newOwner;
    }*/
}