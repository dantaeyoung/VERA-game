var Helpers = {};

Helpers.trim = function(s) {
  return ( s || '' ).replace( /^\s+|\s+$/g, '' );
};

Helpers.nameToId = function(name) {
  return Helpers.trim(name).toLowerCase().replace(/ /g, "_");
};

Helpers.calcScore = function(array) {
  var score = 0;
  var highestIdx = null;
  for (var i = 0; i < array.length; i++) {
    if (highestIdx === null) {
      highestIdx = i;
    } else {
      var currentHighest = +array[highestIdx].slice(0, -1);
      var otherNum = +array[i].slice(-1);
      if (currentHighest < otherNum) {
        highestIdx = i;
      }
    }
  }
  for (var j = 0; j < array.length; j++) {
    if (j === highestIdx) {
      score += +array[j].slice(0, -1);
    } else {
      score += (+array[j].slice(0, -1)) / 2;
    }
  }
  return score;
};
