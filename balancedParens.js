/* GTCI Subsets 5: For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses. */
// O(n*2^n) time O(2^n) space
const generateParens = function(num) {
  // If num is less than 1, return array of empty string
  if (num < 1) return [''];
  // Initialize parens to be an empty array of strings
  let parens = ['()'];
  // Iterate until num 
  for (let i = 1; i < num; i += 1) {
    // Empty array to push parens to
    const currentParens = [];
    // Iterate over the current parens
    for (let j = 0; j < parens.length; j += 1) {
      // Iterate over the length of the string and place parens at every position
      for (let w = 1; w <= parens[j].length; w += 1) {
        let subset = parens[j].substring(0, w) + '()' + parens[j].substring(w);
        // Push the new subset to current parens
        currentParens.includes(subset) ? null : currentParens.push(subset);
      }
    }
    // Set parens equal to the parens we just populated
    parens = currentParens;
  }
  return parens;
}

// Tests:
console.log(generateParens(4));