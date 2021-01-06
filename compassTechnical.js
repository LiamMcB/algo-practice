/* ROUND 1 JAN 6 2021 W/ JOBAN */
/*
Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0.

The image you get is known to have potentially many distinct rectangles of 0s on a background of 1's. Write a function that takes in the image and returns the coordinates of all the 0 rectangles -- top-left and bottom-right; or top-left, width and height.

image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]

Sample output variations (only one is necessary):

findRectangles(image1) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
    [[2,0],[2,0]],
    [[2,3],[3,5]],
    [[3,1],[5,1]],
    [[5,3],[6,4]],
    [[7,6],[7,6]],
  ]
  // (using top-left-row-column and width/height):
  [
    [[0,0],[1,1]],
    [[2,0],[1,1]],
    [[2,3],[3,2]],
    [[3,1],[1,3]],
    [[5,3],[2,2]],
    [[7,6],[1,1]],
  ]

Other test cases:

image2 = [
  [0],
]

findRectangles(image2) =>
  // (using top-left-row-column and bottom-right):
  [
    [[0,0],[0,0]],
  ]

  // (using top-left-row-column and width/height):
  [
    [[0,0],[1,1]],
  ]

image3 = [
  [1],
]

findRectangles(image3) => []

image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]

findRectangles(image4) =>
  // (using top-left-row-column, and bottom-right or width/height):
  [
    [[1,1],[3,3]],
  ]

n: number of rows in the input image
m: number of columns in the input image

*/

"use strict";

const image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

const image2 = [
  [0],
];

const image3 = [
  [1],
];

const image4 = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];


// Input: number[][] Output: numbers[] [row, column, width, height]
// O(n*m) time, O(1) space
const findRectangle = function(grid) {
  const copy = [...grid];
  const backGround = [];
  for (let i = 0; i < copy.length; i += 1) {
    for (let j = 0; j < copy[i].length; j += 1) {
      if (copy[i][j] === 0) {
        const rowCol = [i, j];
        // Grab the width and height 
        const [width, height] = findWidthHeight(copy, i, j);
        const widthHeight = [width, height];
        backGround.push([rowCol, widthHeight]);
        console.log('Current Grid:', copy);
      }
    }
  }
  return backGround;
}

const findWidthHeight = function(grid, topLeftRow, topLeftCol) {
  let width = 1;
  let height = 0;
  let currentRow =topLeftRow;
  let currentCol = topLeftCol;
  // Calculate the height of this background
  while (grid[currentRow] && grid[currentRow][currentCol] === 0) {
    height += 1;
    grid[currentRow][currentCol] = '#';
    currentRow += 1;
  }
  // Reset current row 
  currentRow = topLeftRow;
  currentCol = topLeftCol + 1;
  // Calculate the width
  while (grid[currentRow][currentCol] === 0) {
    width += 1;
    grid[currentRow][currentCol] = '#';
    currentCol += 1;
  }
  currentRow = topLeftRow;
  currentCol = topLeftCol;
  // Hash remaining rows and columns
  for (let i = currentRow; i < currentRow + height; i += 1) {
    for (let j = currentCol; j < currentCol + width; j += 1) {
      if (grid[i][j] !== '#') {
        grid[i][j] = '#'
      }
    }
  }
  return [width, height];
}

// console.log(findRectangle(image1), [
//     [[0,0],[1,1]],
//     [[2,0],[1,1]],
//     [[2,3],[3,2]],
//     [[3,1],[1,3]],
//     [[5,3],[2,2]],
//     [[7,6],[1,1]],
//   ]);
// console.log(findRectangle(image2), [4, 6, 1, 1]);
// console.log(findRectangle(image3), [3, 5, 2, 2]);
console.log(findRectangle(image4), [
    [[1,1],[3,3]],
  ]);
// console.log(findRectangle(image5), [0, 0, 1, 1]);
// console.log(findWidthHeight(image1, 2, 3));

/* RD 2 JAN 7 2021 W/ EMIL */