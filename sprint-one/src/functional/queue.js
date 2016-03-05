var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _items = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    _storage[_items] = value;
    _items++;
  };

  someInstance.dequeue = function() {
    _items--;
    var first = _storage[0];

    for (var key in _storage) {
      var nextIndex = Number(key) + 1;
      var temp = _storage[nextIndex];
      _storage[key] = temp;
    }
    delete _storage[_items];
    return first;
  };

  someInstance.size = function() {
    _items = _items < 0 ? 0 : _items;
    return _items;
  };

  return someInstance;
};
