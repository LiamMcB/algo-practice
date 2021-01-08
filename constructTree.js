/* Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree. */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// Inorder: Left root right, Postorder: left right root
// Root is last element of post order traversal
// Left subtree starts from left of root in inorder
// Right subtree starts from right of root in inorder
const buildTree = function(inorder, postorder) {
  // Store indices of inorder values in hashtable 
  let hash = {};
  inorder.forEach((el, index) => {
    hash[el] = index;
  });
  // Helper function to run dfs on arrays
  const dfs = function(rootIndex, start, end) {
    // If start is greater than end, no more nodes to add
    if (start > end) return null;
    // Get node for root index 
    const root = new TreeNode(postorder[rootIndex]);
    // Get position of root value within inorder
    const rootPosition = hash[postorder[rootIndex]];
    // Get left nodes from left part of inorder and right from right part
    root.left = dfs(rootIndex - (end - rootPosition) - 1, start, rootPosition - 1);
    root.right = dfs(rootIndex - 1, rootPosition + 1, end);
    // Return the node
    return root;
  }
  // Invoke and return result of helper
  return dfs(postorder.length - 1, 0, postorder.length - 1);
}

// Tests: 3 -> [9, 20]
// IO: [9,3,15,20,7], [9,15,20,7]
// PO: [9,15,7,20,3], [9,15,7,20]
const inorder1 = [9,3,15,20,7];
const postorder1 = [9,15,7,20,3];
console.log(buildTree(inorder1, postorder1));