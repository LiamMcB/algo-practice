/* GTCI In-place LL reversal 2: Given the head of a ll and two positions p and q, reverse the ll from p to q (inclusive) */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  push(value) {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
}
// O(n) time, O(1) space
function reverseSubList(head, p, q) {
  // Base case if ll with one node
  if (p === q) return head;
  // Start at the head of the list
  let current = head;
  // Have a counter keep track of which node were on
  let count = 1;
  // Have a pointer point to pth node and node before p
  let pthNode;
  let nodeBeforeP = null;
  let previous;
  // Have boolean determine if were reversing
  let reversing = false;
  // Iterate over linked list
  while (current) {
    // Have pointer point to node directly before reversing starts
    if (count === p - 1) {
      nodeBeforeP = current;
    // Once we reach the node in reversing range, start reversing
    } else if (count === p) {
      pthNode = current;
      previous = current;
    } else if (count === p + 1) {
      reversing = true; // Start reversing at the next node after p
    } else if (count === q) { // If we reach the end of the reversing range
      reversing = false;
      // Set the pth nodes next to the currents next
      pthNode.next = current.next;
      // Set the node before p's next to the current 
      nodeBeforeP.next = current;
    }
    // If were reversing or at last reversing node, point current node to previous
    if (reversing || count === q) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    } else {
      current = current.next; // Set current to its next if were not reversing
    }
    // Increment count 
    count += 1;
  }
  // Return the head of the ll
  return head;
}

// Tests: 
const ll = new Node(1);
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);
console.log(ll);
console.log(reverseSubList(ll, 2, 4));