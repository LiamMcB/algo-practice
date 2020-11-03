/* 3.4 Implement a queue using two stacks */

function Stack() {
  this.values = {};
  this.index = 0;
}

// Push method
Stack.prototype.push = function (val) {
  this.values[this.index] = val;
  this.index += 1;
};

// Pop method removes last in and returns it
Stack.prototype.pop = function () {
  this.index = this.index > 0 ? this.index - 1 : 0;
  const popped = this.values[this.index];
  delete this.values[this.index];
  return popped;
};

function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
}

// Push to queue
Queue.prototype.push = function (val) {
  // If s1 is empty, push to s1
  if (this.s1.index === 0) {
    this.s1.push(val);
    return;
  }
  // Pop all elements off of S1 and push to S2
  while (this.s1.index > 0) {
    const popped = this.s1.pop();
    this.s2.push(popped);
  }
  // Push to s1
  this.s1.push(val);
  // Pop all elements off of s2 and push to s1
  while (this.s2.index > 0) {
    const popped = this.s2.pop();
    this.s1.push(popped);
  }
};

// Pop off of queue
Queue.prototype.pop = function () {
  return this.s1.pop();
};

// Tests:
const testQ = new Queue();
testQ.push('first');
testQ.push('second');
console.log(testQ);
console.log(testQ.pop());
console.log(testQ.pop());
console.log(testQ.pop());
