var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.storage = {};  

  //add properties from stackMethods to someInstance
  for (var key in stackMethods) {
    someInstance[key] = stackMethods[key];
  }
  return someInstance;
};

var stackMethods = {
  size: function() {
    if ( this.items < 0 ) {
      this.items = 0;
    }
    return this.items;
  },

  push: function(value) {
    this.storage[this.items] = value;
    this.items++;
  },

  pop: function() {
    this.items--;
    var lastItem = this.storage[this.items];
    delete this.storage[this.items];
    return lastItem;
  }
};


