/* Rotate Image: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). 
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
--Do it in place--
*/
// Doing it not in place [0, 1] => [0, 2], [0, 2] => [2, 2], [2, 2] => [2, 0]
const rotate = function(matrix) {
  const result = [];
  for (let row = matrix.length - 1; row >= 0; row -= 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      if (!result[col]) result[col] = [];
      result[col].push(matrix[row][col]);
    }
  }
  return result;
}
// Doing it in place
const rotateInPlace = function(matrix) {
  // Reverse matrix
  matrix = matrix.reverse();
  // Iterate over rows and columns in matrix
  for (row in matrix) {
    // Iterate while less than row so you dont swap same elements twice (resulting in just reversed matrix)
    for (let col = 0; col < row; col += 1) {
      // Swap elements 
      [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
    }
  }
  return matrix;
}

// Tests:
const mat1 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateInPlace(mat1));