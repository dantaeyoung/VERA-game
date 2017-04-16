var Helpers = {};

Helpers.trim = function(s) {
  return ( s || '' ).replace( /^\s+|\s+$/g, '' );
};

Helpers.nameToId = function(name) {
  return Helpers.trim(name).toLowerCase().replace(/ /g, "_");
};

Helpers.calcScore = function(array) {
  //find largest val (add it)
  //then add one half of each other val

  var score = 0;
  var highestIdx = null;
  for (var i = 0; i < array.length; i++) {
    if (score === null) {
      highestIdx = i;
    } else {
      var currentHighest = +array[highestIdx][0];
      var otherNum = +array[i][0];
      if (currentHighest < otherNum) {
        highestIdx = i;
      }
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (j === highestIdx) {
      score += +array[j][0];
    } else {
      score += (+array[j][0]) / 2;
    }
  }
  return score;
};
