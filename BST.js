class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  add(val) {
    // Create new BST
    const bst = new BST(val);
    // Traverse tree and add value in correct place
    let current = this;
    while (current.left || current.right) {
      if (val < current.val && current.left) {
        current = current.left;
      } else if (val > current.val && current.right) {
        current = current.right;
      } else if (val < current.val && !current.left) {
        current.left = bst;
      } else if (val < current.val && !current.right) {
        current.right = bst;
      }
    }
  }
}