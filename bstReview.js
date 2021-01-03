/* BST Review: Write methods and constructor for bst adding, DFS and BFS */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  push(value) {
    if (value <= this.value && this.left) {
      this.left.push(value);
    } else if (value > this.value && this.right) {
      this.right.push(value);
    } else if (value <= this.value && !this.left) {
      this.left = new Node(value);
    } else if (value > this.value && !this.right) {
      this.right = new Node(value);
    }
  }
  dfs(value) {
    // Uses a DFS preorder which is node->left->right
    if (value === this.value) return true;
    else {
      if (value < this.value && this.left) {
        return this.left.dfs(value);
      } else if (value < this.value && !this.left) {
        return false;
      } else if (value > this.value && this.right) {
        return this.right.dfs(value);
      } else if (value > this.value && !this.right) {
        return false;
      }
    }
  }
  bfs(value) {
    const queue = [this];
    while (queue[0]) {
      const current = queue.shift();
      if (current.value === value) return true;
      queue.push(current.left);
      queue.push(current.right);
    }
    return false;
  }
};

// Function to invert a bst
const invert = function(root) {
  let current = root;
  let temp = current.left;
  current.left = current.right;
  current.right = temp;
  if (current.left) invert(current.left);
  if (current.right) invert(current.right);
}

// Tests:
const root = new Node(10);
console.log(root);
root.push(7);
console.log(root);
root.push(12);
root.push(4);
console.log(root);
invert(root);
console.log(root);