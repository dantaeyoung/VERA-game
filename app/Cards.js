var Cards = {};

Cards.docReady = function() {
};

Cards.updateState = function(state) {
  console.log(state.cardsPlayed);
};

Cards.dataReady = function() {
	Cards.makeHtmlCards(globalModel.data.cards);
};

Cards.cardToHighlight = function(cardId) {
    return globalModel.data.cards.impacts[cardId]['_Highlight'];
}

Cards.makeHtmlCards = function(carddata) {
  _.each(carddata.descriptions, function(v, k) {
    var thisCard = $("<div id=" + k + " class=card>" + v['REFORM TITLE'] + "</div>");
    thisCard.appendTo("#cards");

    // bind clicks
    thisCard.click(function(e) {
      console.log("clicked " + e.target.id + "!");
      globalModel.playCard(e.target.id);
    });
    
    // bind events

    thisCard.hover(function(e) {
      console.log("Highlight In " + Cards.cardToHighlight(e.target.id));
      Pipeline.highlightHoverIn(Cards.cardToHighlight(e.target.id));
    }, function(e) {
      console.log("Highlight Out " + Cards.cardToHighlight(e.target.id));
      Pipeline.highlightHoverOut(Cards.cardToHighlight(e.target.id));
    });

  });

};


