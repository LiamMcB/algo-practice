/* GTCI Top K Elements 1: Given an unsorted array of numbers, find the ‘K’ largest numbers in it. */
// O(k*n) time O(n) space, better solution would be to implement a min heap and replace min, but implementing heap methods would take time
const topKNumbers = function(nums, k) {
	// Base case if k is greater than the array length, just return nums
	if (k >= nums.length) return nums;
// Initialize an array to hold top numbers
const topNums = [];
// Iterate k times, removing largest number from nums and placing into topNums each time
const copy = [...nums];
 for (let i = 0; i < k; i += 1) {
	// Max’ first value is the max and second is the index in which it occurs
	let max = [-Infinity, 0];
	// Iterate over nums and compare to max, swap if larger
	for (let j = 0; j < copy.length; j += 1) {
		if (copy[j] > max[0]) {
			max[0] = copy[j];
			max[1] = j;
		}
	}
// Push the max to the topNums array and delete the index from copy
topNums.push(max[0]);
copy.splice(max[1], 1);
}
// Return the top k numbers
return topNums;
}

// Tests:
const arr1 = [3, 1, 5, 12, 2, 11];
console.log(topKNumbers(arr1, 3));