/* Swap Nodes in Pairs: Given the head of a linked list, swap adjacent nodes and return its head */
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
// O(n) time O(1) space
const swapPairs = function(head) {
  // Base case if no head or only one node, return head
  if (!head || !head.next) return head;
  let current = head;
  let previous = null;
  // Iterate until no nodes left
  while (current) {
    let first = current;
    let second = current.next;
    let third;
    if (current.next) {
      third = current.next.next;
    } else {
      break;
    }
    // Swap
    second.next = first;
    first.next = third;
    if (previous) previous.next = second;
    // Reset head if first iteration
    if (current === head) head = second;
    // Reassign current and previous
    current = third;
    previous = first;
  }
  return head;
}

// Tests:
// 2 -> 1 -> 4 -> 3 -> null 
const ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(3);
// ll.next.next.next = new Node(4);
console.log(ll);
console.log(swapPairs(ll))