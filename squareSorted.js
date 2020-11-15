/* GTCI Two Pointers 3: Given a sorted array, create a new array containing squares 
of all the number of the input array in the sorted order. */

// O(nlogn) time O(n) space
// function squareSorted(arr) {
//   const squares = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     squares.push(arr[i] ** 2);
//   }
//   return squares.sort();
// }

// O(n) time O(n) space
function squareSorted(arr) {
  const squares = [];
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const leftSquare = arr[left] ** 2;
    const rightSquare = arr[right] ** 2;
    if (leftSquare > rightSquare) {
      squares.unshift(leftSquare);
      left += 1;
    } else {
      squares.unshift(rightSquare);
      right -= 1;
    }
  }
  return squares;
}

// Tests:
const arr1 = [-2, -1, 0, 2, 3];
const arr2 = [-3, -1, 0, 1, 2];
console.log(squareSorted(arr1));
console.log(squareSorted(arr2));