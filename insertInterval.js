/* GTCI Merge Intervals 2: Given list of intervals (sorted without overlap) and additional interval, 
insert it into the list and return the list */
// Interval class
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

// O(n) time O(n) space
function insertInterval(intervals, new_interval) {
  let merged = [];
  // Initialize start and end 
  let start;
  let end;
  let overlap = false;
  // Iterate over intervals
  for (let i = 0; i < intervals.length; i += 1) {
    let currenInt = intervals[i];
    // If the end of the current interval is less than the start of the new, simply add it to merged
    if (currenInt.end < new_interval.start) {
      merged.push(new Interval(currenInt.start, currenInt.end));
    // If we reach an interval that contains some of the new interval
    } else if (currenInt.start <= new_interval.end) {
      // Reset start and end to the min and max
      start = Math.min(currenInt.start, new_interval.start);
      end = Math.max(currenInt.end, new_interval.end);
    // IF we pass the phase that has ranges included in new interval
    } else if (currenInt.start > new_interval.end) {
      // Push the start and end values we calculated only once
      if (!overlap) {
        merged.push(new Interval(start, end));
        overlap = true;
      }
      // Simply push the rest of the intervals
      merged.push(new Interval(currenInt.start, currenInt.end));
    }
  }
  // If overlapping interval not pushed yet, push it now
  if (!overlap) merged.push(new Interval(start, end));
  // Return merged intervals list
  return merged;
}

// Tests:
let intervals1 = [
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12)
];
console.log(insertInterval(intervals1, new Interval(4, 6)));