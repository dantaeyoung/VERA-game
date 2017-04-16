var Cards = {};

Cards.docReady = function() {
};

Cards.updateState = function(state) {
  console.log(state.cardsPlayed);
};

Cards.dataReady = function() {
	Cards.makeHtmlCards(globalModel.data.cards);
};

Cards.makeHtmlCards = function(carddata) {
  carddata.forEach(function(e) {
    var thisCard = $("<div id=" + e.id + " class=card>" + e.title + "</div>");
    thisCard.appendTo("#cards");

    thisCard.click(function(e) {
      console.log("card lcick!");
      console.log(e.target.id);

      globalModel.playCard(e.target.id);

    });

  });

};


