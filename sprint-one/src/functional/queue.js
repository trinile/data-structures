var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    items++;
  };

  someInstance.dequeue = function() {
    items--;
  };

  someInstance.size = function() {
    items = items < 0 ? 0 : items;
    return items;
  };

  return someInstance;
};
