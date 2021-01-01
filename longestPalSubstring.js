/* Longest Palindromic substring: Given a string s, return the longest palindromic substring within that string. */
// O(n^3) time O(1) space
const longestPalindrome = function(s) {
  // Initialize longest substring to hold the result
  let longestSubstring = '';
  // Iterate over the string one char at a time
  for (let i = 0; i < s.length; i += 1) {
    // Declare a start and end of the substring
    let start = i;
    let end = s.length - 1;
    // While end is greater than or equal to start, check palindromes and decrement end
    while (end >= start) {
      let currentSub = s.substring(start, end + 1);
      // Check if current substring is a palindrome, if it is, break out of while loop
      if (isPal(currentSub)) {
        // Replaace longest substring with the substring with greater length
        longestSubstring = longestSubstring.length < currentSub.length ? currentSub : longestSubstring;
        break;
      } else {
        // Else decrement end
        end -= 1;
      }
    }
  }
  return longestSubstring;
}

// Helper function to check if string is palindrome
const isPal = function(s) {
  // Variables for beginning and end of palindrome
  let start = 0;
  let end = s.length - 1;
  // Iterate until start equals end
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    // Increment start and decrement end
    start += 1;
    end -= 1;
  }
  // Return true
  return true;
} 

// Tests:
const str1 = 'babad';
const str2 = 'cbbd';
const str3 = 'ac';
console.log(longestPalindrome(str3));