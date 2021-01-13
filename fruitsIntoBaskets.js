/* Given an array of characters where each character represents a fruit tree, you are given two baskets, 
and your goal is to put maximum number of fruits in each basket. 
The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. 
You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type. */
// O(n^2) time O(n) space
const fruitsIntoBaskets = function(fruits) {
  // Initialize variable to hold max fruits
  let maxFruits = 0;
  // Iterate over fruits
  for (let i = 0; i < fruits.length; i += 1) {
    // Create two baskets to hold fruits
    const b1 = [];
    const b2 = [];
    // Put the current fruit into basket 1
    b1.push(fruits[i]);
    let numFruits = 1;
    // Iterate over remaining fruits
    for (let j = i + 1; j < fruits.length; j += 1) {
      // If the fruit equals the 0th fruit in either basket, push it there and increment number of fruits
      if (b1[0] === fruits[j]) {
        b1.push(fruits[j]);
        numFruits += 1;
      } else if (b2[0] === fruits[j] || !b2[0]) {
        b2.push(fruits[j]);
        numFruits += 1;
      } else {
        break;
      }
    }
    maxFruits = Math.max(maxFruits, numFruits);
  }
  return maxFruits;
}

// Tests:
const f1 = ['A', 'B', 'C', 'A', 'C'];
const f2 = ['A', 'B', 'C', 'B', 'B', 'C'];
console.log(fruitsIntoBaskets(f2));

// O(n) time O(1) space since max of 3 fruits in freq map
const fruitsIntoBasketsAlt = function(fruits) {
  // Finding longest subarray with 2 distinct characters
  let windowStart = 0;
  let maxFruits = 0;
  const fruitFreq = {};
  // Slide right side of window towards end of arrat
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd += 1) {
    // If the current fruit is not in the frequency map, set it to 0, then add 1
    if (!fruitFreq[fruits[windowEnd]]) fruitFreq[fruits[windowEnd]] = 0;
    fruitFreq[fruits[windowEnd]] += 1;
    // Slide start to decrease size of subarray while fruit frequency has more than 2 fruits
    while (Object.keys(fruitFreq).length > 2) {
      // Guaranteed left fruit will be in fruitFreq, since were sliding up
      fruitFreq[fruits[windowStart]] -= 1;
      if (fruitFreq[fruits[windowStart]] === 0) delete fruitFreq[fruits[windowStart]];
      // Increment max fruits
      windowStart += 1;
    }
    // Set max fruits equal to max of itself and window length
    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }
  return maxFruits;
}

console.log(fruitsIntoBasketsAlt(f2));