// Practice for Compass Onsite 1/26/2021

// first problem was convertToBase in convertToBase.js

/* 2. Given an input array of integers, return an array of the same size such that nth element in the output array 
is the product of every element in the input array other than the nth element of the input array. 
Restriction: do not use division in your algorithm. This should be done in O(n) time complexity. */
const productArray = function(arr) {
  const product = [1];
  // Iterate over array, starting from second value
  for (let i = 1; i < arr.length; i += 1) {
    // Grab the previous value
    const previous = arr[i - 1];
    // Multiple the previous and the product at that index
    const newEl = previous * product[product.length - 1];
    // Push the new element to product
    product.push(newEl);
  }
  return product;
}

// Tests:
const arr1 = [1, 2, 3, 4, 5];
console.log(productArray(arr1));

/* 3. Write a function to reverse an integer, without using any intermediate storage except for other integer values. */
const reverseInt = function(num) {
  // Convert integer to string
  const intString = num.toString(10);
  // Get multiplier based on length of string
  let multiplier = 10 ** (intString.length - 1);
  // Get last char of int string
  let currentChar = intString.length - 1;
  let output = 0;
  // Iterate until currentChar is 0
  while (currentChar >= 0) {
    let currentNumber = Number(intString[currentChar]);
    // Multiply current number by multiplier and add to output
    output += currentNumber * multiplier;
    // Divide multiplier by ten and decrement current char
    currentChar -= 1;
    multiplier /= 10;
  }
  return output;
}
// Solution without using strings
const reverseAlt = function(num) {
  // Initialize reversed number to 0
  let reversed = 0;
  // Iterate until num is 0
  while (num !== 0) {
    // Get last digit of number
    let lastDigit = num % 10;
    // Pop last digit off of num param
    num = Math.floor(num / 10);
    // Get reversed by multiplying current reversed by 10 and adding last digit
    reversed = (reversed * 10) + lastDigit;
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) return -1; // Prevent integer overflow
  }
  return reversed;
}
// Tests:
// 12 -> 21, 435 -> 534
console.log(reverseAlt(435689129));

/* Write a function that, given an inventory of titles (say movies), and a starting movie title, 
returns the longest list of titles (in which each title appears only once), 
where the first word of the next title in the list is equal to the last word of the preceding title. */
const getInventory = function(titles) {
  // Initialize longest list array
  let longestList = [];
  // Hash map with last word and titles in adj list where it shows up
  const wordMap = {};
  // Iterate over titles
  for (let i = 0; i < titles.length; i += 1) {
    // Grab the first word and last word
    const arrayWords = titles[i].split(' ');
    const first = arrayWords[0];
    const last = arrayWords[arrayWords.length - 1];
    // If first word in word map, add it to the adj list
    if (wordMap[first]) wordMap[first].push(titles[i]);
    else wordMap[first] = [titles[i]];
  }
  wordMap
  // Iterate over word map, starting on each key and finding longest list starting at that key
  for (word in wordMap) {
    // Store list to hold current longest list
    const currentList = findLongestList(wordMap, word, []);
    // Compare to fscoped longest list and if longer, reset
    longestList = longestList.length > currentList.length ? longestList : currentList;
  }
  return longestList;
}

const findLongestList = function(wordMap, currentWord, list) {
  // Base case if our current word isn't in the word map
  if (!wordMap[currentWord]) return list;
  // Iterate over current word's adjacency list
  const adjList = wordMap[currentWord];
  for (let i = 0; i < adjList.length; i += 1) {
    let currentList = [...list];
    currentList.push(adjList[i]);
    // Find the longest list starting at this word and concat to the current list
    currentList = list.concat(findLongestList(wordMap, wordMap[currentWord][i], list));
    list = list.length > currentList.length ? list : currentList;
  }
  return list;
}

// Tests:
const titles1 = ['OF MICE AND MEN', 'BLACK MASS', 'MEN IN BLACK'];
console.log(getInventory(titles1));