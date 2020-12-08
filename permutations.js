/* GTCI Subsets 3: Given an array of distinct numbers, find all of its permutations */

const permutations = function(nums) {
  let result = [];
  // Iterate over nums from index 1 to end
  for (let i = 0; i < nums.length; i += 1) {
    let currentPerm = [nums[i]];
    // Get slice of array not including current element
    let slice = [...nums];
    slice.splice(i, 1);
    console.log(slice)
    // Trigger helper function with current perm array and slice
    currentPerm = helper(currentPerm, slice, []);
    // Concat the new permutations to the result array
    result = result.concat(currentPerm);
  }
  return result;
}

// Helper function that takes an array and slice of array to iterate over and returns array of array
const helper = function(arr, slice, result) {
  // IF slice has no elements, return
  if (!slice.length) return result;
  // Iterate over slice and push those elements to copy of arr
  slice.forEach(val => {
    // Create temp array to push slice val to
    const temp = [...arr];
    temp.push(val);
    // Push to result
    result.push(temp);
  });
  console.log(result)
  // Invoke helper again with slice and last value taken out
  return helper(arr, slice.slice(0, slice.length - 1), result);
}

// Tests: 
const arr1 = [1, 3, 5];
console.log(permutations(arr1));