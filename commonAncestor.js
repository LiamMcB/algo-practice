/* 4.8 Given two binary trees (not bst's) find the lowest common ancestor of the two of them */

// Creating method for bst since binary tree would only have random logic, plus its good practice
class BST {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  add(val) {
    const bst = new BST(val);
    if (val < this.val && !this.left) {
      this.left = bst;
      bst.parent = this;
    } else if (val > this.val && !this.right) {
      this.right = bst;
      bst.parent = this;
    } else if (val < this.val && this.left) {
      this.left.add(val);
    } else if (val > this.val && this.right) {
      this.right.add(val);
    }
  }
}

function commonAncestor(node1, node2) {
  // Create set to store parents of node1
  const parents = new Set();
  // Traverse up from node 1 until we reach root, adding parents to set
  let current = node1;
  while (current) {
    parents.add(current.val);
    current = current.parent;
  }
  // Traverse up from node 2, checking parents along the way. If we reach parent, return it
  let checker = node2;
  while (checker) {
    if (parents.has(checker.val)) {
      return checker;
    }
    checker = checker.parent;
  }
  // If we reach the end without reaching the common ancestor, return -1
  return -1;
}

// Tests:
const test = new BST(4);
test.add(6);
test.add(2);
test.add(0);
test.add(3);
test.add(9);
console.log(test);
const node1 = test;
const node2 = test.left.right;
console.log(commonAncestor(node1, node2));
