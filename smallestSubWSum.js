/* GTCI 2. Given array of positive ints and number s, find the length of the smallest contiguous subarray
whose sum is greater than or equal to s */

// O(n) time -- iterates through at most 2n times, O(1) space
function smallestSubWSum(arr, s) {
  // General strategy: Increase end of sliding window, if our current sum is greater than s, compare it to the result length 
  // and relace as needed. Increment start and decrease current sum until we are no longer greater than s, comparing as we go
  let currSum = 0;
  let windowStart = 0;
  let result = Infinity;
  // Iterate until end of window reaches the end of the array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    currSum += arr[windowEnd];
    // While the current sum is greater than or equal to s, slide the start up
    while (currSum >= s) {
      result = Math.min(windowEnd - windowStart + 1, result);
      currSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  // If result is infinity, means we never exceeded s, so return 0
  result === Infinity ? 0 : result;
  return result;
}

// Tests:
const arr = [2, 1, 5, 2, 3, 2];
console.log(smallestSubWSum(arr, 7));