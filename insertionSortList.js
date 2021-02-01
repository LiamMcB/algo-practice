/* Given a linked list's head, sort it using insertion sort */

// Insertion sort of array
const insertionSort = function(arr) {
  const sorted = [arr[0]];
  // Iterate over arr
  for (let i = 1; i < arr.length; i += 1) {
    const current = arr[i];
    let j = i - 1;
    // Iterate left from the current index
    while (j >= -1) {
      if (current < sorted[j]) {
        j -= 1;
      } else {
        sorted.splice(j + 1, 0, current);
        break;
      }
    }
  }
  return sorted;
}

// Tests:
const arr1 = [3, 2, 9, 1, 4];
console.log(insertionSort(arr1));