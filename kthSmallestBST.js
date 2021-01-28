/* Given a root node of a bst, find the kth smallest element in it */
class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const kthSmallest = function(root, k) {
  // Array to hold all node values
  const nodeVals = [];
  // Recurse through tree in inorder to populate nodevals ascending
  const populateVals = function(root) {
    if (root.left) populateVals(root.left);
    nodeVals.push(root.val);
    if (root.right) populateVals(root.right);
  }
  // Invoke populatevals
  populateVals(root);
  // Return the kth value of nodeVals
  return nodeVals[k - 1];
}

// Tests:
const bst = new Node(3);
bst.left = new Node(1);
bst.right = new Node(4);
bst.left.right = new Node(2);
bst.right.right = new Node(7);
console.log(kthSmallest(bst, 1));