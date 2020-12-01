/* GTCI Tree DFS 1: Given the head of a binary tree and a number S, 
determine if the tree has a path (root to leaf) whose values sum to S */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time O(n) space
const hasPath = function(root, sum) {
  // Base case if the root value equals the sum
  if (root.value === sum && !root.left && !root.right) return true;
  // Base case if no left or right nodes
  if (!root.left && !root.right) return false;
  // Base case if sum is now negative
  if (sum < 0) return false;
  // Check if the left or right paths add up to sum
  let doesHavePath = false; 
  if (root.left) doesHavePath = doesHavePath || hasPath(root.left, sum - root.value);
  if (root.right) doesHavePath = doesHavePath || hasPath(root.right, sum - root.value);
  // Return if the path was found
  return doesHavePath;
}
// Alternative w same time and space complexity
const has_path = function(root, sum) {
  // Base case if we reached a null node
  if (!root) return false;
  // Base case if the root value equals the sum
  if (root.value === sum && !root.left && !root.right) return true;
  // Run function on child nodes of the tree
  return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
}

// Tests:
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(hasPath(root, 23));
console.log(hasPath(root, 16));
console.log(has_path(root, 23));
console.log(has_path(root, 16));