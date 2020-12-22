/* Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), 
design an algorithm to find the maximum profit.
Input: number[], Output: number
Note that you cannot sell a stock before you buy one. */
// O(n) time O(1) space
const maxProfit = function(prices) {
  let profit = -Infinity;
  let minPrice = prices[0];
  // Iterate over prices
  for (let i = 0; i < prices.length; i += 1) {
    // Find max of current max profit and result of subtracting current price from min
    profit = Math.max(profit, prices[i] - minPrice);
    // IF the current price is less than the min, reset the min
    minPrice = Math.min(minPrice, prices[i]);
  }
  // Return the maximum profit
  return profit;
}

// Tests:
const prices1 = [7,1,5,3,6,4];
console.log(maxProfit(prices1));
const prices2 = [7,6,4,3,1];
console.log(maxProfit(prices2));