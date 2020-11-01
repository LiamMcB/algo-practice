/* 1.1 Implement an algorithm to determine if a string has all unique characters */

// Time O(n) Space O(n)
function isUnique(str) {
  const chars = new Set();
  for (let i = 0; i < str.length; i += 1) {
    if (chars.has(str[i])) return false;
    chars.add(str[i]);
  }
  return true;
}

// Time O(n) Space O(1)
function isUniqueBetter(str) {
  // If str has length greater than 128, return false
  if (str.length > 128) return false;
  // Create array to hold 128 ascii characters
  const ascii = new Array(128);
  // Iterate over string
  for (let i = 0; i < str.length; i += 1) {
    // Get char code at current char
    const code = str.charCodeAt(i);
    // If the array has this as true, return false
    if (ascii[code]) return false;
    // Else add it to array
    ascii[code] = true;
  }
  return true;
}

console.log(isUniqueBetter('razor'));
console.log(isUniqueBetter('fire'));
console.log(isUniqueBetter(''));
console.log(isUniqueBetter('oh hello'));
