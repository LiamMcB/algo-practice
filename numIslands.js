/* NumIslands: Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water. */
// O(n) time O(n) space
const numIslands = function(grid) {
  // Initialize count to be 0 to hold number of islands
  let count = 0;
  // Iterate over grid 
  for (let i = 0; i < grid.length; i += 1) {
      // Iterate over elements in specific array
      for (let j = 0; j < grid[i].length; j += 1) {
          // If the current number is 1, do a numIslands search, changing each number I find to 0
          if (grid[i][j] === '1') {
              islandSearch(grid, i, j, count);
              count += 1;
          }
      }
  }
  return count;
};

// Helper function to count number of islands
const islandSearch = function(grid, i, j, count) {
  // Row before, same column
  if (grid[i - 1]) {
      if (grid[i - 1][j] === '1') {
          grid[i - 1][j] = '0';
          islandSearch(grid, i - 1, j, count);
      }
  }
  // Row after, same column
  if (grid[i + 1]) {
      if (grid[i + 1][j] === '1') {
          grid[i + 1][j] = '0';
          islandSearch(grid, i + 1, j, count);
      }
  }
  // Same row, column before
  if (grid[i][j - 1]) {
      if (grid[i][j - 1] === '1') {
          grid[i][j - 1] = '0';
          islandSearch(grid, i, j - 1, count);
      }
  }
  // Same row, column after
  if (grid[i][j + 1]) {
      if (grid[i][j + 1] === '1') {
          grid[i][j + 1] = '0';
          islandSearch(grid, i, j + 1, count);
      }
  }
}

// Tests:
const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
console.log(numIslands(grid1));
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid2));