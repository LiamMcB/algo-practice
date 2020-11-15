/* GTCI Sliding Window 3: Given a string, find the length of the longest substring with no more than k distinct characters */

// O(n) time, O(n) space
const longestSubWKDistinct = function(str, k) {
  let maxLength = 0;
	let windowStart = 0;
	const currentChars = {size: 0};
	for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
		if (!currentChars[str[windowEnd]]) {
    currentChars[str[windowEnd]] = 0;
    currentChars.size += 1;
    }
    currentChars[str[windowEnd]] += 1;
    while (currentChars.size > k) {
      currentChars[str[windowStart]] -= 1;
      if (currentChars[str[windowStart]] === 0) {
        delete currentChars[str[windowStart]];
        currentChars.size -= 1;
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};