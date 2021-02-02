/* You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police. */

const rob = function(nums) {
  // Initialize max money we can make to 0
  let maxMoney = 0;
  // Iterate over the array
  for (let i = 0; i < nums.length; i += 1) {
    // Create a set to store which houses/indices were visited
    const visited = new Set();
    visited.add(i);
    // Initialize our current money to nums at i
    let currentMoney = nums[i];
    maxMoney = Math.max(currentMoney, maxMoney);
    // Iterate over remaining nums two at a time until the end of the array
    let j = i + 2;
    while (j < nums.length) {
      if (!isAdjacent(visited, j, nums.length)) {
        currentMoney += nums[j];
        maxMoney = Math.max(currentMoney, maxMoney);
        visited.add(j);
      }
      // Add two in all conditions except for if that will exceed length and not adjacent
      j = j + 2 >= nums.length ? j + 1 : j + 2;
    }
  }
  return maxMoney;
}

// Helper to check if index is adj to one we visited
const isAdjacent = function(visited, j, length) {
  // Initialize adj to false
  let adjacent = false;
  // Iterate over visited and see if j is adjacent to any indices
  visited.forEach(i => {
    // If i is first and j is last, they're adjacent
    if (i === 0 && j === length - 1) adjacent = true;
    // If they're within 1 of eachother, theyre adjacent
    else if (Math.abs(i - j) <= 1) adjacent = true;

  });
  return adjacent;
}

// DP solution that works much better
const robAlt = function(nums) {
  // Base case if only i element in nums
  if (nums.length <= 1) return nums[0] || 0;
  // Create two memos, one for odd, and one for even adjacent houses
  const memOdd = [nums[0]];
  const memEven = [0, nums[1]];
  // Iterate over nums starting from odd memo
  for (let i = 1; i < nums.length - 1; i += 1) {
    memOdd[i] = Math.max(nums[i] + (memOdd[i - 2] || 0), memOdd[i - 1]);
  }
  // Iterate over nums starting from even memo
  for (let j = 2; j < nums.length; j += 1) {
    memEven[j] = Math.max(nums[j] + (memEven[j - 2] || 0), memEven[j - 1]);
  }
  // Return the max of the last els of each memo
  return Math.max(memOdd.pop(), memEven.pop());
}

// Tests:
const arr1 = [2, 1, 4, 2, 4];
const arr2 = [2,3,2];
const arr3 = [1,2,3,1];
const arr4 = [0];
const arr5 = [1,3,1,3,100];
console.log(robAlt(arr2));