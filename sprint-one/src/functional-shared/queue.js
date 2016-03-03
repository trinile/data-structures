var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  size: function() {
    return this.items = this.items < 0 ? 0 : this.items;
  },

  enqueue: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },

  dequeue: function() {
    this.items--;
    var first = this.storage[0];
    for (var key in this.storage) {
      var nextKey = Number(key) + 1;
      this.storage[key] = this.storage[nextKey];
    }
    delete this.storage[this.items];
    return first;
  }
};

