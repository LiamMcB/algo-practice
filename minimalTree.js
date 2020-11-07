/* 4.2 Given a sorted array with unique integer elements, write an algo to create a bst with minimal height */

class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    // Base Cases
    if (val < this.val) {
      if (this.left) {
        this.left.add(val);
      } else {
        this.left = new BST(val);
      }
    } else if (val > this.val) {
      if (this.right) {
        this.right.add(val);
      } else {
        this.right = new BST(val);
      }
    }
  }
}

function minTree(arr) {
  // BST head to be returned later
  let root = new BST(arr[Math.floor(arr.length / 2)]);
  // Helper function to add nodes to tree
  function helper(arr, parent) {
    // Base case if array is empty
    if (!arr[0]) return;
    // Get midpoint value of array
    const middle = arr[Math.floor(arr.length / 2)];
    // Create left and right subarrays
    const left = arr.slice(0, Math.floor(arr.length / 2));
    const right = arr.slice(Math.floor(arr.length / 2) + 1)
    // Add to parent bst 
    parent.add(middle);
    // Invoke helper on left and right
    helper(left, parent);
    helper(right, parent);
  }
  helper(arr, root);
  return root;
}



// Tests:
// const bst = new BST(5);
// bst.add(4);
// bst.add(7);
// bst.add(2);
// bst.add(8);
// console.log(bst);
const arr1 = [1, 2, 4, 5, 7, 8, 9];
console.log(minTree(arr1));