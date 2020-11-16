/* GTCI Two Pointers 4: Given an array of unsorted numbers, find all unique triplets that add up to 0  */

// O(n^2) time, O(n) space
function tripletSumToZero(arr) {
  const triplets = [];
  // Sort array
  arr.sort((a, b) => a - b);
  // Iterate over array 
  for (let i = 0; i < arr.length - 1; i += 1) {
    // Let target be the negative value of the current element
    const target = -arr[i];
    // Use two pointer to find twoSum with target
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      // If the current sum equals the target, push the array to triplets and increment left and right until were free from duplicates
      if (currentSum === target) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left += 1;
        right -= 1;
        // While loops to solve cases with many duplicates
        while (left < right && arr[left] === arr[left - 1]) {
          left += 1;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right -= 1;
        }
      // If the current sum is too big, decrement right pointer to smaller val
      } else if (currentSum > target) {
        right -= 1;
      // IF the current sum is too small, increment right pointer to larger value
      } else {
        left += 1;
      }
    }
  }
  return triplets;
}

// Tests:
const arr1 = [-3, 0, 1, 2, -1, 1, -2];
console.log(tripletSumToZero(arr1));
