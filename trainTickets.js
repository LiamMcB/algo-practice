/* Given an array of ticket objects with source and destination, find your original source, and final destination */

// O(n^2)
function trainTickets(tickets) {
  // Initialize object to hold original source and destination
  const result = {source: '', dest: ''};
  // Iterate over tickets
  for (let i = 0; i < tickets.length; i += 1) {
    // Create variables to show whether a current ticket holds the source or destination
    let originalSource = true;
    let finalDestination = true;
    let currentSource = tickets[i].source;
    let currentDest = tickets[i].dest;
    // Iterate over other tickets
    for (let j = 0; j < tickets.length; j += 1) {
      // Ensure we arent checking against identical ticket
      if (i !== j) {
        if (currentSource === tickets[j].dest) {
          originalSource = false;
        } 
        if (currentDest === tickets[j].source) {
          finalDestination = false;
        }
      }
    }
    // If original source or final destination, add to result
    if (originalSource) {
      result.source = currentSource;
    }
    if (finalDestination) {
      result.dest = currentDest;
    }
  }
  // Return result 
  return result;
}

// Tests:
const tickets = [
  {source: 'Chicago', dest: 'Columbus'}, 
  {source: 'Cleveland', dest: 'Cincinatti'},
  {source: 'Columbus', dest: 'Cleveland'}
];
// const tickets = [];
console.log(trainTickets(tickets));