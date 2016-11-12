// Player class

var Player = function(name, score) {

  var that = Object.create(Player.prototype);
  var name = name;
  var score = score;
  var hand = new Array(52).fill(0);

  that.getName = function() {
    return name;
  }

  that.getScore = function() {
    return score;
  }

  // change score method

  that.addCard = function(card) {
    hand[card.getIndex()] = 1;
  }

  that.removeCard = function(card) {
    hand[card.getIndex()] = 0;
  }
  
  Object.freeze(that);
  return that;
}
