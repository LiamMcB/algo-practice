/* Given a linked list's head, sort it using insertion sort */

// Insertion sort of array
const insertionSort = function(arr) {
  const sorted = [arr[0]];
  // Iterate over arr
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i];
    let j = i - 1;
    // Iterate left from the current index
    while (j >= -1) {
      if (current < sorted[j]) {
        j -= 1;
      } else {
        sorted.splice(j + 1, 0, current);
        break;
      }
    }
  }
  return sorted;
}

// LL constructor
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

// Insertion sort list
const insertionSortList = function(head) {
  // Base case for empty linked list
  if (!head) return head;
  // Variable to hold sorted arr of linked list values
  let result = [head.val];
  // Iterate over linked list
  let current = head;
  while (current) {
    let added = false;
    for (let i = 0; i < result.length; i += 1) {
      if (current.val < result[i]) {
        result.splice(i, 0, current.val);
        added = true;
        break;
      }
    }
    if (!added && current !== head) result.push(current.val);
    current = current.next;
  }
  // Return the head as a linked list version of the arr
  return createLL(result);
}
// Create ll from array
const createLL = function(arr) {
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i += 1) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Tests:
const arr1 = [3, 2, 9, 1, 4];
const ll1 = new ListNode(3);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(9);
ll1.next.next.next = new ListNode(1);
ll1.next.next.next.next = new ListNode(4);
// console.log(insertionSort(arr1));
console.log(ll1);
console.log(insertionSortList(ll1));