var globalData;
var globalModel;

window.globalModel = globalModel;

$(function() {

  Pipeline.docReady();
  Cards.docReady();
  Scores.docReady();

  $.when($.getJSON("assets/data.json"))
    .then(function(json) {
      globalData = json;

      globalModel = new Model(globalData);

      Pipeline.dataReady();
      Cards.dataReady();
			Scores.dataReady();

    });
  
});

