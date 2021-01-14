/* Given an array arr of unsorted numbers and a target sum, 
count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 
Write a function to return the count of such triplets. */
// O(n^2) time O(n) space
const tripletSum = function(arr, target) {
  // Initialize count of triplets to be zero
  let count = 0;
  // Sort array
  const sorted = arr.sort((a,b) => a - b);
  // Iterate over the sorted arr
  for (let i = 0; i < sorted.length; i += 1) {
    // Get two sum target
    const twoSumTarget = target - sorted[i];
    // Grab values of number to right and end 
    let first = i + 1;
    let last = sorted.length - 1;
    // Iterate while the first pointer is less than the last
    while (first < last) {
      // Get the current sum
      const currentSum = sorted[first] + sorted[last];
      // See if its less than the two sum target
      if (currentSum < twoSumTarget) {
        // Add anything last - first to count, since all numbes from last down will fit
        count += last - first;
        // Increment first
        first += 1;
      } else {
        // Decrement last
        last -= 1;
      }
    }
  }
  return count;
}

// Tests:
const arr1 = [-1, 0, 2, 3];
const arr2 = [-1, 4, 2, 1, 3];
console.log(tripletSum(arr1, 3));
console.log(tripletSum(arr2, 5));