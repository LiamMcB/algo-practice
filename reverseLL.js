/* GTCI In-place LL reversal 1: Reverse a singly linked list in place */
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

  reverse() {
    let previous = null;
    let current = this;
    while (current.next) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    // Now at last node, point it to previous and return it
    current.next = previous;
    return current;
  }
}
// O(n) time, O(1) space, re-wrote the method in the class just for kicks
function reverse(head) {
  let previous = null;
  let current = head;
  while (current.next) {
    let temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  // Now at last node, point it to previous and return it
  current.next = previous;
  return current;
}

// Tests:
const ll = new Node(1);
ll.push(2);
ll.push(3);
console.log(ll);
console.log(ll.reverse())