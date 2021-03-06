

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //{get, set, each methods}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); //index in storage array
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  var bucket = this._storage.get(index);

  var keyExists = false;

  if (bucket.length === 0) {
    this._storage.get(index).push([k, v]);
  } else if (bucket.length) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket[i] = [k, v];
        keyExists = true;
        break;
      }
    }
    if (!keyExists) {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || []; 
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(tuple, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: constant
 remove: constant
 */


