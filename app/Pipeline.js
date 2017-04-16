var Pipeline = {};

Pipeline.linkWidthMin = 3.0;
Pipeline.linkColor = "#AAA";
Pipeline.defaultOpacity = 0.05;

Pipeline.loopFlow = function() {
    var lines = Snap.selectAll("#PeopleFlow line")
		lines.attr({ 'stroke-dasharray': '6,6'});
    Snap.animate(60, 0, function( value ) {
		    lines.attr({ 'stroke-dashoffset': value});
    }, 2000, function() {
      Pipeline.loopFlow(); // recursion... this goes forever
    });
}
 
Pipeline.docReady = function() {

  Snap.load("assets/pipeline-diagram.svg", onSVGLoaded ) ;

  function onSVGLoaded( data ){ 
    var s = Snap("#svg");
    s.append( data );
    
    var highs = Snap.selectAll("#Highlights > g");
    highs.attr({
      opacity: Pipeline.defaultOpacity
    });

    Snap.animate(0,6, function( value ) {
          s.attr({ 'stroke-width': value});
    }, 1000);

    Pipeline.loopFlow();

    /*
    // grayscale something
    console.log(Snap.selectAll("image"));
    Snap("image").filter(Snap.filter.grayscale(0.5));
    Snap.selectAll("image").attr({
       filter: Snap.filter.grayscale(0.5) 
     });
    */


    // MOUSEOVER BIND
    $("#Buttons > rect").each(function(i, e) {

      Snap("#" + e.id).mouseover(function (el) {
        Pipeline.highlightHoverIn(e.id.replace(/B-/, "H-"));
        console.log("HOVERING OVER " + e.id.replace(/B-/, "H-"));
        var glossaryid =  e.id.replace(/B-/, "G-");
				$("#" + glossaryid).addClass("hovering");
      });

      Snap("#" + e.id).mouseout(function (el) {
        Pipeline.highlightHoverOut(e.id.replace(/B-/, "H-"));
        console.log("HOVERING OUT " + e.id.replace(/B-/, "H-"));
        var glossaryid =  e.id.replace(/B-/, "G-");
				$("#" + glossaryid).removeClass("hovering");
      });

    });

    Snap("#B-AVERAGE-DAILY-POPULATION").mouseover( function(e){
      console.log(e);
    });

    $("#B-YEARLY-ADMISSIONS").hover(function(e) {
      console.log(e.target);
    }, function(e) {
    });

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
    //Snap.animate(1, Pipeline.defaultOpacity , function( val ) {
          //s.attr({ 'opacity': val});
    //}, 500)
  })
};

Pipeline.highlightHoverOut = function(highlight) {
  var s = Pipeline.trySnap("#" + highlight);
  if(!s) return; // if snap couldn't find anything, get outta here
  Snap.animate(1, Pipeline.defaultOpacity , function( val ) {
        s.attr({ 'opacity': val});
  }, 500)
};


Pipeline.dataReady = function() {
}


Pipeline.updateState = function(state) {
}

