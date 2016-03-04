var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage = this._storage || [];
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) !== -1;
};

setPrototype.remove = function(item) {
  delete this._storage[this._storage.indexOf(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: constant
 * contains: linear
 * remove: linear
 */
