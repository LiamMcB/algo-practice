class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  add(val) {
    // Create new BST
    const bst = new BST(val);
    // Cases where right and left nodes, dont exist, so add new bst here
    if (val > this.val && !this.right) {
      this.right = bst;
    } else if (val < this.val && !this.left) {
      this.left = bst;
    }
    // Cases where we continue traversing down
    else if (val > this.val && this.right) {
      this.right.add(val);
    } else if (val < this.val && this.left) {
      this.left.add(val);
    }
  }
}