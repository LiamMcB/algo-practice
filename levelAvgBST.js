/* GTCI Tree BFS 4: Given a binary tree, populate an array to represent the averages of all of its levels. */
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findLevelAverages = function(root) {
  // If no root, return empty array
  if (!root) return [];
  // Initialize averages to array 
  const averages = [];
  // Init queue to array with root
  const queue = [root];
  // Init count to know which level were on
  let count = 1;
  let levelSum = 0;
  // While the queue isnt empty
  while (queue.length) {
    // Shift out the first element of the q
    const first = queue.shift();
    // Get level were on
    const level = Math.floor(Math.log2(count));
    // If the level is greater than the length of avgs, push new average and reset levelsum
    if (level > averages.length) {
      averages.push(getAverage(levelSum, level - 1));
      levelSum = first.value;
    } else {
      // Else just add to level sum
      levelSum += first.value;
    }
    // push left and right nodes to queue;
    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);
    count += 1;
  }
  // Push last level sum to averages
  averages.push(getAverage(levelSum, Math.floor(Math.log2(count)) - 1));
  return averages;
}
// Helper to find average
const getAverage = function(levelSum, level) {
  // Get number of elements in that level
  const numEls = Math.pow(2, level);
  // Get average by dividing sum by num of els
  return levelSum / numEls;
}

// Tests:
var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(root);
console.log(findLevelAverages(root))