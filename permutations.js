/* GTCI Subsets 3: Given an array of distinct numbers, find all of its permutations */
// O(n*n!) time, O(n*n!) space
const permutations = function(nums) {
  let result = [];
  // Iterate over nums from index 1 to end
  for (let i = 0; i < nums.length; i += 1) {
    let currentPerm = [nums[i]];
    // Get slice of array which will later not including current element
    let slice = [...nums];
    // Trigger helper function with the current permutation and get all permutations starting with the current value
    helper(currentPerm, slice, i, result, nums.length);
  }
  return result;
}

// Helper function that takes an array which holds results and slice of array to iterate over and just modifies result
const helper = function(currentArr, slice, index, result, numLength) {
  // Get slice of all array elements not including index
  slice.splice(index, 1);
  // Base case if the slice now has no values, return array of arrays
  if (!slice.length) return;
  // Else iterate over elements in slice 
  for (let i = 0; i < slice.length; i += 1) {
    // Make shallow copy of current array
    const shallowCopy = [...currentArr];
    // Push the current slice value to the copy
    shallowCopy.push(slice[i]);
    // Invoke the helper with the copy as the current array to get permutations starting from this copy
    helper(shallowCopy, [...slice], i, result, numLength);
    // Concatenate the new permutations to result if the shallow copy matches the length of nums
    if (shallowCopy.length === numLength) result.push(shallowCopy);
  }
}

// Alternative where i insert current value at every possible index 
function find_permutations(nums) {
  // Result holds final array of permutations
  const result = [];
  // Permutations holds interim arrays of permutations
  const permutations = [[]];
  // Iterate over the nums array
  for (let i = 0; i < nums.length; i += 1) {
    // Iterate over the list of permutations
    const n = permutations.length;
    for (let j = 0; j < n; j += 1) {
      // Get the first element of the permutations array and remove it
      const oldPermutation = permutations.shift();
      // Create a new permutation by adding the current value to every possible index
      for (let p = 0; p < oldPermutation.length + 1; p += 1) {
        // Create clone of old permutation
        const newPermutation = [...oldPermutation];
        // Insert the current number at index p
        newPermutation.splice(p, 0, nums[i]);
        // If the new permutation is the same length as nums, push it to result, else push it to permutations
        newPermutation.length === nums.length ? result.push(newPermutation) : permutations.push(newPermutation);
      }
    }
  }
  // Return the result
  return result;
}

// Tests: 
const arr1 = [1, 3, 5];
console.log(find_permutations(arr1));

// Review
const permute = function(nums) {
  // Initialize result with empty array
  let result = [[]];
  // Iterate over nums
  for (let i = 0; i < nums.length; i += 1) {
    // Initialize empty array to hold all permutations with current number
    const currentPerms = [];
    // Loop through result
    result.forEach((res, ind) => {
      // Add the current number to every possible index of current result array
      for (let j = 0; j < res.length + 1; j += 1) {
        const resCopy = [...res];
        resCopy.splice(j, 0, nums[i]);
        currentPerms.push(resCopy);
      }
    });
    // Reset result to current perms
    result = currentPerms;
  }
  return result;
};

// nums [1, 2] result [[1]] CP [[1, 2], [2, 1]] 
const arr2 = [1, 6, 3];
console.log(permute(arr2));