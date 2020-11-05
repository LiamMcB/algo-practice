/* 4.1 Given a directed graph, design an algo to find out whether there is a route between two nodes */

// Graph DS
class Graph {
  constructor() {
    // Array containing all nodes in this graph
    this.adjList = new Map();
  }
  // Method to add a vertex to the Graph
  addVertex(value) {
    // Add it to adjList if it doesn't exist
    if (!this.adjList.has(value)) {
      this.adjList.set(value, new Set());
    } 
  }
  // Method to add an edge - directed connection between vertices
  addEdge(vertex, target) {
    // Check if vertex and target exist
    if (this.adjList.has(vertex) && this.adjList.has(target)) {
      // Check to make sure target is not already being pointed to by vertex
      if (!this.adjList.get(vertex).has(target)) {
        // Add to the set that the vertex is pointing to
        this.adjList.get(vertex).add(target);
      }
    }
  }
  // Method to log contents of adjacency list
  printGraph() {
    for (let [key, value] of this.adjList) {
      console.log(key, ':', value);
    }
  }
}

// Function to test if there is a route between nodes
// O(n) time O(n) space with depth-first search
function routeBetweenNodes(graph, start, target) {
  if (!graph.adjList.has(start) || !graph.adjList.has(target)) return false;
  const visited = new Set();
  let current = start;
  // Inner function to act recursively
  function routeExists(graph, current, target) {
    if (graph.adjList.get(current).size === 0 || visited.has(current)) return false;
    else if (graph.adjList.get(current).has(target)) return true;
    else {
      visited.add(current);
      let existsDownStream = false;
      graph.adjList.get(current).forEach((vertex) => {
        if (routeExists(graph, vertex, target)) {
          existsDownStream = true;
          return;
        }
      });
      return existsDownStream;
    }
  }
  return routeExists(graph, current, target);
}

// Breadth first search implementation
bFS(graph, vertex, target ) {
  const visited = new Set();
  const queue = [vertex];
  let found = false;
  visited.add(vertex);
  // While the queue isnt empty
  while (queue[0]) {
    // Grab the first element in the q
    let current = queue.pop();
    // Get every node current is pointing to
    let edges = graph.adjList.get(current);
    console.log(edges)
    edges.forEach(node => {
      if (!visited.has(node)) {
        visited.add(node);
        queue.unshift(node);
        
      }
      // If the adjacency list's node has the desired vertex
      if (node === target) {
        found = true;
      }
    })
  }
  // Returns true if target found with BFS
  return found;
}


// Tests
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');
graph.addEdge('D', 'B');
console.log(graph);
console.log(routeBetweenNodes(graph, 'A', 'B'));