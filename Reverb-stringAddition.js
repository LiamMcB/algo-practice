/*
 * String Calculator
 *
 * Implement the function "calc" which takes in a String of
 * numbers separated by the operation, and returns the answer
 * as a String.
 *
 * String calc(String input)
 * 
 * To begin, make sure the following is true:
 * <input> => <output>
 * "1+2" => "3"
 * "21 +2+113" => "136"
 */

/*
 * "10" => "10"
 * "" => "0"
 * "ten plus one" => Error
 */

// ------------------ SRC ------------------ //
const _ = require('lodash');
// Input: String, Output: String
function calc(input) {
  // Initialize sum to 0
  let sum = 0;
  // Base case if given an empty string
  if (!input[0]) return sum.toString();
  // Split string into array of digits
  const charArray = input.split("+");
  // Iterate over the array of number strings
  for (let i = 0; i < charArray.length; i += 1) {
    if (!isNaN(Number(charArray[i]))) sum += Number(charArray[i]); 
    else throw Error;
  }
  return sum.toString();
}
// ["1 "," 2"] => Number("1 ") => 1;
// "number + 3"

// ------------------ TESTS ------------------ //
const Mocha = require('mocha');
const expect = require('chai').expect;
const mocha = new Mocha();
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe('Test suite', () => {
  it('should be 3', () => {
    expect(calc("1+2")).to.equal("3");
  });
  it('should return 0 for an empty string', () => {
    expect(calc("")).to.equal("0");
  });
  it('should return 3 with spaces', () => {
    expect(calc("1 + 2")).to.equal("3");
  });
  it('should return 136 for combination of spaces and plus', () => {
    expect(calc("21 +2+113")).to.equal("136");
  });
  it('should return 10 without plus', () => {
    expect(calc("10")).to.equal("10");
  });
  it('should throw error for words', () => {
    expect(() => calc("ten plus one")).to.throw();
  });
});

mocha.run();
