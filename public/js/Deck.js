// Deck class

var Deck = function(type) {
  that = Object.create(Deck.prototype)

  var deck = new Array(52).fill(0)
  if (type === "initial_deck") {
    deck.fill(1);
  }

  var num_cards = 52;
  
    
  that.removeCard = function(card) {
    deck[card.getIndex] = 0;
    num_cards--;
  }

  that.addCard = function(card) {
    deck[card.getIndex] = 1;
    num_cards++;
  }

  that.getNumCards = function() {
    return num_cards;
  }
  
  that.getNth = function(n){
      var counter = 0;
      deck.forEach(function(element, index) {
          if(element === 1) 
              counter++;
          if(counter === n)
              return index;
      }
  }
}
