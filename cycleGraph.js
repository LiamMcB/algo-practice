/* Given a directed, unweighted graph, determine whether there is a cycle in it */
class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    // Add vertex if it doesn't already exist
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(n1, n2) {
    // If node 1 exists, add node 2 to its adj list
    if (this.adjList[n1]) this.adjList[n1].push(n2);
  }
}

const hasCycle = function(graph) {
  // Declare an object to hold nodes that were visited
  let visited = {};
  // Helper function to cycle through nodes
  const innerCycle = function(node) {
    // If the current node was already visited, return true
    if (visited[node]) return true;
    // Mark the node as visited
    visited[node] = true;
    // Iterate over nodes in this nodes adj list
    const adjList = graph.adjList[node];
    for (let i = 0; i < adjList.length; i += 1) {
      if (innerCycle(adjList[i])) return true;
    }
  }
  // Iterate over nodes in the graph
  for (let node in graph.adjList) {
    let cycleExists; 
    if (graph.adjList[node].length) cycleExists = innerCycle(node);
    visited = {};
    if (cycleExists) return true;
  }
  // If no cycle was found, return false
  return false;
}

// Tests:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('C', 'D');
graph.addEdge('B', 'E');
console.log(graph);
console.log(hasCycle(graph));