var Scores = {};

Scores.updateState = function(state) {
  console.log(state.stepScores);
  _.each(state.stepScores, function(v, k) {
    $("#" + k).html(v);
  });


}

Scores.docReady = function() {


}

Scores.dataReady = function() {
  console.log(globalModel.state)

	var firstKey = Object.keys(globalModel.data.influenceMatrix)[0]
	var influenceCols = Object.keys(globalModel.data.influenceMatrix[firstKey]);
  var scoreNames = influenceCols.filter(function(val) {
    return val.match(/score-/);
  });
  scoreNames.forEach(function(name) { 
    $("<div id=" + name + "-wrapper class=score-wrapper>Score " + name + ": <div id=" + name + " class=score>0</div></div>").appendTo("#scores");
  });
};
