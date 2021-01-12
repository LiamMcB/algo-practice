/* LRU Cache: Design a data structure that follows the constraints of a LRU cache. */
const LRUCache = function(capacity) {
  this.cache = {};
  this.queue = []; // Array of keys in order that they were placed in lru cache
  this.capacity = capacity;
};

// Return the value of the key if the key exists, otherwise return -1.
LRUCache.prototype.get = function(key) {
  if (this.cache[key] || this.cache[key] === 0) {
    // If we find the key, update the queue to have it shifted to front
    let index;
    this.queue.forEach((el, ind) => {
        if (el === key) index = ind;
    });
    this.queue.splice(index, 1);
    this.queue.unshift(key);
    return this.cache[key];
  }
  else return -1;
};

// Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. 
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key]) {
    // If we find the key, update the queue to have it shifted to front
    let index;
    this.queue.forEach((el, ind) => {
        if (el === key) index = ind;
    });
    this.queue.splice(index, 1);
    this.queue.unshift(key);
    this.cache[key] = value;
  }
  else {
    // Unshift to the beginning of the queue
    this.queue.unshift(key);
    // Add it to the cache
    this.cache[key] = value;
    // If the queue has greater length than capacity, pop last one off
    if (this.queue.length > this.capacity) {
      const oldest = this.queue.pop();
      // Remove from cache
      delete this.cache[oldest];
    }
  }
};

// Tests:
const lru = new LRUCache(2);
lru.put(2, 1);
lru.put(1, 1);
lru.put(2, 3);
lru.put(4, 1);
console.log(lru)
console.log(lru.get(1));
console.log(lru.get(2));
lru.put(3, 3);
console.log(lru);