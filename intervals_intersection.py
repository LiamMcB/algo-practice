# GTCI Merge Intervals 3 : Given two lists of (sorted on start) intervals, find the intersection of these two lists
# O(n + m) time complexity, O(1) space ignoring result list
def merge(intervals_a, intervals_b):
  # Create list to hold result
  result = []
  # Create variables to hold index in first and second interval list
  i = 0
  j = 0
  # Iterate while i and j are less than both intervals length
  while i < len(intervals_a) and j < len(intervals_b):
    # Find max of two intervals' start and min of their end
    max_start = max(intervals_a[i][0], intervals_b[j][0])
    min_end = min(intervals_a[i][1], intervals_b[j][1])
    # Check if the two intervals overlap
    a_overlaps_b = intervals_a[i][0] >= intervals_b[j][0] and intervals_a[i][0] <= intervals_b[j][1]
    b_overlaps_a = intervals_b[j][0] >= intervals_a[i][0] and intervals_b[j][0] <= intervals_a[i][1]
    # If either overlap, push a new interval with merged values
    if a_overlaps_b or b_overlaps_a:
      result.append([max_start, min_end])
    # Move next onto whichever interval finishes first
    if intervals_a[i][1] < intervals_b[j][1]:
      i += 1
    else:
      j += 1
  # return result at the end of the function
  return result

# Tests:
def main():
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])))
  print("Intervals Intersection: " + str(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])))


main()