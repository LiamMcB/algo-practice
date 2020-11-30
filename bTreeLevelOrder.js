/* GTCI Tree BFS 1: Given the head of a binary tree, populate an array to represent its level-by-level traversal */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time, O(n) space
const traverse = function (root) {
  const result = [];
  // Base case if empty tree
  if (!root) return result;
  // Initialize queue with root
  const queue = [root];
  let depth = 0;
  let numNodes = 0;
  // Iterate while the queue isn't empty
  while (queue[0]) {
    // If the number of nodes equals a power of two, increment depth
    if (Math.pow(2, depth) === numNodes + 1) depth += 1;
    // Increment the number of nodes we've gone through
    numNodes += 1;
    const node = queue.shift();
    // IF there is no array at the depth index, create one
    if (!result[depth - 1]) result[depth - 1] = [];
    // Push the current node value to the result array at the depth index
    result[depth - 1].push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

// Alternative approach to BFS
const altTraverse = function(root) {
  const result = [];
  // Base case if empty tree
  if (!root) return result;
  // Initialize queue with root
  const queue = [root];
  // Iterate while the queue isn't empty
  while (queue[0]) {
    // Queue length changes as we shift, so need to store it as a const
    const levelSize = queue.length;
    const currentLevel = [];
    // Iterate over current queue, which is all the nodes at a certain depth
    for (let i = 0; i < levelSize; i += 1) {
      const node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}

// Tests:
const bst = new TreeNode(1);
bst.left = new TreeNode(2);
bst.right = new TreeNode(3);
bst.left.left = new TreeNode(4);
bst.left.right = new TreeNode(5);
bst.right.left = new TreeNode(6);
bst.right.right = new TreeNode(7);
console.log(bst);
console.log(altTraverse(bst));
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(traverse(root));
