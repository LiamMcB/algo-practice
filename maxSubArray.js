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