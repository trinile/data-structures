var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.size = stackMethods.stackSize;
  
  return someInstance;
};

var stackMethods = {
  stackSize: function() {
    return 0;
  }
};


