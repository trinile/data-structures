var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    items++;
  };

  someInstance.pop = function() {
    items--;
  };

  someInstance.size = function() {
    if (items < 0 ) {
      return items = 0;
    }
    return items;
  };

  return someInstance;
};
