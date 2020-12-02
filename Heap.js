// Heap: Tree that is complete at every level except potentially the last level and nodes are as far left as possible
// Min Heap follows the rule that parent nodes are smaller than children, so smallest node is the root
// Max heap has parents that are larger than children, so the largest node is the root
// Constructor for min binary heap using level order array to hold values
class MinHeap {
  constructor(value) {
    this.heap = [value];
  }
  // Function to find the min of the heap
  findMin() {
    return this.heap[0];
  }
  // Function to insert in the correct position of the heap
  insert(value) {
    // Push value to the heap
    this.heap.push(value);
    // If the heap has more than 1 node, add the new one in the correct position
    if (this.heap.length > 1) {
      // Get child and parent indices
      let child = this.heap.length - 1;
      let parent = Math.floor((child - 1) / 2);
      // While child is less than parent, swap the two
      while(parent >= 0 && this.heap[child] < this.heap[parent]) {
        // Swap them
        [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
        // Check if current node greater than child to its right and swap if so
        if (this.heap[child] > this.heap[child + 1]) {
          [this.heap[child], this.heap[child + 1]] = [this.heap[child + 1], this.heap[child]];
        }
        // Reset child and parent
        child = parent;
        parent = Math.floor((child - 1) / 2);
      }
    }
  }
}
// Constructor for node of binary heap
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Tests:
const minHeap = new MinHeap(10);
minHeap.insert(23);
minHeap.insert(36);
minHeap.insert(18);
minHeap.insert(1);
console.log(minHeap);