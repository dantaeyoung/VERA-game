var Pipeline = {};

Pipeline.linkWidthMin = 3.0;
Pipeline.linkColor = "#AAA";
Pipeline.defaultOpacity = 0.05;
 
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
    
    var highs = Snap.selectAll("#Highlights g");
    highs.attr({
      opacity: Pipeline.defaultOpacity
    });


    Snap.animate(0,6, function( value ) {
          s.attr({ 'stroke-width': value});
    }, 1000);
    Snap.animate(0,6, function( value ) {
		    s.attr({ 'stroke-dasharray': '1,' + value});
    }, 5000);

  }

};

Pipeline.highlightAnimate = function(highlight) {
  var s = Snap("#" + highlight);
  Snap.animate(1,0, function( value ) {
        s.attr({ 'opacity': value});
  }, 1000, function() {
    Snap.animate(0,1, function(v) {
      s.attr({ 'opacity': v });
    }, 1000);
  });

};

Pipeline.trySnap = function(selector) {
  try {
    var s = Snap(selector);
    return s;
  } catch(err) {
    return null;
  }
}

Pipeline.highlightHoverIn = function(highlight) {
  var s = Pipeline.trySnap("#" + highlight);
  if(!s) return; // if snap couldn't find anything, get outta here
  Snap.animate(Pipeline.defaultOpacity, 1, function( val ) {
        s.attr({ 'opacity': val});
  }, 300, function() {
    Snap.animate(1, Pipeline.defaultOpacity , function( val ) {
          s.attr({ 'opacity': val});
    }, 2000)
  })
};

Pipeline.highlightHoverOut = function(highlight) {
  var s = Pipeline.trySnap("#" + highlight);
  if(!s) return; // if snap couldn't find anything, get outta here
};


Pipeline.dataReady = function() {
}


Pipeline.updateState = function(state) {
}

