/* Given a list of non-negative integers nums, arrange them such that they form the largest number.

Note: The result may be very large, so you need to return a string instead of an integer. */

const largestNumber = function(nums) {
  // Initialize result string
  let largest = '';
  // Sort array by largest first digit, then if same, largest next digit and so on
  nums.sort(compare);
  // Iterate over sorted array and add each number to largest string
  nums.forEach((num) => {
    largest += num;
  });
  return largest;
}

// Sort compare function
const compare = function(a, b) {
  let modA = a;
  let modB = b;
  const innerCompare = function(a, b, modA, modB) {
    if (String(modB)[0] < String(modA)[0]) return -1;
    else if (String(modB)[0] === String(modA)[0]) {
      // Get rid of first char of each number
      const newA = Number(String(modA).substring(1));
      const newB = Number(String(modB).substring(1));
      // If neither new a or new b has chars left, return 0
      if (!newA && !newB) return 0;
      // If no new a, run compare function on old a and newB and same with b
      else if (!newA) return innerCompare(a, b, a, newB);
      else if (!newB) return innerCompare(a, b, newA, b);
      // Return invocation of compare with new numbers
      return innerCompare(a, b, newA, newB);
    }
    else return 1;
  }
  return innerCompare(a, b, modA, modB);
}

// Tests:
const arr1 = [10,2];
const arr2 = [3,30,34,5,9]; // a=3, b=30
const arr3 = [1];
const arr4 = [34323,3432]; // newA=3 newB='', a=23, b=2
/*
a: 34323 b: 3432, modA: 23 modB: 2, newA: 3 newB: '' => compare(34323, 3432, 3, 3432)
a: 34323 b: 3432, modA: 3 modB: 3432, newA: '' newB: 432 => compare(34323, 3432, 34323, 432)
a: 34323 b: 3432, modA: 34323 modB: 432 => 1
*/
const arr5 = [142, 14]; // should be 14214
const arr6 = [120,12];
/* 
a: 120 b: 12, modA: 20 modB: 2, newA: 0 newB: 0 => 0
*/
console.log(largestNumber(arr4));

// Above works for most cases, except arr6, better solution below
const largestNumberAlt = function(nums) {
  let largest = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return largest;
}
console.log(largestNumberAlt(arr6));