var Cards = {};

Cards.docReady = function() {

  $("button").click(function(e) { 
     console.log(e);
  });

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

