/* 4.3 Given a binary tree, return an array of linked lists, where each linked list is all the nodes at a particular depth */
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
  const lists = [];
  // Helper function that takes the current node, lists array, and depth
  function addToList(node, depth) {
    // Run code only if current node is not null
    if (node) {
      // If no ll at current depth, instantiate one
      if (!lists[depth]) {
        lists[depth] = new LinkedList();
      }
      // Add node's value to linked list 
      lists[depth].push(node.val);
      // Invoke helper function on left and right nodes of current node
      addToList(node.left, depth + 1);
      addToList(node.right, depth + 1);
    }
  }
  // Invoke lists at depth 0 with root
  addToList(root, 0);
  // Return lists
  return lists;
}

// Tests:
const test = new BST(4);
test.add(6);
test.add(2);
test.add(0);
test.add(3);
test.add(9);
console.log(test);
console.log(listOfDepths(test));