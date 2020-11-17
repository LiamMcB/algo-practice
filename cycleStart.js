/* GTCI Fast/Slow Pointers 2: Given a linked list with a cycle in it, find the starting node of the cycle 
and return it */

class Node {
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
function cycleStart(head) {
  let slow = head;
  let fast = head;
  let cycleLength;
  // Iterate through ll with fast and slow pointers until overlap in cycle
  while (fast && fast.next) {
    // If they overlap, we're in a cycle
    if (slow === fast) {
      // Run cycle count helper function
      cycleLength = cycleCount(slow);
      break;
    }
    // Else set pointers to next
    slow = slow.next;
    fast = fast.next.next;
  }
  // While loop with second pointer starting cyclelength away
  let p1 = head;
  let p2 = head;
  // Pointer 2 is k nodes away
  for (let i = 0; i < cycleLength; i += 1) {
    p2 = p2.next;
  }
  // Iterate until they overlap, when they do thats the starting node
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

// Helper function to find length of cycle
function cycleCount(node) {
  let cycleLength = 0;
  let current = node;
  // Continue to iterate while counting up cycle length
  while (true) {
    cycleLength += 1;
    current = current.next;
    // If the current node hits the slow node, we reached a full cycle
    if (current === node) {
      return cycleLength;
    } 
  }
}

// Tests:
let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${cycleStart(head).value}`)