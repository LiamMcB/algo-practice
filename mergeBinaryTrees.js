/* Given two binary trees and imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
then sum node values up as the new value of the merged node. 
Otherwise, the NOT null node will be used as the node of new tree. */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

const mergeTrees = function(t1, t2) {
  // If both t1 and t2 are empty, return empty tree node
  if (!t1 && !t2) return t1;
  // Initialize root to be an empty tree node
  const root = new TreeNode();
  // Function that merges two trees
  const merge = function(t1, t2, m1) {
    // If t1 and t2 are null, return merged
    if  (!t1 && !t2) return root;
    // Add nodevalues from each
    let currentVal = 0;
    if (t1 && t1.val) currentVal += t1.val;
    if (t2 && t2.val) currentVal += t2.val;
    // Create new node with current val and add to tree
    m1.val = currentVal;
    // If either t1/t2 dont have left or right, dont create left node for them
    if ((t1 && t1.left) || (t2 && t2.left)) m1.left = new TreeNode();
    if ((t1 && t1.right) || (t2 && t2.right)) m1.right = new TreeNode();
    // Traverse left subtree
    merge(t1 ? t1.left : null, t2 ? t2.left : null, m1.left);
    // Traverse right subtree
    merge(t1 ? t1.right : null, t2 ? t2.right : null, m1.right);
  }
  // Invoke merge with the two subtrees and return the head
  merge(t1, t2, root);
  // Return the head of the merged tree
  return root; 
}

// Tests:
const t1 = new TreeNode(1);
t1.left = new TreeNode(3);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(5);
const t2 = new TreeNode(2);
t2.left = new TreeNode(1);
t2.right = new TreeNode(3);
t2.left.right = new TreeNode(4);
t2.right.right = new TreeNode(7);
console.log(t1);
console.log(t2);
console.log(mergeTrees(t1, t2));