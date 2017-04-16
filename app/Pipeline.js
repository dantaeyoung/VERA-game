Pipeline = {};

Pipeline.linkWidthMin = 3.0;
Pipeline.linkColor = "#AAA";
 


Pipeline.makeHtmlSteps = function(stepdata) {
  stepdata.forEach(function(e) {
    var thisStep = $("<div id=" + e.id + " class=step>" + e.title + "</div>");
    thisStep.appendTo("#modeldiv");
    thisStep.css({top: _.random(0,250), left: _.random(0,800)});
  });
}

Pipeline.docReady = function() {

  Snap.load("assets/pipeline-diagram.svg", onSVGLoaded ) ;

  function onSVGLoaded( data ){ 
    var s = Snap("#svg");
    s.append( data );

    Snap.animate(0,6, function( value ) {
          s.attr({ 'stroke-width': value});
    }, 1000);

  }

};

