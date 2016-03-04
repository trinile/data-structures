

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //{get, set, each methods}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //index in storage array
  //index where key-value pair belongs to 
  //add that key-value pair to a bucket array IN that storage array
  //key-value pair is added at tuple index 0: key, index 1: value
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  this._storage.get(index).push([k, v]);
  console.log(this._storage.get(index));
    

    var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] !== k) {
      this._storage.get(index).push([k, v]);
    } 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // return this._storage.get(index);
  bucketIndex = index[0];
  return this._storage.get(bucketIndex);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


