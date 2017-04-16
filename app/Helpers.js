var Helpers = {};

Helpers.trim = function(s) { 
  return ( s || '' ).replace( /^\s+|\s+$/g, '' ); 
}

Helpers.nameToId = function(name) {
  return Helpers.trim(name).toLowerCase().replace(/ /g, "_");
};
