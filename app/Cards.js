var Cards = {};

Cards.docReady = function() {
};

Cards.updateState = function(state) {
  $(".card").removeClass("cardPlayed");
  _.each(state.cardsPlayed, function(v, k) {
    $("#" + k).addClass("cardPlayed");
  });
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

//	carddata.descriptions = _.shuffle(carddata.descriptions);
  _.each(carddata.descriptions, function(v, k) {

    var thisCost = globalModel.data.cards.descriptions[k].COST.replace(/ /g, "");

    var thisCard = $("<div id=" + k + " class=card>\
      <span class='cost'>" + thisCost + "</span>\
      <span class='title'>" + v['REFORM TITLE'] + "</span>\
      <span class='short_description'>" + v['SHORT DESCRIPTION'] + "</span>\
      </div>");
    thisCard.appendTo("#cards");

		var imgName = Cards.cardToHighlight(k).replace("H-", "KEY-") + ".png";
		var thisLongD = $("<div id='" + k + "_LD' class='card_long_description'>\
      <img class='keyimg' src='assets/KeyIcons/" + imgName + "' />\
      <span class='words'>" + v['LONG DESCRIPTION'] + "</span>\
      </div>");
    thisLongD.appendTo("#card_long_descriptions");



    // bind clicks
    thisCard.click(function(e) {
      console.log("clicked " + e.currentTarget.id + "!");
      globalModel.playCard(e.currentTarget.id);
    });
    
    // bind events

    thisCard.hover(function(e) {
      console.log("Highlight In " + Cards.cardToHighlight(e.currentTarget.id));
      Pipeline.highlightHoverIn(Cards.cardToHighlight(e.currentTarget.id));
			$("#" + e.currentTarget.id + "_LD").addClass("hovering");
    }, function(e) {
      console.log("Highlight Out " + Cards.cardToHighlight(e.currentTarget.id));
      Pipeline.highlightHoverOut(Cards.cardToHighlight(e.currentTarget.id));
			$("#" + e.currentTarget.id + "_LD").removeClass("hovering");
    });

    $(document).mousemove(function(e){
			$('.hovering').css({'top': e.pageY+ 20, 'left': e.pageX - 450});
    });

		$(".card").shuffle();

  });

};


