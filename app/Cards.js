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
  _.each(carddata.descriptions, function(v, k) {
    var thisCard = $("<div id=" + k + " class=card>" + v['REFORM TITLE'] + "</div>");
    thisCard.appendTo("#cards");

    thisCard.click(function(e) {
      console.log("clicked " + e.target.id + "!");
      globalModel.playCard(e.target.id);
    });

  });

};


