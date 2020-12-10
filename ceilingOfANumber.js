/* GTCI Binary Search 2: Given an array sorted in ascending order and a key, find the index of the smallest 
number greater than or equal to the key */
// O(logn) time, O(1) space
const ceilingOfANumber = function(arr, key) {
  // Declare closest difference index and set to largest element in array
  const closestDiffIndex = arr.length - 1;
  // Base Case if key larger than last array element
  if (key > arr[closestDiffIndex]) return -1;
  // Invoke binary search on arr with start at 0 and end at the length minus 1
  return ascBinarySearch(arr, key, 0, arr.length - 1, closestDiffIndex);
}

const ascBinarySearch = function(arr, key, start, end, closestDiffIndex) {
  // Base case if arr has one element and that element is greater, return the closestDiffIndex
  if (end - start === 0 && arr[start] > key) return closestDiffIndex;
  // Find midpoint index
  const midpoint = start + Math.floor((end - start) / 2);
  // If the key is less than the midpoint, invoke function on first half
  if (key < arr[midpoint]) return ascBinarySearch(arr, key, start, midpoint - 1, midpoint - 1);
  // If its greater than the midpoint, invoke it on second half
  else if (key > arr[midpoint]) return ascBinarySearch(arr, key, midpoint + 1, end, end);
  // Else if it is the same, return the midpoint
  else return midpoint;
}

// Tests:
const arr1 = [4, 6, 10];
const arr2 = [1, 3, 8, 10, 15];
console.log(ceilingOfANumber(arr1, 7));
console.log(ceilingOfANumber(arr1, 17));
console.log(ceilingOfANumber(arr2, 12));