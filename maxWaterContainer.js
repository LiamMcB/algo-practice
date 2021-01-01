/* Given an array of numbers representing y coordinates where indices are x coordinates, return the maximum 
area of water formed by connecting any two points in a straight line (no slants) */
// O(n^2) time O(1) space 
const maxArea = function(height) {
  // Initialize a maximum area to 0
  let area = 0;
  // Iterate over the heights
  for (let i = 0; i < height.length; i += 1) {
    // Initialize end to be the end of the array
    let end = height.length - 1;
    // While end is greater than start (which is i)
    while (end > i) {
      // Calculate current area
      let currentHeight = Math.min(height[end], height[i]);
      let currentArea = currentHeight * (end - i);
      // Set area to max of current and largest found so far
      area = Math.max(currentArea, area);
      // Decrement end
      end -= 1;
    }
  }
  return area;
}
// O(n) time O(1) space
const maxAreaAlt = function(height) {
  // Initialize a maximum area to 0
  let area = 0;
  // Initialize start and end
  let start = 0;
  let end = height.length - 1;
  // Iterate while end is greater than start
  while (end > start) {
    // Calculate current area
    let currentHeight = Math.min(height[end], height[start]);
    let currentArea = currentHeight * (end - start);
    // Set area to max of current and largest found so far
    area = Math.max(currentArea, area);
    // If starts height is less than ends, increment start, else decrement end
    if (height[start] < height[end]) start += 1;
    else end -= 1;
  }
  return area;
}
// Tests:
const arr1 = [1,1];
const arr2 = [4,3,2,1,4];
const arr3 = [1,2,1];
const arr4 = [1,8,6,2,5,4,8,3,7];
console.log(maxAreaAlt(arr4));