var Scores = {};

Scores.updateState = function(state) {
  console.log(state.stepScores);
  _.each(state.stepScores, function(v, k) {
    v = Helpers.calcScore(v, k);
    $("#" + k).html(v);
  });
  $("#budget").html(Helpers.commaSep(state.budget));
}

Scores.docReady = function() {

}

Scores.dataReady = function() {
  console.log(globalModel.state);
	var firstKey = Object.keys(globalModel.data.cards.impacts)[0]
	var scoreNames = Object.keys(globalModel.data.cards.impacts[firstKey]);
  scoreNames.push('budget')
  scoreNames.forEach(function(name) {
    if (name[0] !== '_') {
      name = Helpers.nameToId(name);
      $("<div id=" + name + " class=score>0</div>").appendTo("#scores");
    }
  });
  $("#budget").html(Helpers.commaSep(globalModel.state.budget));
  $("#average_daily_population").html(globalModel.state.initialScores.average_daily_population);
  $("#average_los").html(globalModel.state.initialScores.average_los);
  $("#yearly_admissions").html(globalModel.state.initialScores.yearly_admissions);

};
