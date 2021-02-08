/* Given a number line from 0 to n and
a string denoting a sequence of moves,
determine the number of subsequences
of those moves that lead from a
given point x to end at another point
y. Moves will be given as a sequence
of l and r instructions. */

// n is length of number line, x and y are start and end points on the number line
const countUniqueSubsequence = function(directions, n, x, y) {
  // Get difference between x and y
  const dist = y - x;
  // Assign positive and negative value to directions
  const vals = {
    'l': -1,
    'r': 1
  }
  // Initialize number of subsequences to 0
  let subs = 0;
  // Array to keep track of all substrings for debugging
  const subStrings = [];
  // Helper function to count number of subsequences
  const countSubs = function(ind, sum, numValue, currentSub) {
    // Get current direction value
    const dirValue = vals[directions[ind]];
    // IF the sum equals the difference between x and y, increment number of subs
    if (sum === dist) {
      subs += 1;
      subStrings.push(currentSub);
    }
    // If no more directions left, return
    if (ind === directions.length) return;
    // Take current direction
    if (numValue + dirValue <= n && numValue + dirValue >= 0) {
      countSubs(ind + 1, sum + dirValue, numValue + dirValue, currentSub + directions[ind]);
    }
    // Leave current direction
    countSubs(ind + 1, sum, numValue, currentSub);
  }
  // Invoke the helper at the 0th index
  countSubs(0, 0, x, '');
  // Return the number of subsequences
  return subStrings.length;
}

// Tests:
console.log(countUniqueSubsequence('rrlrlr', 6, 1, 2));