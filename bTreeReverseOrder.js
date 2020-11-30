/* GTCI Tree BFS 2: Given the head of a binary tree, populate an array to represent its level-by-level traversal in REVERSE */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  const result = [];
  const queue = [root];
  while (queue[0]) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i += 1) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.unshift(currentLevel);
  }
  return result;
}

// Tests:
const bst = new TreeNode(1);
bst.left = new TreeNode(2);
bst.right = new TreeNode(3);
bst.left.left = new TreeNode(4);
bst.left.right = new TreeNode(5);
bst.right.left = new TreeNode(6);
bst.right.right = new TreeNode(7);
console.log(traverse(bst));