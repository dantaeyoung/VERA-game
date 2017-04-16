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



  });

};



