/* Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements
without changing the order of the remaining elements. 
For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. */

const lengthofLIS = function(nums) {
  // Initialize longest subsequence to 0
  let longestSub = 0;
  // Helper function that finds the longest subsequence of an array slice
  const findLongest = function(nums, currentSub, first) {
    // If the current sub is longer than the longest sub, change it
    longestSub = Math.max(currentSub, longestSub);
    // Base case if nums is empty
    if (!nums.length) return;
    // Iterate over remaining nums
    for (let i = 1; i < nums.length; i += 1) {
      // Get a slice starting from the current num
      const slice = nums.slice(i);
      // If the current number is greater than first num
      if (nums[i] > first) {
        // Invoke find longest with slice and current sub plus 1
        findLongest(slice, currentSub + 1, first);
      }
      // Else if it isnt, find longest with the slice and current sub
      findLongest(slice, currentSub, nums[i]);
    }
  }
  // Find longest subsequence from nums
  findLongest(nums, 1, nums[0]);
  return longestSub;
}
// O(n^2) time O(n) space
const lengthofLISAlt = function(nums) {
  // Base case if nums is empty
  if (!nums.length) return 0;
  // Initialize memo of longest subsequences
  const LIS = [];
  // Iterate over nums
  for (let i = 0; i < nums.length; i += 1) {
    // Push 1 (longest subsequence to this point) in index
    LIS.push(1);
    // Iterate over values up until the current num
    for (let j = 0; j < i; j += 1) {
      // If the num at j is less than the one at 1, reset LIS to lis to current point or to other point plus 1
      if (nums[j] < nums[i]) LIS[i] = Math.max(LIS[i], LIS[j] + 1);
    }
  }
  LIS
  // Return the list's max
  return LIS.reduce((a, b) => Math.max(a, b));
}

// Tests:
const arr1 = [0,3,1,6,2,2,7];
const arr2 = [10,9,2,5,3,7,101,18];
const arr3 = [7,7,7,7,7,7,7];
const arr4 = [4,10,4,3,8,9];
const arr5 = [1, 2, 3, 4, 1];
console.log(lengthofLISAlt(arr1));