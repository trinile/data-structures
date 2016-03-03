var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.dequeue = function() {
    items--;
    var first = storage[0];

    for (var key in storage) {
      var nextIndex = Number(key) + 1;
      var temp = storage[nextIndex];
      storage[key] = temp;
    }
    delete storage[items];
    return first;
  };

  someInstance.size = function() {
    items = items < 0 ? 0 : items;
    return items;
  };

  return someInstance;
};
