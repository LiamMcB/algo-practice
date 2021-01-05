/* Review problems for graphs */
class Node {
  constructor(value) {
    this.value = value;
    this.adjList = [];
  }
}
// const root = new Node('A');
// const bNode = new Node('B');
// const cNode = new Node('C');
// const dNode = new Node('D');
// const eNode = new Node('E');
// root.adjList.push(bNode);
// root.adjList.push(cNode);
// bNode.adjList.push(dNode);
// cNode.adjList.push(dNode);
// dNode.adjList.push(eNode);
// console.log(root); // A -> B, C -> D -> E 

/* Find Path: Given two node, see if there is a bath between nodes with those values */
const findPathDFS = function(root, target) {
  // Base case if the root's adj list is empty, return false
  if (!root.adjList.length) return false;
  // Iterate over the root's adj list
  for (let i = 0; i < root.adjList.length; i += 1) {
    if (root.adjList[i] === target) return true;
    if (findPathDFS(root.adjList[i], target)) return true;
  }
  // If we haven't found a path yet, return false
  return false;
}
// Breadth first search version
const findPathBFS = function(root, target) {
  // Initialize var to hold adj list
  const adjList = root.adjList;
  // Initialize queue with all nodes in adjlist
  let queue = [...adjList];
  // While the queue is not empty
  while (queue[0]) {
    // Get the first element of the queue and shift it off
    const first = queue.shift();
    // Check if first element is the target
    if (first === target) return true;
    // Else push its adj list to the end of the queue
    queue = queue.concat([...first.adjList]);
  }
  // If we didnt find the target, return false
  return false;
}

// Tests:
// console.log(findPathBFS(root, eNode));

/* Shortest Path: Find the path with the smallest sum between two nodes in a graph and return that sum, if it exists 
(I made this up, all nodes are positive) */
const shortestPath = function(root, target) {
  // Initialize minimum sum to inf
  let minSum = 0;
  // Initialize current sum to 0
  let currentSum = 0;
  // If the root's adjacency list is empty, return 0
  if (!root.adjList.length) return minSum;
  // If it's adjancency list is empty and it is not equal to the target, return undefined
  if (!root.adjList.length && root.value !== target) return -Infinity;
  // Iterate over the root's adj list
  for (let i = 0; i < root.adjList.length; i += 1) {
    const currentNode = root.adjList[i];
    // If the current node is the target, set minSum equal to the min of it and currentSum
    if (currentNode === target) minSum = Math.min(minSum, currentSum + currentNode.value);
    // Else find the minimum sum from the current node
    else minSum = Math.min(minSum, currentSum + shortestPath(currentNode, target));
  }
  // Return the minimum sum, if we dont find a path, keep it at 0
  return minSum;
}

// Tests:
const root = new Node(2);
const second = new Node(6);
const third = new Node(2);
const fourth = new Node(4);
const fifth = new Node(1);
root.adjList.push(second);
root.adjList.push(third);
second.adjList.push(fourth);
third.adjList.push(fourth);
fourth.adjList.push(fifth);
console.log(shortestPath(root, fifth));