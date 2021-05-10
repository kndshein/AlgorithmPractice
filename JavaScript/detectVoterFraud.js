// TODO: Detect Voter Fraud
//* from Binary Search
// Given a two dimensional list of integers votes, where each list has two elements [candidate_id, voter_id], report whether any voter has voted more than once.
const votes1 = [
  [3, 1],
  [3, 0],
  [3, 4],
  [3, 3],
  [3, 2],
];

const votes2 = [
  [2, 3],
  [2, 2],
  [2, 1],
  [2, 0],
  [2, 1],
];

// Input: votes = [[3, 1],[3, 0],[3, 4],[3, 3],[3, 2]]
// Output: false
// Explanation: Every voter has voted once.

// Input: votes = [[2, 3],[2, 2],[2, 1],[2, 0],[2, 1]]
// Output: true
// Explanation: The voter with voter_id 1 voted twice.

// * Method 1
const voterFraud = (votes) => {
  let freq = {};
  for (let i = 0; i < votes.length; i++) {
    freq[votes[i][1]] = -~freq[votes[i][1]];
  }
  return Object.values(freq).some((num) => num > 1);
};

console.log("voterFraud - ", voterFraud(votes1), voterFraud(votes2));
