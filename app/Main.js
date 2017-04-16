var globalData;
var globalModel;

window.globalModel = globalModel;

$(function() {

  Pipeline.docReady();
  Cards.docReady();
  Scores.docReady();

  $.when(
		$.getJSON("assets/data.json"),
		$.getJSON("assets/card_impacts.json"),
		$.getJSON("assets/card_descriptions.json")
	)
    .done(function(data, impacts, descriptions) {
      globalData = {};
      globalData.cards = {};
			globalData.cards.impacts = impacts[0];
			globalData.cards.descriptions = descriptions[0];

      globalModel = new Model(globalData);

      Pipeline.dataReady();
      Cards.dataReady();
			Scores.dataReady();

    });
  
});

