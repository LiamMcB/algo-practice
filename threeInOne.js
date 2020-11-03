/* 3.1 Describe how you could use a single array to implement three stacks */

function Stack() {
  this.values = {};
  this.index = 0;
}

// Push method
Stack.prototype.push = function(val) {
  this.values[this.index] = val;
  this.index += 1;
}

// Pop method removes last in and returns it
Stack.prototype.pop = function() {
  this.index = this.index > 0 ? this.index - 1: 0;
  const popped = this.values[this.index];
  delete this.values[this.index];
  return popped;
}

// Class of three in one stack
function ThreeInOne() {
  // Initialize three stacks
  const first = new Stack();
  const second = new Stack();
  const third = new Stack();
  // Create array to hold stack
  this.stacks = [first, second, third];
}

// Push to specified stack in array
ThreeInOne.prototype.push = function(val, stackNum) {
  // Base case if stackNum greater than 2 (3 stacks in array)
  if (stackNum > 2) return;
  const pushingStack = this.stacks[stackNum];
  pushingStack.push(val);
}

// Pop from specified stack in array and return it
ThreeInOne.prototype.pop = function(stackNum) {
  if (stackNum > 2) return;
  const poppingStack = this.stacks[stackNum];
  return poppingStack.pop();
}

// Tests:
const stack = new Stack();
stack.push('first');
stack.push('second');
stack.push('third');
console.log(stack);
const tester = new ThreeInOne();
console.log(tester);
tester.push('hello world', 1);
console.log(tester.stacks);
tester.pop(1);
console.log(tester.stacks);
