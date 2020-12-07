/* GTCI Subsets 2: Given an array of numbers that may contain duplicates, return an array of distinct subsets */
// O(n*4^n) time O(n*2^n) space
const distinctSubsetsWDups = function(nums) {
  let subsets = [[]];
  for (let i = 0; i < nums.length; i += 1) {
    let subsetCopy = [...subsets];
    subsetCopy = subsets.map((val) => {
      // Make copy of current index of subset
      const copy = [...val];
      // Push the current number to the copy
      copy.push(nums[i]);
      // If it doesnt exist in subsets alreay, push it in
      if (!hasArray(subsetCopy, copy)) return copy;
    });
    subsets = subsets.concat(subsetCopy);
  }
  // Filter out undefined values
  return subsets.filter(val => val !== undefined);
}

// Helper function to test array shallow equality and return boolean
const arrayEquals = function(arr1, arr2) {
  return (JSON.stringify(arr1) === JSON.stringify(arr2));
}
// Helper to see if array exists in array of other arrays
const hasArray = function(array, target) {
  for (let i = 0; i < array.length; i += 1) {
    if (arrayEquals(array[i], target)) return true;
  }
  return false;
}

// Tests:
const arr1 = [1, 3, 3];
console.log(distinctSubsetsWDups(arr1));