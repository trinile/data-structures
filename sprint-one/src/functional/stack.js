var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    items--;
    var lastItem = storage[items];
    delete storage[items];
    return lastItem;
  };

  someInstance.size = function() {
    if (items < 0 ) {
      return items = 0;
    }
    return items;
  };

  return someInstance;
};
