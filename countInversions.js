/* Count Inversions: Given an array of integers, count how many inversions (swaps) of adjacent elements
are needed to sort the array */

//
const countInversions = function(arr) {
  // Initialize num inversions to 0
  let count = 0;
  // Iterate over the arr, from start to end
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      // If a swap is necessary, swap and increment count
      if (arr[j] > arr[j + 1]) {
        count += 1;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Return the count
  return count;
}

// Tests:
const arr1 = [2, 4, 1];
const arr2 = [1, 1, 2, 4];
console.log(countInversions(arr2));