/* GTCI Subsets 4: Given a string, find all permutations preserving character sequence but changing case */
// O(n*2^n) time O()
const stringPermsByCase = function(str) {
  let permutations = [''];
  // Iterate over chars in str
  for (let i = 0; i < str.length; i += 1) {
    // Current character
    const currentChar = str[i];
    // Array to hold versions of permutations with pushed char
    let extendedPerms = [];
    // Iterate over all permutations
    for (let j = 0; j < permutations.length; j += 1) {
      // For each permutation, push a lower case and uppercase version of current char if its a char
      if (currentChar.match(/[a-z]/i)) {
        extendedPerms = extendedPerms.concat([permutations[j] + currentChar.toLowerCase(), permutations[j] + currentChar.toUpperCase()]);
      }
      // Else just push the number to each permutation
      else {
        extendedPerms.push(permutations[j] + currentChar);
      }
    }
    // Concatenate the extended permutations to permutations list
    permutations = extendedPerms;
  }
  return permutations;
}

// Tests:
const str1 = 'ad52';
console.log(stringPermsByCase(str1));
const str2 = "ab7c";
console.log(stringPermsByCase(str2));