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
  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
