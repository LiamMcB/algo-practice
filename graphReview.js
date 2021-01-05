/* Review problems for graphs */
class Node {
  constructor(value) {
    this.value = value;
    this.adjList = [];
  }
}
const root = new Node('A');
const bNode = new Node('B');
const cNode = new Node('C');
const dNode = new Node('D');
const eNode = new Node('E');
root.adjList.push(bNode);
root.adjList.push(cNode);
bNode.adjList.push(dNode);
cNode.adjList.push(dNode);
dNode.adjList.push(eNode);
console.log(root); // A -> B, C -> D -> E 

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
console.log(findPathBFS(root, eNode))