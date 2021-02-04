/* Given a board of mxn cells, where each cell is either live(1) or dead(0), return the next state of the board 
(modify board and dont return anything) following the rules of the game of life:

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

*/

const gameOfLife = function(board) {
  // Initialize new board to hold updated values
  const update = [];
  // Iterate over the board
  for (let i = 0; i < board.length; i += 1) {
    const row = [];
    for (let j = 0; j < board[i].length; j += 1) {
      row.push(checkNeighbors(board, i, j));
    }
    update.push(row);
  }
  // Set the board equal to the newly updated board
  return update;
}

const checkNeighbors = function(board, i, j) {
  // Determine whether current cell is live or not
  const currentAlive = board[i][j] === 1 ? true : false;
  // Initialize num live neighbors to 0
  let liveNeighbors = 0;
  // Count the number of live neighbors
  if (board[i-1] && board[i-1][j] === 1) liveNeighbors += 1;
  if (board[i-1] && board[i-1][j+1] === 1) liveNeighbors += 1;
  if (board[i-1] && board[i-1][j-1] === 1) liveNeighbors += 1;
  if (board[i][j+1] === 1) liveNeighbors += 1;
  if (board[i][j-1] === 1) liveNeighbors += 1;
  if (board[i+1] && board[i+1][j+1] === 1) liveNeighbors += 1;
  if (board[i+1] && board[i+1][j] === 1) liveNeighbors += 1;
  if (board[i+1] && board[i+1][j-1] === 1) liveNeighbors += 1;
  // If fewer than 2 live neighbors, return 0
  if (liveNeighbors < 2) return 0;
  else if ((liveNeighbors === 2 || liveNeighbors === 3) && currentAlive) return 1;
  else if (liveNeighbors > 3) return 0;
  else if (liveNeighbors === 3 && !currentAlive) return 1;
  else return board[i][j];
}

// Tests:
const b1 = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
const b2 = [[1,1],[1,0]];
console.log(gameOfLife(b2));