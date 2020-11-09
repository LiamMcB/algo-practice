/* 4.3 Given a binary tree, return an array of linked lists, where each linked list is all the nodes at a particular depth */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    // Edge case if first node
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    // Else set tail's next to new node
    this.tail.next = node;
    // Change tail of ll
    this.tail = node;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function listOfDepths(root) {
  // Array of ll's to be returned
  const output = [];
  // Values is an array of objects with value and depth
  const values = [];
  // q used for BFS
  const queue = [];
  queue.push(root);
  let depth = 1;
  // While queue, isn't empty, do BFS and add 
  while (queue) {
    if (queue[0].left) queue.push(queue[0].left);
    if (queue[0].right) queue.push(queue[0].right);
    queue.shift();
  }
  return queue;
}

// Tests:
