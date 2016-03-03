var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.items = 0;
  someInstance.size = stackMethods.stackSize;
  someInstance.push = stackMethods.stackPush;
  return someInstance;
};

var stackMethods = {
  stackSize: function() {
    return this.items;
  },

  stackPush: function() {
    this.items++;
  }
};


