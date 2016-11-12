

var Game = function(){
    
    that = Object.create(Game.prototype);
    var deck = Deck();
    var inPlay = Played();
    var players = [];
    var cards = [];
    
    // button pressed --> push a new player
    that.addPlayer = function(player){
        //gets called every time a player hits the join button
        players.push(player);
    }
    
    that.playCard = function(player, card){
        player.removeCard(card);
        inPlay.push(card);
    }
    
    that.drawCard(player){
        var numCards = deck.getNumCards();
        var rand = (int)(Math.random() * numCards);
        
        var drawnCard = deck.removeCard();
        player.addCard(drawnCard);
    }
    
    that.createCards = function(){
         for(var i = 0; i < 4; i++){
             for(var j = 0; j < 13; j++){
                 cards[i*13 + j] = Card(i, j, IMG); // get images...
             }
         }
    }
}