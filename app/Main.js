var globalData;
var globalModel;

window.globalModel = globalModel;

$(function() {

  Pipeline.docReady();
  Cards.docReady();

  $.when($.getJSON("assets/data.json"))
    .then(function(json) {
      globalData = json;

      Pipeline.makeHtmlSteps(globalData.steps);
      Cards.makeHtmlCards(globalData.cards);

      globalModel = new Model(globalData);

    });
  
});

