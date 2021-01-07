/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once. */
// O()
const groupAnagrams = function(strs) {
  // Declare const to hold list of anagrams
  let anagrams = [[strs[0]]];
  // Iterate over the strings, checking with the list of anagrams
  for (let i = 1; i < strs.length; i += 1) {
    let currentStr = strs[i];
    let anaCopy = [...anagrams];
    let hasAnagrams = false;
    // Iterate over all anagrams
    anagrams.forEach((ana, index) => {
      // Grab first string in anagram array
      const firstAna = ana[0];
      // See if current string and first anagram are anagrams
      if (isAna(currentStr, firstAna)) {
        anaCopy[index].push(currentStr);
        hasAnagrams = true;
      } 
    });
    // IF the current string doesnt have anagrams, push it to the end of anacopy
    if (!hasAnagrams) anaCopy.push([currentStr]);
    anagrams = anaCopy;
  }
  return anagrams;
}
// O(nlogn) time O(n) space
const isAna = function(str1, str2) {
  // Sort the two strings
  let sort1 = str1.split('').sort().join('');
  let sort2 = str2.split('').sort().join('');
  return sort1 === sort2;
}

// Slightly more efficient group anagrams O(N*KlogK) time O(N*K) space, where K is the length of each str
const groupAnagramsSort = function(strs) {
  // Map with keys of sorted str and value of all its anagrams in strs
  const map = {};
  // Iterate over the strings
  for (let i = 0; i < strs.length; i += 1) {
    // Sort the current str
    const sorted = strs[i].split('').sort().join('');
    // If the map doesnt have sorted as a key, add it
    if (!map[sorted]) map[sorted] = [];
    // Push our current string to the array key
    map[sorted].push(strs[i]);
  }
  return Object.values(map);
}

// Tests:
const str1 = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagramsSort(str1))