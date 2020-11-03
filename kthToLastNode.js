/* 2.2 Return kth to last element of singly linked list */

// Function to instantiate node
function Node(val) {
  this.val = val;
  this.next = null;
}

// O(n^2) time O(1) space
function kthToLastNode(head, k) {
  let current = head;
  while (current) {
    let runner = current.next;
    let counter = 1;
    while (runner) {
      counter += 1;
      runner = runner.next;
    }
    if (counter === k) return current.val;
    current = current.next;
  }
  return -1; 
}

// O(n) time O(n) space
function kthToLastNodeBetter(head, k) {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  // Base case if k is greater than values length or 0, return -1
  if (k > values.length || k <= 0) return -1; 
  return values[values.length - k];
}

// O(n) time O(1) space
function kthToLastNodeBest(head, k) {
  let current = head;
  let runner = head;
  // Put runner k positions in front of current
  for (let i = 0; i < k; i += 1) {
    if (runner === null) return -1;
    runner = runner.next;
  }
  // Move two pointers at same pace until runner is null
  while (runner) {
    current = current.next;
    runner = runner.next;
  }
  // Now runner is null and current is kthToLast
  return current.val;
}

// Tests:
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
console.log(head);
console.log(kthToLastNodeBest(head, 4));