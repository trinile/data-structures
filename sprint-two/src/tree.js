var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = null;  // fix me
  newTree.parent = null;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children = this.children === null ? [] : this.children;
  var newChild = new Tree(value);
  this.children.push(newChild);
  newChild.parent = this;
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

treeMethods.removeFromParent = function(value) {
  if (this.value === value) {
    var parent = this.parent;
    this.parent = null;
    for (var i = 0; i < parent.children.length; i++) {
      var child = parent.children[i];
      if (child.value === value) {
        parent.children.splice(i, 1);
        //set children to null if removing value leaves no children
        if (parent.children.length === 0) {
          parent.children = null;
        }
      }
    }
    //return value removed
    return this.value;
  } else if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].removeFromParent(value);
    }
  } else {
    return undefined;
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1) - constant time complexity;
 contains: O(n) - linear time complexity. Has to search through the tree.
 */
