/* Calculate the sum of two integers a and b without using + or - */

// O(logn) time where n is the maximum number between a and b
// Process: b is the carry value shifted 1 left, a holds the result of running XOR on both (like summing without carrying over 1)
function getSum(a, b) {
  // If b is 0, return a
  if (b === 0) {
    return a;
  } else {
    // Invoke the function with a new carry and the result of XORing a and b
    return getSum(a ^ b, (a & b) << 1);
  }
}

// Tests:
console.log(getSum(4, 6));
console.log(getSum(3, 18));