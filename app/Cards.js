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
    if(cardId) {
      return globalModel.data.cards.impacts[cardId]['_Highlight'];
    }
}

Cards.makeHtmlCards = function(carddata) {
  _.each(carddata.descriptions, function(v, k) {

    var thisCost = globalModel.data.cards.descriptions[k].COST.replace(/ /g, "");

    var thisCard = $("<div id=" + k + " class=card>\
      <span class='cost'>" + thisCost + "</span>\
      <span class='title'>" + v['REFORM TITLE'] + "</span>\
      <span class='short_description'>" + v['SHORT DESCRIPTION'] + "</span>\
      </div>");
    thisCard.appendTo("#cards");

    // bind clicks
    thisCard.click(function(e) {
      console.log("clicked " + e.currentTarget.id + "!");
      globalModel.playCard(e.currentTarget.id);
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


