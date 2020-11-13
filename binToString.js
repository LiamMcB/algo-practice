/* 5.2 Given a decimal value between 0 and 1, convert it to its binary representation if it can be represented
with less than 32 bits */

function binToString(decimal) {
  let remainder = decimal;
  let output = '0.';
  let n = 1;
  while (n <= 32 && remainder > 0) {
    if (remainder >= Math.pow(2, -n)) {
      output += '1';
      remainder -= Math.pow(2, -n);
    } else {
      output += '0';
    }
    n += 1;
  }
  if (n > 32 && remainder > 0) {
    console.log('error');
    return;
  } else {
    return output;
  }
}

// Tests:
console.log(binToString(0.625));
console.log(binToString(0.875));