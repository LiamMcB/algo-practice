/* GTCI Fast/Slow Pointers 3: Determine if a number is happy by repeatedly squaring it's digits and seeing if they eventually
sum to 1 */

// O(logn) space for advanced math reasons, O(1) time
function happyNumber(num) {
  // Have fast and slow pointers start at number and next number
  let slow = num;
  let fast = squareAdd(num);
  // Iterate until theyre the same
  while (slow !== fast) {
    // If fast sums to 1, return true
    if (fast === 1) return true;
    // Else set slow 1 ahead and fast 2 ahead
    slow = squareAdd(slow);
    fast = squareAdd(squareAdd(fast));
  }
  // If we reach a point where they're the same, return false
  return false;
}

// Helper function to square and add digits
function squareAdd(num) {
  // Convert number to string
  let strNum = num.toString();
  // Sum to hold result
  let sum = 0;
  // Iterate over string digits and add to sum
  for (let i = 0; i < strNum.length; i += 1) {
    // Convert digit to int and add square
    sum += Number(strNum[i]) ** 2;
  }
  // Return the sum
  return sum;
}

// Tests:
console.log(happyNumber(23));
console.log(happyNumber(12));