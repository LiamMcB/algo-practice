/* GTCI Cyclic Sort 3: Given unsorted array of numbers from 1-n, find the missing numbers */

// O(nlogn) time O(n) space but could be O(1) if i mutated input array
function findAllMissing(nums) {
  const missingNumbers = [];
  const sorted = [...nums].sort((a, b) => a - b);
  // Index just lets us iterate over sorted array
  let ind = 0;
  // Current num keeps track of which number were on between 1-n
  let currentNum = 1;
  while (ind < nums.length) {
    if (sorted[ind] !== currentNum) {
      missingNumbers.push(currentNum);
      currentNum += 1;
      continue;
    }
    while (sorted[ind + 1] === sorted[ind]) {
      ind += 1;
    }
    ind += 1;
    currentNum += 1;
  }
  // At the end, if the last num isnt the index, add it to missing numbers
  if (sorted[ind - 1] !== ind) missingNumbers.push(currentNum);
  return missingNumbers;
}

// Tests:
const arr1 = [2, 4, 1, 2];
console.log(findAllMissing(arr1));
const arr2 = [2, 3, 1, 8, 2, 3, 5, 1];
console.log(findAllMissing(arr2));
console.log(findAllMissing([2, 3, 2, 1]));

// O(n) sort 
// function countSort(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     let j = arr[i] - 1;
//     if (arr[i] !== arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     } else {
//       i += 1;
//     }
//   }
//   return arr;
// }
// console.log(countSort(arr1));
// console.log(countSort(arr2));