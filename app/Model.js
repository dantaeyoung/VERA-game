var Model = function(data) {
  this.data = data;
  // constructor
  this.state = {};
  this.state.cardsPlayed = {};
  this.state.stepScores = {};
}


Model.prototype.playCard = function(cardId) {
  // TODO: if we don't have enough money, don't let this thing below happen
	console.log("PLAYED CARD: " + cardId);
  this.state.cardsPlayed[cardId] = true;  // we use boolean just because it lets us use an object as a set
  this.updateScoreState();
  Cards.updateState(this.state);
  Scores.updateState(this.state);
  Pipeline.updateState(this.state);
}

Model.prototype.updateScoreState = function() {
  var self = this;
  self.state.stepScores = {}; // scores are totally deterministic, so recalc from the start

  // for all the cards we have played..
  _.each(self.state.cardsPlayed, function(ignoreMe, cardName) {
   
    _.each(self.data.cards.impacts[cardName], function(stepVal, stepName) {
			if(!stepName.match(/name/)) { // skip over column if we have the name. this is annoyingly manual but due to our data constraints
				if(!(stepName in self.state.stepScores)) { self.state.stepScores[stepName] = 0; }

				// TODO: calculating step scores should be - highest score plus 1/2 of total of all other scores
				self.state.stepScores[stepName] += parseFloat(stepVal);

			}
    });

  });
}
