/* Given a binary tree, populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL. */


// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

const connect = function(root) {
  // Initialize queue with root node
  let queue = [root];
  // Iterate until queue is empty
  while (queue[0]) {
    const first = queue.shift();
    // Children keeps track of next value's children to maintain order
    const children = [];
    // If there are next nodes, iterate and add them, add children to children 
    if (queue[0]) {
      // Previous is a pointer to the current node (before next)
      let previous = first;
      while (queue[0]) {
        const next = queue.shift();
        previous.next = next;
        if (next.left) children.push(next.left);
        if (next.right) children.push(next.right);
        previous = next;
      }
      // When there are no more values in the queue, set last node to null
      previous.next = null;
    }
    // If a node has no siblings, set its next to null
    else first.next = null;
    // Push children to queue
    if (first.left) queue.push(first.left);
    if (first.right) queue.push(first.right);
    // Concat the children of the next nodes
    queue = queue.concat(children);
  }
  return root;
}

// Tests:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(7);
console.log(root);
console.log(connect(root));