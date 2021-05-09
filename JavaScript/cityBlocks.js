// TODO: City Blocks
//* from Binary Search
// You are given a two-dimensional matrix of unique strings representing city blocks, and a list of strings blocks to visit. Given that you are sitting at block matrix[0][0], return the total Manhattan distance required to visit every block in order.
const matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const blocks = ["h", "b", "c"];

// Input: matrix = [
//     ["a", "b", "c"],
//     ["d", "e", "f"],
//     ["g", "h", "i"]
// ]
// blocks = ["h", "b", "c"]
// Output: 6
// Explanation:
//     "h" is 2 blocks south and 1 block east.
//     "b" is 2 blocks north.
//     "c" is 1 block east.
// Which adds up to 6.

// * Method 1
const cityBlocks = (matrix, blocks) => {
  let hash = {};
  let current = [0, 0];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      hash[matrix[i][j]] = [i, j];
    }
  }
  for (let x = 0; x < blocks.length; x++) {
    let next = hash[blocks[x]];
    sum += Math.abs(current[0] - next[0]) + Math.abs(current[1] - next[1]);
    current = next;
  }
  return sum;
};

console.log("cityBlocks - ", cityBlocks(matrix, blocks));
