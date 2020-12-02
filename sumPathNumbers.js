/* GTCI Binary Tree DFS 3: Given the root of a binary tree of digits, return the sum of all path numbers 
(strings representing the digits along each path) */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time O(n) space to hold recursion stack
const sumPathNumbers = function(root) {
  // Base case if no binary tree
  if (!root) return -1;
  // Initialize total sum to 0
  let totalSum = 0;
  // Helper function to add paths to sum
  const addPaths = function(currentNode, pathNumber) {
    // Add stringified current value to path number
    pathNumber += currentNode.value.toString();
    // Base case if the current node is a leaf node
    if (!currentNode.left && !currentNode.right) {
      totalSum += Number(pathNumber);
      return;
    }
    // Invoke helper on left and right nodes if they exist
    if (currentNode.left) addPaths(currentNode.left, pathNumber);
    if (currentNode.right) addPaths(currentNode.right, pathNumber);
  }
  // Invoke helper function to add sums 
  addPaths(root, '');
  // return the total sum
  return totalSum;
}

// Tests:
const btree = new TreeNode(1);
btree.left = new TreeNode(7);
btree.right = new TreeNode(9);
btree.right.left = new TreeNode(2);
btree.right.right = new TreeNode(9);
console.log(btree);
console.log(sumPathNumbers(btree));