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