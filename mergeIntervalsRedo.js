// Input: Array of interval arrays, Output: Array of interval arrays
const mergeIntervals = function(intervals) {
  // Base case if only one interval
  if (intervals.length < 2) return intervals;
  // Sort intervals by start in ascending order
  intervals.sort((a, b) => a[0] - b[0]);
  // Declare variables to hold start and end of current interval
  let windowStart = intervals[0][0];
  let windowEnd = intervals[0][1];
  // Initialize merged intervals to be an empty array
  const mergedIntervals = [];
  // Iterate over intervals
  for (let i = 1; i < intervals.length; i += 1) {
    // If the intervals overlap
    if (intervals[i][0] < windowEnd) {
      windowEnd = Math.max(intervals[i][1], windowEnd);
    } else {
      // Else push the new current interval
      mergedIntervals.push([windowStart, windowEnd]);
      // Reset window start and end to be current intervals start and end
      windowStart = intervals[i][0];
      windowEnd = intervals[i][1];
    }
  }
  // Add the last interval and return merged array
  mergedIntervals.push([windowStart, windowEnd]);
  return mergedIntervals;
}

// Tests: 
const arr1 = [[6,7], [2,4], [5,9]];
console.log(mergeIntervals(arr1));

// Given an array of unique values, return an array of all distinct subsets
const distinctSubsets = function(arr) {
  let subsets = [[]];
  for (let i = 0; i < arr.length; i += 1) {
    // Create copy of subsets to push into
    const copy = [...subsets];
    for (let j = 0; j < copy.length; j += 1) {
      copy[j].push(arr[i]);
    }
    subsets = subsets.concat(copy);
  }
  return subsets;
}

// Tests:
const arr2 = [1, 3];
console.log(distinctSubsets(arr2));