/* Coin Change: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
coins number[], amount number, return number 
You may assume that you have an infinite number of each kind of coin. */

const coinChange = function(coins, amount) {
  // Sort coins to be in ascending order
  coins.sort((a, b) => a - b);
  // Invoke helper function with coins, amount, and fewestCoins
  let fewestCoins = findFewestCoins(coins, amount, 0);
  // Return fewest coins
  return fewestCoins;
}

const findFewestCoins = function(coins, amount, fewestCoins) {
  // If we hit an amount of 0, return the fewest coins count
  if (amount === 0) return fewestCoins;
  // Base case if the amount is smaller than the smallest coin value
  if (amount < coins[0]) return -1;
  // Else iterate over coins in reverse order until amount is greater than the coin
  let index = coins.length - 1;
  while (coins[index] > amount) {
    index -= 1;
  } 
  // Subtract the index from amount, and invoke function with smaller slice of coins
  let newAmount = amount - coins[index];
  return findFewestCoins(coins.slice(0, index + 1), newAmount, fewestCoins + 1);
}

// Alternate solution from leetcode, O(n^2) time O(n) space
const coinChangeDynamic = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // If the current amount is greater than or equal to the coin value, set the array value
      if (i - coin >= 0) {
        // The second parameter uses plus 1 since were adding the coin we just subtracted
        dp[i] = Math.min(
          dp[i],
          dp[i - coin] + 1,
        );
      }
    }
  }
  console.log(dp)
  return dp[amount] === Infinity ? -1 : dp[amount];
};

// Tests:
const coins1 = [1, 2, 5];
console.log(coinChangeDynamic(coins1, 11));
const coins2 = [1, 2, 3];
console.log(coinChange(coins2, 3));
const coins3 = [1];
console.log(coinChange(coins3, 0));
const coins4 = [2,5,10,1];
console.log(coinChange(coins4, 27));
const coins5 = [186,419,83,408];
console.log(coinChange(coins5, 6249));
