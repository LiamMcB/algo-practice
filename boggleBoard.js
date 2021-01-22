/* Given an m x n board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once. */

const exist = function(board, word) {
  // Initialize word exists to false
  let wordExists = false;
  // Iterate over the board until we find the first letter of the word
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      // If we find the first letter
      if (board[i][j] === word[0]) {
        // Trigger helper function to see if word exists from this point
        if (findWord(board, word, '', i, j, null, null)) return true;
      }
    }
  }
  // Return whether the wordExists
  return wordExists;
}

// Helper to find if word exists from starting point
const findWord = function(board, word, currentWord, row, col, rowFrom, colFrom) {
  // Add current letter to current word
  currentWord += board[row][col];
  // Check if current word equals word
  if (currentWord === word) return true;
  // Get next letter in word
  const nextLetter = word[currentWord.length];
  // Store current character and disable it for current searches
  let currentChar = board[row][col];
  board[row][col] = 0;
  // See if next letter in word is adjacent to current index
  if (board[row + 1] && board[row + 1][col] === nextLetter) {
    if (findWord(board, word, currentWord, row + 1, col, row, col)) return true;
  }
  if (board[row - 1] && board[row - 1][col] === nextLetter) {
    if (findWord(board, word, currentWord, row - 1, col, row, col)) return true;
  }
  if (board[row][col + 1] === nextLetter) {
    if (findWord(board, word, currentWord, row, col + 1, row, col)) return true;
  }
  if (board[row][col - 1] === nextLetter) {
    if (findWord(board, word, currentWord, row, col - 1, row, col)) return true;
  }
  // Enable char again
  board[row][col] = currentChar;
  // If we dont find the next letter, return false
  return false;
}

const XOR = function(row, col, rowFrom, colFrom) {
  if (row === rowFrom && col === colFrom) return false;
  else return true;
}

// Tests:
const board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
const board3 = [["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]];
console.log(exist(board2, 'SEE'));
console.log(exist(board3, "aaaaaaaaaaaaa"));