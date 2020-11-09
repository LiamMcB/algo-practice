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

// Tests:
const ll = new LinkedList();
ll.push('first');
console.log(ll);
ll.push('second');
console.log(ll);