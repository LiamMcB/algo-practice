/* Given n pairs of parentheses, write a function to generate all combinations of well-formed, balanced parentheses. */
// ie n = 2 => ['(())', '()()']
// O(2^n) time, O(2^n) space
const generateParens = function(n) {
  // Initialize result to hold parentheses
  const result = [];
  // Helper function to add parentheses
  const addParens = function(current, open, close) {
    // If both the number of open and closed parens is 0, return the result with our pushed parens
    if (open === 0 && close === 0 && current.length) return result.push(current);
    // If there are more open parens left
    if (open) addParens(current + '(', open - 1, close);
    // If there are more closed parens left
    if (close > open) addParens(current + ')', open, close - 1);
  }
  // Invoke helper function on result
  addParens('', n, n)
  // Return the result
  return result;
}

// Tests:
console.log(generateParens(4));