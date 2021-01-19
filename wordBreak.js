/* Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words. */
// O(n^2) time, O(n) space
const wordBreak = function(s, wordDict) {
  // Initialize index to iterate over s
  let index = 0;
  // Initialize variable to hold where index can't return to
  let noReturn = 0;
  // Iterate while s has letters in it
  while (index < s.length) {
    // Variable to hold whether substring existed in dictionary
    let substrExist = false;
    // Iterate over word dict
    for (let i = 0; i < wordDict.length; i += 1) {
      // See if first char of s and word dict are the same
      if (s[0] === wordDict[i][0]) {
        // Get slice of s with same length as word
        const slice = s.slice(0, wordDict[i].length);
        // Check if slice and dict word are the same
        if (slice === wordDict[i]) {
          noReturn = index; // So while loop doesn't cycle
          index += slice.length;
          substrExist = true;
          break;
        }
      }
    }
    // If substring of s, not in dict and not infinitely cycling, decrement index
    if (!substrExist && index - 1 > noReturn) index -= 1;
    else if (!substrExist && index - 1 <= noReturn) return false;
  }
  // If we've reached the end of the string, return true
  return true;
}

// Tests:
const dict1 = ['pen', 'apple'];
console.log(wordBreak('applepenapple', dict1)); 
const dict2 = ["car","ca","rs"];
console.log(wordBreak('cars', dict2));
const dict3 = ["cats","dog","sand","and","cat"];
console.log(wordBreak('catsandog', dict3))
