var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children = this.children === null ? [] : this.children;
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      //if children node value matches target, exit function and return true
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  //base case: compare current node to target
  return target === this.value;
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1) - constant time complexity;
 contains: O(n) - linear time complexity. Has to search through the tree.
 */
