// Deck class

var Deck = function() {
  that = Object.create(Deck.prototype)

  var deck = new Array(52).fill(1);
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
}
