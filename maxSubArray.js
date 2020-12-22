/* GTCI Sliding Window 1: Given array of positive numbers and positive number k, find the max sum of any contiguous 
subarray of size k */

// O(n) time, O(1) space
function maxSubArray(arr, k) {
  // Create variable to hold the max sum
  let maxSum = 0;
  // Create window start and sum variables to keep track of window sums
  let windowStart = 0;
  let windowSum = 0;
  // Iterate over the array until the window end reaches the end of the array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    // Add current array value to windowSum
    windowSum += arr[windowEnd];
    // If the window end is past the first k elements
    if (windowEnd >= k - 1) {
      // Check if sum is greater than max sum, and reset it
      maxSum = Math.max(windowSum, maxSum);
      // Subtract start value
      windowSum -= arr[windowStart];
      // Increment start
      windowStart += 1;
    }
  }
  // Return max sum
  return maxSum;
}

// Test Case:
const arr = [1, 4, 2, 0, 8, 1, 3];
console.log(maxSubArray(arr, 3));

// Solution with no size k, just finding the max subarray of any length and return the sum
const maxSubArrayofAnyLength = (arr) => {
  // O(n^2) time O(1) space
  // // Initialize sum variable to hold max sum
  // let maxSum = arr[0];
  // // Iterate over the array
  // for (let i = 0; i < arr.length; i += 1) {
  //   let currentSum = arr[i];
  //   let index = i - 1;
  //   // While loop until moving back from current index to start
  //   while (index >= 0) {
  //     currentSum += arr[index];
  //     maxSum = Math.max(maxSum, currentSum);
  //     index -= 1;
  //   }
  // }
  // // Return the maximum sum
  // return maxSum;
  
  // O(n) time, O(1) space
  // Declare a previous sum and set to zero and max to -Inf
  let prevSum = 0;
  let maxSum = -Infinity;
  // Iterate over array
  for (var i = 0; i < arr.length; i++) {
    // If current arr element is positive, reset previous sum to add it, else add it as long as adding it doesnt make it smaller than the current el
    prevSum = Math.max(prevSum + arr[i], arr[i]);
    // Set max sum to be the maximum of the current max sum and the previous
    maxSum = Math.max(maxSum, prevSum);
  }
  return maxSum;
}
// Test Cases:
const arr2 = [-2,1,-3,4,-1,2,1,-5,4];
const arr3 = [-1, 4, -1, 2, 0]
console.log(maxSubArrayofAnyLength(arr3));