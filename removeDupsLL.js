/* 2.1 Write code to remove duplicates from an unsorted linked list */

// Function to create a LL
function LinkedList() {
  this.head = null;
  this.tail = null;
}

// Function to instantiate node
function Node(val) {
  this.val = val;
  this.next = null;
}

// Method to add to end of LinkedList
LinkedList.prototype.add = function (value) {
  // Instantiate new node
  const node = new Node(value);
  // Base case if first node
  if (!this.head) this.head = this.tail = node;
  // Store tail's value
  const oldTail = this.tail;
  // Set new tail to added node
  this.tail = node;
  // Set oldTail's next to newTail
  oldTail.next = node;
};

// Tests:
const LL = new LinkedList();
LL.add(1);
LL.add(2);
LL.add(1);
console.log(LL);

// O(n) time, O(n) space
LinkedList.prototype.removeDupsLL = function() {
  const vals = new Set();
  if (!this.head || !this.head.next) return;
  let slow = this.head;
  let fast = this.head.next;
  vals.add(slow.val);
  while (fast) {
    if (vals.has(fast.val)) {
      slow.next = fast.next;
      // If removing tail
      if (!fast.next) this.tail = slow;
      fast = fast.next;
    } else {
      vals.add(fast.val);
      slow = fast;
      fast = fast.next;
    }
  }
} 

LL.removeDupsLL();
console.log(LL);
const otherLL = new LinkedList();
otherLL.removeDupsLL();
console.log(otherLL);