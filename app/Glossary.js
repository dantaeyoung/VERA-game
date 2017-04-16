var Glossary = {};

Glossary.docReady = function() {
};

Glossary.updateState = function(state) {
};

Glossary.dataReady = function() {
	Glossary.makeHtmlGlossary(globalModel.data.glossary);
};


Glossary.makeHtmlGlossary = function(glossarydata) {
  _.each(glossarydata, function(v, k) {

  console.log("this hsould be a card");
    console.log(v);

    var thisGloss = $("<div id='G-" + k + "' class='glossary'>\
      <div class='term'>" + v['Word'] + ":</div>\
      <div class='def'>" + v['Definition'] + "</div>\
      <div class='stat'>(" + v['Mini Stat'] + ")</div>\
      </div>");
    thisGloss.appendTo("#glossaries");


    //// bind events

    //thisCard.hover(function(e) {
      //console.log("Highlight In " + Glossary.cardToHighlight(e.currentTarget.id));
      //Pipeline.highlightHoverIn(Glossary.cardToHighlight(e.currentTarget.id));
			//$("#" + e.currentTarget.id + "_LD").addClass("hovering");
    //}, function(e) {
      //console.log("Highlight Out " + Glossary.cardToHighlight(e.currentTarget.id));
      //Pipeline.highlightHoverOut(Glossary.cardToHighlight(e.currentTarget.id));
			//$("#" + e.currentTarget.id + "_LD").removeClass("hovering");
    //});

    //$(document).mousemove(function(e){
			//$('.hovering').css({'top': e.pageY+ 0, 'left': e.pageX + 10});
    //});


  });

};



