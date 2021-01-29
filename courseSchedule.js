/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first 
if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false. */

const courseSchedule = function(numCourses, prerequisites) {
  // Use graph object where key is course and val is prereq
  const graph = {};
  // Iterate over the prereqs
  for (let i = 0; i < prerequisites.length; i += 1) {
    // IF the course isnt in the graph, add it
    if (!graph[prerequisites[i][0]]) graph[prerequisites[i][0]] = [];
    // Push the prereq to the adj list
    graph[prerequisites[i][0]].push(prerequisites[i][1]);
  }
  // set to keep track of courses visited
  const coursesVisited = new Set();
  // Helper function to traverse the graph
  const traverseGraph = function(course, depth) {
    // If there are no prereqs in adj list and depth equals number of courses, return true
    if (!graph[course] || !graph[course].length && depth === numCourses) return true;
    // Else if depth is less, return false
    else if (!graph[course] || !graph[course].length && depth < numCourses) return false;
    // Else if we visited this course already, return false to avoid infinite loop
    if (coursesVisited.has(course)) return false;
    // Add course to set
    coursesVisited.add(course);
    // Iterate over adjlist for course
    for (let i = 0; i < graph[course].length; i += 1) {
      // Traverse from the current prereq
      if (traverseGraph(graph[course][i], depth + 1)) return true;
    }
    coursesVisited.delete(course);
    // Return false if no combo works
    return false;
  }
  // No prereqs, return true
  if (!prerequisites.length) return true;
  // Invoke helper with depth of 1
  return traverseGraph(prerequisites[0][0], 1);
}

// Tests:
const pre1 = [[1, 0]];
const pre2 = [[1,0],[0,1]];
const pre3 = [];
const pre4 = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]];
// console.log(courseSchedule(20, pre4));
// console.log(courseSchedule(2, pre1));