/* Given the root of a binary tree, return the inorder traversal of its nodes' values as an array */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const inorderTraversal = function(root) {
  const result = [];
  if (!root) return result;
  const traverse = function(root, result) {
    if (root.left) traverse(root.left, result);
    result.push(root.val);
    if (root.right) traverse(root.right, result);
  }
  traverse(root, result);
  return result;
}

// Tests:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
console.log(inorderTraversal(tree));