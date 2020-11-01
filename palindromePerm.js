/* 1.4 Given a string, write a function to check if it is a permutation of a palindrome */

// O(n) time O(n) space
function palindromePerm(str) {
  // Base case if length 1 or 0
  if (str.length < 2) return true;
  // Make string lowercase
  str = str.toLowerCase();
  const freqs = {};
  // Iterate over string and populate freqs
  for (let i = 0; i < str.length; i += 1) {
    // Ensure no whitespace
    if (str[i] !== ' ') {
      if (!freqs[str[i]]) freqs[str[i]] = 0;
      freqs[str[i]] += 1;
    }
  }
  // Declare variables to hold even and odd frequencies
  let even = 0;
  let odd = 0;
  // Iterate over frequencies and increment even/odd
  for (let char in freqs) {
    if (freqs[char] % 2 === 0) even += 1;
    else odd += 1;
  }
  // Check even and odd amounts
  if ((odd === 1 && even >= 1) || (odd === 0 && even >= 1)) return true;
  return false;
}

console.log(palindromePerm('abab'));
console.log(palindromePerm('Tact Coa'));
console.log(palindromePerm('hector'));
