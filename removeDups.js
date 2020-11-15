/* GTCI Two-Pointers 2: Given array of sorted numbers, 
remove all duplicates from it and return length of subarray without using extra space */

// O(n) time O(1) space
function removeDups(arr) {
	let slow = 0;
	let fast = 1;
	let length = 0;
	if (!arr[fast]) {
		return 1;
	}
	while (fast < arr.length) {
		if (arr[fast] === arr[slow]) {
			fast += 1;
		} else {
			slow = fast;
			fast += 1;
			length += 1;
		}
	}
	return length + 1;
}

// Tests:
const arr1 = [2, 2, 3, 3, 4, 11, 17];
const arr2 = [4, 10, 19, 23, 23];
console.log(removeDups(arr1));
console.log(removeDups(arr2));