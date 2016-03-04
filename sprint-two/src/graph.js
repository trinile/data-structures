

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = null;
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.nodes === null) {
    this.nodes = {};
  }
  this.nodes[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] === node;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edge = fromNode < toNode ? JSON.stringify(arguments[0], arguments[1]) : JSON.stringify(arguments[1], arguments[0]);
  return !!(this.edges[edge]);
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(this.nodes.fromNode) && this.contains(this.nodes.toNode)) {
    var edge = fromNode < toNode ? JSON.stringify(arguments[0], arguments[1]) : JSON.stringify(arguments[1], arguments[0]);
    this.edges[edge] = true;
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) { 
  var edge = fromNode < toNode ? JSON.stringify(arguments[0], arguments[1]) : JSON.stringify(arguments[1], arguments[0]);
  delete this.edges[edge];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node in this.nodes) {
    cb(this.nodes[node]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: constant time complexity,
 contains: constant time complexity,
 removeNode: constant
 hasEdge : constant
 addEdge : constant
 removeEdge: constant
 forEachNode : linear time complexity O(n)
 */


