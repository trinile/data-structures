var LinkedList = function() {
  var list = {};
  var nodes = 0;
  // var headCounter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list[nodes] = new Node(value);
    if (nodes === 0) {
      list.head = list[nodes];
    }
    list.tail = list[nodes];
    // list.head = null;  
    nodes++;
    return list.tail.value;
  };

  list.removeHead = function() {
    var head = list.head;
    nodes--;
    for (var i = 0; i < nodes; i++) {
      var nextKey = i + 1;
      list[i] = list[nextKey];
    }
    list.head = list[0];
    delete list[nodes];
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
