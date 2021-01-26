// Backend Technical Interview //

/* Write a function to return a list of the most common words in a string */

/* Expand it to remove punctuation of a user's choosing and be case-insensitive */
// Dont have code for this, but solved both!


// System Design //
/* Design a system for a turn-based game application where users can wait indefinitely inbetween moves and can be 
scaled to millions of users. */

// Dont have my system, but solved using authentication service, matching service, notification service, and game service that handles moves.
// DB's used were Mongo and had one for users, one for session info, and one for game information where game was split between live games
// and cold storage.


// Frontend Technical Interview //
/* 
Your previous Plain Text content is preserved below:

Design a platform for playing some turn-based game on the web

Choose a game of your choice, the rules of the game don't necessarily matter, just that it needs to be a turn based game, like Chess

1) Players will need to sign up and authenticate
2) Once logged in, players should see a list of their active games, and all of their historical games
3) Players can start new games at any time by sending an invite to a particular player, or searching for random opponents
4) No limit to the number of active games a player can be participating in at once, but only one game active between 2 players at any time
5) Players searching for random opponents should only be matched with other players searching for random opponents
6) Games will last indefinitely unless one player explicitly forfeits
7) If a player has an active session, they should be notified when it becomes their turn in an active game

Notes:
- Web based
- Initial: Thousands of users, long-term: millions 

 */

// Design a class for connect 4 game
// https://en.wikipedia.org/wiki/Connect_Four and https://en.wikipedia.org/wiki/Connect_Four#/media/File:Connect_Four.gif
// Set for 2 players and 6(rows) x 7(columns) board
// includes following functions:
// putPiece, checkWin, reset
// for checkWin: start with horizontal and vertial check

class ConnectFour {
  constructor() {
    this.board = [
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null)
    ];
    this.currentSide = 'W';
  }
  
  putPiece(col) {
    // Get the current side
    const current = this.currentSide;
    // Iterate over the column until we run into a piece
    let row = 0;
    // Base case if no spots avail in column
    if (this.board[row][col]) {
      console.log(`Col ${col} is taken!`);
      return;
    }
    // Variable to hold where piece was placed
    let rowPlaced = 0;
    let colPlaced = 0;
    while (row <= 5) {
      // If there is a piece in this row, place our current piece into the row above
      if (this.board[row] && this.board[row][col]) {
        this.board[row - 1][col] = current;
        rowPlaced = row - 1;
        colPlaced = col;
        break;
      } else if (row === 5) {
        // If we reach the bottom of the board, place piece there
        this.board[row][col] = current;
        rowPlaced = row;
        colPlaced = col;
      }
      row += 1;
    }
    // Once piece is placed, check if the user won
    if (this.checkAdjacent(rowPlaced, colPlaced, current, 1)) return `${current} wins!`;
    else this.currentSide = this.currentSide === 'W' ? 'B' : 'W';
  }
  
  checkWin() {
    // Iterate over the rows
    for (let i = 0; i < this.board.length; i += 1) {
      // Iterate over the columns in each row
      for (let j = 0; j < this.board[i].length; j += 1) {
        // If the current spot on the board is not null, check adjacent spots
        if (this.board[i][j]) {
          if (this.checkAdjacent(i, j, this.board[i][j], 1)) return true;
        }
      }
    }
    return false;
  }
  
  checkAdjacent(row, col, side, count) {
    // IF the count is 4, return true
    if (count >= 4) return true;
    // Check adjacent pieces on right
    if (this.board[row][col + 1] === side) {
      if (this.checkAdjacent(row, col + 1, side, count + 1)) return true;
    }
    // Check left
    if (this.board[row][col - 1] === side) {
      if (this.checkAdjacent(row, col - 1, side, count + 1)) return true;
    }
    // Check adjacent pieces down
    if (this.board[row + 1] && this.board[row + 1][col] === side) {
      if (this.checkAdjacent(row + 1, col, side, count + 1)) return true;
    }
    // If we havent found connect 4 yet, return false
    return false;
  }
  
  reset() {
    this.board = [
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null),
      new Array(7).fill(null)
    ];
    this.currentSide = 'W';
  }
}

// Tests:
const game = new ConnectFour();
// console.log(game.board);
game.putPiece(2);
game.putPiece(3);
game.putPiece(2);
game.putPiece(3);
game.putPiece(2);
game.putPiece(3);
// console.log(game.putPiece(2));
game.reset();
game.putPiece(0);
game.putPiece(0);
game.putPiece(1);
game.putPiece(1);
game.putPiece(2);
game.putPiece(2);
console.log(game.putPiece(3));
console.log('Game after:\n', game.board);