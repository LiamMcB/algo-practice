/* Coin Sum: Given an array of coin values and a sum, determine how many different combinations
of coins add up to that sum and return it */

const coinSum = function(coins, sum) {
  // Base case if sum is 0 or coins is empty
  if (sum === 0 || !coins.length) return 0;
  // Initialize array filled with null of sum length to hold all number of paths to each sum 
  const pastSums = Array(sum + 1).fill(0);
  // Iterate over coins
  for (let j = 0; j < coins.length; j += 1) {
    // Iterate over sum from 1 to sum
    for (let i = 1; i <= sum; i += 1) {
      // If the coin is less than or equal to the sum
      if (coins[j] < i) {
        // Add number of paths to index of pastSums
        pastSums[i] += pastSums[i - coins[j]];
      }
      // If the coin and sum are same
      else if (coins[j] === i) pastSums[i] += 1;
    }
  }
  // Return the number of paths from the sum
  return pastSums[sum];
}

// Tests:
const coins = [1, 2, 5, 10, 25, 50, 100, 200];
console.log(coinSum(coins, 5));