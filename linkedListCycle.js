/* GTCI Fast/Slow Pointers 1: Given a singly linked list, determine if it has a cycle or not */

class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next; 
  }
  push(value) {
    // If there is a next, invoke function on next
    if (this.next) this.next.push(value);
    // Else if there is no next, add it to next
    else this.next = new LinkedList(value);
  }
}

// O(n) time O(1) space
function linkedListCycle(head) {
  // Declare a fast and slow pointer
  let slow = head;
  let fast = head.next;
  // Base case if only one node
  if (!fast) return false;
  // Iterate over linkedList
  while (fast && fast.next) {
    // If the pointers overlap, return true
    if (fast === slow) {
      return true;
    }
    // Set the slow pointer to the next node;
    slow = slow.next;
    // Set the fast pointer to be two ahead
    fast = fast.next.next;
  }
  // Return false if the two never overlap
  return false;
}

// Tests:
const ll = new LinkedList('first');
ll.push('second');
ll.push('third');
ll.next.next.next = ll;
console.log(linkedListCycle(ll));