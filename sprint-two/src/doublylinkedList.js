var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var oldTail = list.tail;
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
      list.tail.prev = oldTail;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    list.head = list.head.next;
    return head.value;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  list.addToHead = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var oldHead = list.head;
      list.head = new Node(value);
      list.head.next = oldHead;
      oldHead.prev = list.head;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    list.tail = list.tail.prev;
    list.tail.next = null;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 list.addToTail : constant time complexity.
 list.removeHead : constant time complexity. 
 list.contains : linear time complexity. Looping through entire linked list to determine if target exists.

 */
