/* GTCI Subsets 1: Given a set with distinct elements, return all distinct subsets.*/
// Input: array of numbers
// Output: array of arrays of numbers
// O(n*2^n) time O(n*2^n) space since we construct a newly doubled subset at each iteration
const distinctSubsets = function(nums) {
  // Initialize array of subsets
  let subsets = [[]];
  // Iterate over the array
  for (let i = 0; i < nums.length; i += 1) {
    // Iterate over subsets copy, and push current value to each subset
    const currentSet = subsets.map(val => {
      // Create array to hold current subset with pushed value
      const pushedSubset = [...val];
      // With copy of current subset index, push nums at i
      pushedSubset.push(nums[i]);
      // Return the pushed subset
      return pushedSubset;
    });
    // Concatenate subsets with the subset for current index
    subsets = subsets.concat(currentSet);
  }
  // Return array of subsets
  return subsets;
}

// Tests:
const arr1 = [1, 3];
const arr2 = [1, 5, 3];
console.log(distinctSubsets(arr1));
console.log(distinctSubsets(arr2));