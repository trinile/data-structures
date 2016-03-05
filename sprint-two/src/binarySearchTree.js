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

BinarySearchMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (this.left && this.value > value) {
    return this.left.contains(value);
  } else if (this.right && value > this.value) {
    return this.right.contains(value);
  } else {
    return false;
  }
};
  // var isTrue = function(value) {
  //   if (value < this.value) {
  //     if (this.left.value === value) {
  //       return true;
  //     }
  //     if (this.left) {
  //       this.left(contains(value));
  //     }
  //   } else if (value > this.value) {
  //     if (this.right.value === value) {
  //       return true;
  //     } 
  //     if (this.right) {
  //       this.right(contains(value));
  //     }
  //   }
  // };
  
  // return isTrue(value) === true;

BinarySearchMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
