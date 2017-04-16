var Model = function(data) {
  this.data = data;
  // constructor
  this.state = {};
  this.state.cardsPlayed = {};
  this.state.stepScores = {};
  this.state.budget = 1000000;
  this.state.initialScores = {
    'average_daily_population': 500,
    'average_los': 95,
    'yearly_admissions': 4000
  }
}


Model.prototype.playCard = function(cardId) {
  // TODO: if we don't have enough money, don't let this thing below happen
	console.log("PLAYED CARD: " + cardId);
  console.log(this.data.cards.descriptions[cardId]);
  console.log(this.data.cards.descriptions[cardId].COST);
  var cardCost = parseInt(this.data.cards.descriptions[cardId].COST.replace(/\$|,| /g, ""), 10);
  console.log('cost is here =>', cardCost)
  if (cardCost <= this.state.budget) {
    if (!this.state.cardsPlayed[cardId]) {
      this.state.cardsPlayed[cardId] = true;  // we use boolean just because it lets us use an object as a set
      this.state.budget -= cardCost;
      this.updateScoreState();
      Cards.updateState(this.state);
      Scores.updateState(this.state);
      Pipeline.updateState(this.state);
    }
  } else {
    console.log('ERROR: You cannot afford that measure');
  }
}

Model.prototype.updateScoreState = function() {
  var self = this;
  self.state.stepScores = {}; // scores are totally deterministic, so recalc from the start

  // for all the cards we have played..
  _.each(self.state.cardsPlayed, function(ignoreMe, cardName) {

    _.each(self.data.cards.impacts[cardName], function(stepVal, stepName) {
      stepName = Helpers.nameToId(stepName);
			if(!stepName.match(/name/)) { // skip over column if we have the name. this is annoyingly manual but due to our data constraints
				if(!(stepName in self.state.stepScores)) { self.state.stepScores[stepName] = []; }
				self.state.stepScores[stepName].push(stepVal);
			}
    });
  });
}
