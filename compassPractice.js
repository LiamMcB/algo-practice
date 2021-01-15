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