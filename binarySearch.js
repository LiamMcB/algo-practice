/* GTCI Binary Search 1: Given a sorted array and a key, return the index of the key if it exists. If it's not in the 
array, return -1. We don't know if the array is sorted in ascending or descending order. */
// O(logn) time O(logn) space
const binarySearch = function(arr, key) {
  // First determine, if array sorted in ascending or descending order
  let ascending;
  const first = arr[0];
  let last = arr[arr.length - 1];
  // If last less than first, set ascending to false
  if (last < first) ascending = false;
  // If last greater than first, set ascending to true
  if (last > first) ascending = true;
  // Else check if key equal to first, and return 0 if so, else return -1
  else if (last === first && key === first) return 0;
  else if (last === first && key !== first) return -1;
  // If ascending run ascBinarySearch
  if (ascending) return ascBinarySearch(arr, key, 0, arr.length - 1);
  // Else run descBinarySearch
  else return descBinarySearch(arr, key, 0, arr.length - 1);
}

const ascBinarySearch = function(arr, key, start, end) {
  // Base case if arr has no elements or has 1 and the key isn't equal to it
  if (end - start === 0 && key !== arr[start]) return -1;
  // Base case if arr's first value is the key
  if (arr[start] === key) return start;
  // Find midpoint index
  const midpoint = start + Math.floor(end - start / 2);
  // If the key is less than the midpoint, invoke function on first half
  if (key < arr[midpoint]) return ascBinarySearch(arr, key, start, midpoint - 1);
  // If its greater than the midpoint, invoke it on second half
  else if (key > arr[midpoint]) return ascBinarySearch(arr, key, midpoint + 1, end);
  // Else if it is the same, return the midpoint
  else return midpoint;
}

const descBinarySearch = function(arr, key, start, end) {
  // Base case if arr has no elements or has 1 and the key isn't equal to it
  if (end - start === 0 && key !== arr[start]) return -1;
  // Base case if arr's first value is the key
  if (arr[start] === key) return start;
  // Find midpoint index
  const midpoint = start + Math.floor(end - start / 2);
  // If the key is greater than the midpoint, invoke function on first half
  if (key > arr[midpoint]) return descBinarySearch(arr, key, start, midpoint - 1);
  // If its less than the midpoint, invoke it on second half
  else if (key > arr[midpoint]) return descBinarySearch(arr, key, midpoint + 1, end);
  // Else if it is the same, return the midpoint
  else return midpoint;
}

// Tests:
const arr1 = [4, 6, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [10, 6, 4];
console.log(binarySearch(arr1, 10));
console.log(binarySearch(arr2, 5));
console.log(binarySearch(arr3, 10));