var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, BinarySearchMethods);
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

BinarySearchMethods = { };

BinarySearchMethods.insert = function(value) { 
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchMethods.contains = function() {

};

BinarySearchMethods.depthFirstLog = function() {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
