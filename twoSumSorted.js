/* GTCI Two-Pointers Intro: Given an array of sorted numbers and a target sum, 
find a pair in the array whose sum is equal to the given target. */

function twoSumSorted(arr, target) {
  let left = 0;
	let right = arr.length - 1;
	while (right > left) {
		const sum = arr[right] + arr[left];
		if (sum === target) {
			return true;
		} else if (sum > target) {
			right -= 1;
		} else if (sum < target) {
			left += 1;
		}
  }
  return false;
}

// Tests:
const arr = [-2, 0, 3, 4, 7, 9];
console.log(twoSumSorted(arr, 2));
console.log(twoSumSorted(arr, 7));
console.log(twoSumSorted(arr, 17));
