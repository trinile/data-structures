var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(stackMethods);
  newInstance.items = 0;
  newInstance.storage = {};
  return newInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.items = this.items < 0 ? 0 : this.items;
};

stackMethods.push = function(value) {
  this.storage[this.items] = value;
  this.items++;
};

stackMethods.pop = function() {
  this.items--;
  var last = this.storage[this.items];
  delete this.storage[this.items];
  return last;
};
