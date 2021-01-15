/* Write a program to convert the representation of a number in one base to its representation in another base, 
where the bases can range from 2 to 36. */

const convertBase = function(num, original, other) {
  // Initialize converted base to 0
  let converted = 0;
  let numString = num.toString();
  let index = numString.length - 1;
  // Iterate over digits in num in reverse order
  while (index >= 0) {
    // Get digit in index spot
    const digit = Number(numString[index]);
    const value = digit * (original ** (numString.length - index - 1));
    // Add value to converted
    converted += value;
    // Decrement index
    index -= 1;
  }
  // Return converted if going to base 10
  if (other === 10) return converted;
  // Convert base 10 to other base 
  return convertFromBase10(converted, other);
}

const convertFromBase10 = function(num, base) {
  let convertedVal = 0;
  let multiplier = 1;
  // Iterate until param num is 0
  while (num != 0) {
    let remainder = num % base;
    num = Math.floor(num / base);
    convertedVal += remainder * multiplier;
    multiplier *= 10;
  }
  return convertedVal;
}

// Tests:
// Ex: 112 in base 4 is 22 in base 10, 12 in base 6 (8) is 1000 in base 2, 112 in base 4 is 10110 in binary
// console.log(convertBase(112, 4, 10));
console.log(convertBase(112, 4, 2));
console.log(convertBase(101101, 3, 7));