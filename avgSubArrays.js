/* GTCI: Sliding Window Intro: Given an array and a number K, find the average of all continuous subArrays of size K in it */

function avgSubArrays(arr, k) {
  // Declare array to hold list of averages
  const result = [];
  // Declare window start and a sum to keep track of window totals 
  let windowStart = 0;
  let windowSum = 0;
  // Iterate over arr, incrementing windowEnd and sliding along
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd += 1) {
    // Add current value to sum
    windowSum += arr[windowEnd];
    // If we have passed the first window
    if (windowEnd >= k - 1) {
      // Push the new average to the result
      result.push(windowSum / k);
      // Subtract start value from sum
      windowSum -= arr[windowStart];
      // Increment window start
      windowStart += 1;
    }
  }
  // Return result
  return result; 
}

// Tests:
const arr1 = [1, 3, 2, 6, -1, 4, 1, 8, 2];
console.log(avgSubArrays(arr1, 5));