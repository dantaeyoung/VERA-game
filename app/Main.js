var globalData;
var globalModel;

window.globalModel = globalModel;

$(function() {

  Pipeline.docReady();
  Cards.docReady();
  Scores.docReady();
  Splash.docReady();

  $.when(
		$.getJSON("assets/card_impacts.json"),
		$.getJSON("assets/card_descriptions.json"),
		$.getJSON("assets/glossary.json")
	)
    .done(function(impacts, descriptions, glossary) {
      globalData = {};
      globalData.cards = {};
			globalData.cards.impacts = impacts[0];
			globalData.cards.descriptions = descriptions[0];
			globalData.glossary = glossary[0];

      globalModel = new Model(globalData);

      Pipeline.dataReady();
      Cards.dataReady();
			Scores.dataReady();
			Glossary.dataReady();

    });
  
});

