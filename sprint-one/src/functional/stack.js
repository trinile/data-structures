var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  var _items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    _storage[_items] = value;
    _items++;
  };

  someInstance.pop = function() {
    _items--;
    var lastItem = _storage[_items];
    delete _storage[_items];
    return lastItem;
  };

  someInstance.size = function() {
    if (_items < 0 ) {
      return _items = 0;
    }
    return _items;
  };

  return someInstance;
};
