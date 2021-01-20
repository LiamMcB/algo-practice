/* Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces. */
// O(n) time O(n) space
const reverseWords = function(s) {
  // Remove leading, trailing, and extra spaces in string and turn to array
  const strArray = removeSpaces(s);
  // Use join and reverse to create output string
  return strArray.reverse().join(' ');
}

// Helper function to remove extra spaces and return array of words
const removeSpaces = function(s) {
  // Initialize empty array for result
  const result = [];
  // Iterate over chars in s
  let i = 0;
  let currentWord = '';
  while (i < s.length) {
    if (s[i] !== ' ') {
      currentWord += s[i];
    } else {
      // Add the current word to result if it isnt empty
      if (currentWord[0]) result.push(currentWord);
      currentWord = '';
    }
    // Increment i
    i += 1;
  }
  if (currentWord[0]) result.push(currentWord);
  return result;
}

// Tests:
const str1 = "the sky is blue";
const str2 = "  hello world  ";
console.log(reverseWords(str1));