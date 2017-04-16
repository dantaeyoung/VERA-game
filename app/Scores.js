var Scores = {};

Scores.updateState = function(state) {
  console.log(state.stepScores);
  _.each(state.stepScores, function(v, k) {
    v = Helpers.calcScore(v);
    $("#" + k).html(v);
  });


}

Scores.docReady = function() {


}

Scores.dataReady = function() {
  console.log(globalModel.state);

	var firstKey = Object.keys(globalModel.data.cards.impacts)[0]
	var scoreNames = Object.keys(globalModel.data.cards.impacts[firstKey]);
  scoreNames.forEach(function(name) {
    name = Helpers.nameToId(name);
    $("<div id=" + name + "-wrapper class=score-wrapper>Score " + name + ": <div id=" + name + " class=score>0</div></div>").appendTo("#scores");
  });
};
