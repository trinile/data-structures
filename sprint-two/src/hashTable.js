

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //{get, set, each methods}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //index in storage array
  //index where key-value pair belongs to 
  //add that key-value pair to a bucket array IN that storage array
  //key-value pair is added at tuple index 0: key, index 1: value
  this._storage.set(index, v); //storage[index] = value
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


