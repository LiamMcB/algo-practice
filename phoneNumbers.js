/* Given a string containing digits from 2-9 inclusive, return all possible letter combinations
that the number could represent (like with a phone number, where 2 is a, b, or c) */
// O(4^n) time, O(n) space
const phoneNumber = function(digits) {
  // Create object to map digits to strings
  const digToChar = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }
  // Initialize resulting possible phone numbers - strings
  let possibilities = [''];
  // Iterate over digits
  for (let i = 0; i < digits.length; i += 1) {
    // Get all allowed characters for current digit
    const chars = digToChar[digits[i]];
    // Create array to hold all combos with allowed chars
    const combos = [];
    // Iterate over possibilities
    possibilities.forEach(pos => {
      // Iterate over allowed chars
      for (let j = 0; j < chars.length; j += 1) {
        const currentPossibility = pos.concat(chars[j]);
        combos.push(currentPossibility);
      }
      // Set possibilities equal to the new combos
      possibilities = combos;
    })
  }
  // Return possibilities, if an array with empty string, return empty array
  return possibilities[0] === '' ? [] : possibilities;
}

// Tests:
const num1 = '23'; 
const num2 = '';
console.log(phoneNumber(num1));