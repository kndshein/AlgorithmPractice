// TODO: Unidirectional Word Search
//* from Binary Search
// Given a two-dimensional matrix of characters board and a string target, return whether the target can be found in the matrix by going left-to-right, or up-to-down unidirectionally.
const board1 = [
  ["H", "E", "L", "L", "O"],
  ["A", "B", "C", "D", "E"],
];

const word1 = "HELLO";

const board2 = [
  ["x", "z", "d", "x"],
  ["p", "g", "u", "x"],
  ["k", "j", "z", "d"],
];

const word2 = "xgz";

// Input: board = [
//     ["H", "E", "L", "L", "O"],
//     ["A", "B", "C", "D", "E"]
// ]

// word = "HELLO"
// Output: true
// Explanation: <explanation here>

// Input: board = [
//     ["x", "z", "d", "x"],
//     ["p", "g", "u", "x"],
//     ["k", "j", "z", "d"]
// ]

// word = "xgz"

// word = "xgz"
// Output: false
// Explanation: You can't make "xgz" going left-to-right or up-to-down.

// * Method 1: <Add method summary>
const unidirectionalWordSearch = (board, word) => {
  let words = [];

  // pushing all columns into words array
  for (let i = 0; i < board[0].length; i++) {
    let temp = "";
    for (let j = 0; j < board.length; j++) {
      temp += board[j][i];
    }
    words.push(temp);
  }

  // pushing all rows into words array
  for (let x = 0; x < board.length; x++) {
    words.push(board[x].join(""));
  }

  // looping through the words array to see if word occurs
  for (let y = 0; y < words.length; y++) {
    if (words[y].indexOf(word) !== -1) {
      return true;
    }
  }
  return false;
};

console.log(
  "unidirectionalWordSearch - ",
  unidirectionalWordSearch(board1, word1),
  unidirectionalWordSearch(board2, word2)
);
