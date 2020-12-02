/* GTCI Tree DFS 2: Given the root of a binary tree and a sum, return an array of all paths (root to leaf) that add
up to that sum */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const allPaths = function(root, sum) {
  // Array to hold all paths
  const paths = [];
  // Invoke function to add paths to the path array
  hasPath(root, sum, [], paths);
  // Return the number of paths
  return paths;
}
// Helper function to add paths
const hasPath = function(currentNode, sum, currentPath, paths) {
  // If the current node is null, exit out the function for the current path
  if (!currentNode) return;
  // Add the current node to the current path
  currentPath.push(currentNode.value);
  // If we reach a leaf that adds up to sum, push the current path to paths
  if (currentNode.value === sum && !currentNode.left && !currentNode.right) paths.push(currentPath);
  // Else add nodes to the current path and deecrease sum
  else {
    console.log(paths)
    hasPath(currentNode.left, sum - currentNode.value, currentPath, paths);
    hasPath(currentNode.right, sum - currentNode.value, currentPath, paths);
  }
  // Remove the current node from the path so it gets refreshed after each call
  currentPath.pop();
}

// Tests:
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(allPaths(root, 23));