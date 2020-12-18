/* Minimum Window Substring: Given two strings s and t, return the minimum window in s which will contain all the characters in t
in the same order as they appear in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s. */
// O(n^2) time, O(n^2) space
const minWindow = function(s, t) {
  // Declare variables for substring and array of chars in t substring
  let shortestSubstring = s;
  const subStringChars = t.split('');
  let hasAllChars = false;
  // Iterate over the string
  for (let i = 0; i < s.length; i += 1) {
    // Create array of characters in t
    const chars = [...subStringChars];
    // Initialize string to hold current substring
    let currentSubstring = '';
    // Iterate over remaining characters in the string
    for (let j = i; j < s.length; j += 1) {
      // Add s[j] to substring
      currentSubstring += s[j];
      // If we find the first character in t
      if (s[j] === chars[0]) {
        // Shift it out of the chars array
        chars.shift();
        // If chars is empty and currentSubstring has less characters than the shortest substring
        if (!chars.length && currentSubstring.length < shortestSubstring.length) {
          shortestSubstring = currentSubstring;
          hasAllChars = true;
          break;
        }
      }
    }
  }
  // Return shortest substring if 
  return hasAllChars ? shortestSubstring : '';
}

// Tests:
const s1 = "ADOBECODEBANC";
const t1 = "ABC";
console.log(minWindow(s1, t1));