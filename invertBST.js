/* Given the root node of a binary search tree, invert it in place and return the root */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  push(value) {
    if (value < this.value) {
      if (!this.left) {
        this. left = new Node(value);
      } else {
        this.left.push(value);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.push(value);
      }
    } 
  }
}

const invert = function(root) {
  if (root.left) invert(root.left);
  if (root.right) invert(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
}

// Tests:
const bst = new Node(6);
bst.push(7);
bst.push(9);
bst.push(4);
console.log(bst);
invert(bst);