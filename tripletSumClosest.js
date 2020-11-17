/* GTCI Two-Pointers 5: Given an array of unsorted numbers and a target number, find the 
sum of the triplet closest to the target. */

// O(n^2) time O(n) space
function tripletSumClosest(arr, target_sum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = target_sum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) { // we've found a triplet with an exact sum
        return targetSum - target_diff; // return sum of all the numbers
      }

      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
        smallest_difference = target_diff; // save the closest difference
      }
      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }


      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return target_sum - smallest_difference;
}

// Tests:
const arr1 = [-2, 0, 1, 2];
console.log(tripletSumClosest(arr1, 2));
const arr2 = [-3, -1, 1, 2];
console.log(tripletSumClosest(arr2, 1));