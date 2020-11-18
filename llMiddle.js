/* GTCI Fast/Slow Pointers 4: Given the head of a linked list, find and return the node at the middle of the linked list */
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// O(n) time O(1) space
function llMiddle(head) {
  // Set fast and slow pointers as head
  let slow = head;
  let fast = head;
  // Iterate through linked list, slow 1 at a time, fast 2 at a time
  while(fast && fast.next) {
    // Set fast to fast.next and slow to slow.next
    fast = fast.next.next;
    slow = slow.next;
  }
  // Once fast is null, return slow
  return slow;
}

// Tests:
const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
ll.next.next.next = new Node(4);
ll.next.next.next.next = new Node(5);
console.log(ll);
console.log(llMiddle(ll));