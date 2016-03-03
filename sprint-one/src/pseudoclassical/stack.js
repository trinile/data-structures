var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.items = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.items = this.items < 0 ? 0 : this.items;
};

Stack.prototype.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

Stack.prototype.pop = function() {
  this.items--;
  var last = this.storage[this.items];
  delete this.storage[this.items];
  return last;
};

var stack = new Stack();


