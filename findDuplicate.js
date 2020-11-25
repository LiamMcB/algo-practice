/* GTCI Cyclic sort 4: Given an unsorted array of numbers 1-n, find the one duplicate number without using extra space */

function findDuplicate(nums) {
  let i = 0;
  // Loop through nums
  while (i < nums.length) {
    // If current num is not in sorted place
    if (nums[i] !== i + 1) {
      j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
      } else { // we have found the duplicate
        return nums[i];
      }
    // If it is in sorted place, go to next num
    } else {
      i += 1;
    }
  }
  return -1;
}

// Tests:
const arr1 = [1, 4, 4, 3, 2];
console.log(findDuplicate(arr1));
console.log(findDuplicate([2, 1, 3, 3, 5, 4]));