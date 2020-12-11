/* General sorting algo practice */

// Bubble Sort: Repeatedly swaps adjacent elements if they're in the wrong order - O(n^2) time, O(1) space
const bubbleSort = function(arr) {
  // Iterate over array
  for (let i = 0; i < arr.length; i += 1) {
    // Iterate over whole array
    for (let j = 0; j < arr.length; j += 1) {
      // If the jth element is less than its adjacent element, swap them
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Return original array, since it was sorted in place
  return arr;
}

// Tests:
const arr1 = [5, 1, 4, 2, 8];
console.log(bubbleSort(arr1));

// Selection Sort: Repeatedly find the minimum element and place it at the beginning of the subarray - O(n^2) time, O(1) space
const selectionSort = function(arr) {
  // Iterate over array
  for (let i = 0; i < arr.length; i += 1) {
    // Set min to the current index
    let min = i;
    // Iterate over array, starting from current element to end
    for (let j = i + 1; j < arr.length; j += 1) {
      // If the jth element is less than the min element, reset min
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // If min isn't i, swap min with ith element
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  // Return original array, since it was sorted in place
  return arr;
}

// Tests:
const arr2 = [5, 1, 4, 2, 8];
console.log(selectionSort(arr2));

// Insertion Sort: Repeatedly insert array element into the correct position of the subarray up until its index - O(n^2) time, O(1) space
const insertionSort = function(arr) {
  // Iterate over array
  for (let i = 0; i < arr.length; i += 1) {
    // Iterate over subarray until i and insert element to left of first element greater than it
    let index = 0;
    while (index < i) {
      if (arr[index] > arr[i])  {
        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
      index += 1;
    }
  }
  // Return array, since it was sorted in place
  return arr;
}

// Tests:
const arr3 = [5, 1, 4, 2, 8];
console.log(insertionSort(arr3));

// Merge Sort: Divide input array into smaller and smaller pieces then insert elements in correct order - O(nlogn) time, O(n) space
const mergeSort = function(arr) {
  // If the array has one elemnt or empty, return it
  if (arr.length <= 1) return arr;
  // Find the midpoint
  const midpoint = Math.floor(arr.length / 2);
  // Split array into two halves
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  // Invoke merge helper function 
  return merge(mergeSort(left), mergeSort(right));
}
// Function that merges array elements in correct order (assumes theyre both sorted)
const merge = function(left, right) {
  // Initialize array to hold sorted elements
  let sorted = [];
  // While either left or right have, elements, insert smaller into sorted
  while(left[0] && right[0]) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  // For remaining elements, concat them to the sorted arr and return it
  if (left.length) sorted = sorted.concat(left);
  if (right.length) sorted = sorted.concat(right);
  return sorted;
}

// Tests:
const arr4 = [5, 1, 4, 2, 8];
const arr5 = [1, 6, 1, 4, 23, 5, 9, 23];
console.log(mergeSort(arr5));