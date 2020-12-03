/* GTCI Two Heaps 1: Create a number stream class with two methods, an insert and find median method */
// These heaps are unary heaps, sorted linked lists basically
class MinHeap {
  constructor() {
    this.heap = [];
  }
  findMin() {
    return this.heap[0];
  }
  insert(value) {
    this.heap.push(value);
    // Insert using binary insertion since array is sorted
    let current = this.heap.length - 1;
    // Ensure its not already in sorted order
    if (this.heap.length > 1 && this.heap[current] < this.heap[current - 1]) {
      // Create copy to directly modify
      const heap = this.heap.slice(0, this.heap.length - 1);
      // Helper function to run recursive calls and find index to insert into
      function binarySearch(arr, val, start, end) {
        const mid = Math.floor(arr.length / 2);
        // If the val is greater than the last in the array, return the length - 1
        if (val > arr[arr.length - 1]) return end;
        // If its between the last and the middle, return invocation on that slice
        if (val < arr[arr.length - 1] && val > arr[mid]) { 
          return binarySearch(arr.slice(mid, arr.length), val, start + mid, end);
        // Else if its between the first and middle elements
        } else if (val < arr[mid] && val > arr[0]) {
          return binarySearch(arr.slice(0, mid), val, start, start + mid);
        // Else its greater than the first value, so insert there
        } else {
          return start;
        }
      }
      // Invoke helper
      const indexToInsert = binarySearch(heap, value, 0, heap.length - 1);
      // Insert at index
      heap.splice(indexToInsert, 0, value);
      // Set heap equal to the copy we modified
      this.heap = heap;
    }
  }
  // Removes top element from heap and returns it
  pop() {
    return this.heap.shift();
  }
}
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  findMax() {
    return this.heap[0];
  }
  insert(value) {
    this.heap.push(value);
    // Insert using binary insertion since array is sorted
    let current = this.heap.length - 1;
    // Ensure its not already in reverse sorted order
    if (this.heap.length > 1 && this.heap[current] > this.heap[current - 1]) {
      // Create copy to directly modify
      const heap = this.heap.slice(0, this.heap.length - 1);
      // Helper function to run recursive calls and find index to insert into
      function binarySearch(arr, val, start, end) {
        const mid = Math.floor(arr.length / 2);
        // If the val is smaller than the last in the array, return the length - 1
        if (val < arr[arr.length - 1]) return end;
        // If its between the last and the middle, return invocation on that slice
        if (val > arr[arr.length - 1] && val < arr[mid]) { 
          return binarySearch(arr.slice(mid, arr.length), val, start + mid, end);
        // Else if its between the first and middle elements
        } else if (val > arr[mid] && val < arr[0]) {
          return binarySearch(arr.slice(0, mid), val, start, start + mid);
        // Else its greater than the first value, so insert there
        } else {
          return start;
        }
      }
      // Invoke helper
      const indexToInsert = binarySearch(heap, value, 0, heap.length - 1);
      // Insert at index
      heap.splice(indexToInsert, 0, value);
      // Set heap equal to the copy we modified
      this.heap = heap;
    }
  }
  // Removes top element from heap and returns it
  pop() {
    return this.heap.shift();
  }
}

class MedianOfAStream {
  constructor() {
    this.maxHeap = new MaxHeap;
    this.minHeap = new MinHeap;
  }
  insert_num(num) {
   // Insert into max heap first
   if (this.maxHeap.heap.length === 0 || this.maxHeap.heap[0] >= num) {
     this.maxHeap.insert(num);
   } else {
     this.minHeap.insert(num);
   }
   // At this point, compare the lengths and redistribute if needed
   if (this.maxHeap.heap.length > this.minHeap.heap.length + 1) {
    this.minHeap.insert(this.maxHeap.pop());
   } else if (this.maxHeap.heap.length < this.minHeap.heap.length) {
    this.maxHeap.insert(this.minHeap.pop());
   }
  }
  find_median(self) {
    // IF the length of the max heap is more than the minheap, return its top element
    if (this.maxHeap.heap.length > this.minHeap.heap.length) return this.maxHeap.findMax();
    // Else return the average of the two tops
    else return (this.maxHeap.findMax() + this.minHeap.findMin()) / 2;
  }
};

// Tests:
const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
medianOfAStream.insert_num(5);
medianOfAStream.insert_num(4);
console.log(medianOfAStream);
console.log(medianOfAStream.find_median());