/* Word Search: Given an mxn board of characters and an array of possible words, return all the words in the board.
Each character on the board can only be used once and is a lowercase english letter. */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// O(4^n) time I think, O(n*m) space
const wordSearch = function(board, words) {
  // Initialize array to hold found words
  const foundWords = [];
  // Create trie to hold characters in words
  const trie = createTrie(words);
  // Helper function to search for words
  const findWords = function(board, words, currentWord, row, column, indexSearched) {
    // Base case if the current position doesnt exist or is null
    if (!board[row] || !board[row][column]) return;
    // Add the char at the current index to our current word
    currentWord += board[row][column];
    // If the current combo of chars isnt in the trie, return
    if (!trie[currentWord]) return;
    // Push the row and column to an array index searched
    indexSearched.push([row, column]);
    // If the current word is in words, push it to foundWords
    if (words.includes(currentWord)) {
      foundWords.push(currentWord);
      // Set all characters searched through to null
      indexSearched.forEach(index => board[index[0]][index[1]] = null);
    }
    // Run function on all adjacent characters
    findWords(board, words, currentWord, row + 1, column, indexSearched);
    findWords(board, words, currentWord, row, column + 1, indexSearched);
    findWords(board, words, currentWord, row - 1, column, indexSearched);
    findWords(board, words, currentWord, row, column - 1, indexSearched);
  }
  // Iterate over the rows
  for (let i = 0; i < board.length; i += 1) {
    // Iterate over the columns 
    for (let j = 0; j < board[i].length; j += 1) {
      // Invoke helper on these indices and with the board if character is first character of any word
      if (trie[board[i][j]]) findWords(board, words, '', i, j, []);
    }
  }
  // Return the found words
  return foundWords;
}


// Helper function to create the trie
const createTrie = function(words) {
  const trie = {};
  // REAL WAY
  // words.forEach((word) => {
  //   // Create a root node for this word if it doesn't exist
  //   let root = trie[word[0]] ? trie[word[0]] : new Node(word[0]);
  //   let current = root;
  //   // Iterate over letters in word
  //   for (let i = 1; i < word.length; i += 1) {
  //     let letter = word[i];
  //     // If the root's next is the letter, simply go to root's next
  //     if (current.next === letter) current = current.next;
  //     // Else set root's next to a new node with the letter
  //     else {
  //       current.next = new Node(letter);
  //       current = current.next;
  //     }
  //   }
  //   // Add root to trie
  //   trie[word[0]] = root;
  // });
  // MORE HELPFUL WAY which is just an object of all combos of each word in order
  words.forEach(word => {
    if (!trie[word[0]]) trie[word[0]] = true;;
    let currentSubset = word[0];
    // Iterate over letters in word
    for (let i = 1; i < word.length; i += 1) {
      // Add current letter to subset
      currentSubset += word[i];
      // Add subset to the trie
      trie[currentSubset] = true;
    }
  })
  return trie;
}

// Tests:
const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
const words = ["oath","pea","eat","rain"];
console.log(wordSearch(board, words));
// console.log(createTrie(words));