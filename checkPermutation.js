/* 1.2 Given 2 strings, write a method to decide if one is a permutation of the other */

// O(n) time, O(n) space
function checkPermutation(first, second) {
  // Base case if they dont have same length
  if (first.length !== second.length) return false;
  const freqs = {};
  for (let i = 0; i < first.length; i += 1) {
    if (!freqs[first[i]]) freqs[first[i]] = 0;
    freqs[first[i]] += 1;
  }
  for (let j = 0; j < second.length; j += 1) {
    if (!freqs[second[j]]) return false;
    else freqs[second[j]] -= 1;
  }
  for (let char in freqs) {
    if (freqs[char] !== 0) return false;
  }
  return true;
}

// O(nlogn) time, O(n + logn) = O(n) space
function checkPermutationSort(first, second) {
  // Convert first and second to arrays, sort, back to string
  const str1 = first.split('').sort().join('');
  const str2 = second.split('').sort().join('');
  // Return whether the sorted strings are equal
  return str1 === str2;
}

console.log(checkPermutationSort('hello', 'ohell'));
console.log(checkPermutationSort('hello', 'ohellno'));
console.log(checkPermutationSort('nickelback', 'nnickelback'));
console.log(checkPermutationSort('', ''));
