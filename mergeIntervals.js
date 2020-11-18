/* GTCI Merge Intervals 1: Given list of intervals, merge all overlapping intervals */
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

// O(nlogn) time from sort, O(n) space
function mergeIntervals(intervals) {
  // Base case if just one interval
  if (intervals.length < 2) return intervals;
  // Sort intervals based on start time
  intervals.sort((a, b) => a.start - b.start);
  // Declare array to hold merged intervals
  const merged = [];
  // Create variables to have current start and end
  let start = intervals[0].start;
  let end = intervals[0].end;
  // Iterate over the intervals and add to merged
  for (let i = 1; i < intervals.length; i += 1) {
    // If the intervals overlap
    if (intervals[i].start < end) {
      // Reset end to whoever's end is larger
      end = Math.max(end, intervals[i].end);
    // Else if the intervals dont overlap
    } else {
      merged.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  // Add the last interval and merge
  merged.push(new Interval(start, end));
  return merged;
}