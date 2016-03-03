var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.items = this.items < 0 ? 0 : this.items;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

Queue.prototype.dequeue = function() {
  this.items--;
  var first = this.storage[0];
  for (var key in this.storage) {
    var nextKey = Number(key) + 1;
    this.storage[key] = this.storage[nextKey];
  }
  delete this.storage[this.items];
  return first;
};

var queue = new Queue();

