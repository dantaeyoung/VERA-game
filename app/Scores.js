var Scores = {};

Scores.updateState = function(state) {
  console.log(state.stepScores);
  _.each(state.stepScores, function(v, k) {
    if(!(k.match(/^_/))) {
      v = Helpers.calcScore(v, k);
      console.log('display_' + k);
      Scores['display_' + k].update(v);
      Pipeline.flashScore(k);
    }
  });
  Scores.displayBudget.update(state.budget);
  Pipeline.flashScore("budget");

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

  Scores.displayBudget = new CountUp("budget", 0.00, 0);
  Scores.display_average_daily_population = new CountUp("average_daily_population", 0.00, 0);
  Scores.display_average_los = new CountUp("average_los", 0.00, 0);
  Scores.display_yearly_admissions = new CountUp("yearly_admissions", 0.00, 0);


  Scores.displayBudget.update(globalModel.state.budget);
  Scores.display_average_daily_population.update(globalModel.state.initialScores.average_daily_population);
  Scores.display_average_los.update(globalModel.state.initialScores.average_los);
  Scores.display_yearly_admissions.update(globalModel.state.initialScores.yearly_admissions);

};
