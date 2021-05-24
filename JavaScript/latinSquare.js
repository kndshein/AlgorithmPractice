// TODO: Latin Square
//* from Binary Search
//* 04/2021
// Given an n by n matrix of letters matrix, return whether there are exactly n different letters that appear in the matrix and each letter appears exactly once in each row and exactly once in each column.
const matrix1 = [
  ["a", "b", "c"],
  ["c", "a", "b"],
  ["b", "c", "a"],
];

const matrix2 = [
  ["a", "b", "c"],
  ["d", "a", "a"],
  ["b", "b", "a"],
];

// Input: matrix = [
//     ["a", "b", "c"],
//     ["c", "a", "b"],
//     ["b", "c", "a"]
// ]
// Output: true
// Explanation: There are 3 different letters and each letter appears exactly once in each row and column.

// Input: matrix = [
//     ["a", "b", "c"],
//     ["d", "a", "a"],
//     ["b", "b", "a"]
// ]
// Output: false
// Explanation: There are 4 different letters, and also "a" and "b" appear twice in the same row.

// * Method 1
const latinSquare1 = (matrix) => {
  let hash = {};
  let transposed = matrix.map((_, colIndex) =>
    matrix.map((row) => row[colIndex])
  );
  for (let i = 0; i < matrix.length; i++) {
    let freq = {};
    for (let j = 0; j < matrix[i].length; j++) {
      freq[matrix[i][j]] = -~freq[matrix[i][j]];
      if (freq[matrix[i][j]] === 2) {
        return false;
      }
    }
    hash = { ...hash, ...freq };
  }
  for (let x = 0; x < transposed.length; x++) {
    let freq = {};
    for (let y = 0; y < transposed[x].length; y++) {
      freq[transposed[x][y]] = -~freq[transposed[x][y]];
      if (freq[transposed[x][y]] === 2) {
        return false;
      }
    }
    hash = { ...hash, ...freq };
  }
  if (Object.keys(hash).length > matrix.length) {
    return false;
  }
  return true;
};

console.log("latinSquare1 - ", latinSquare1(matrix1), latinSquare1(matrix2));

// * Method 2
const latinSquare2 = (matrix) => {
  let hash = {};
  for (let i = 0; i < matrix.length; i++) {
    let freq = {};
    let freq2 = {};
    for (let j = 0; j < matrix[i].length; j++) {
      freq[matrix[i][j]] = -~freq[matrix[i][j]];
      if (freq[matrix[i][j]] === 2) {
        return false;
      }
      freq2[matrix[j][i]] = -~freq2[matrix[j][i]];
      if (freq2[matrix[j][i]] === 2) {
        return false;
      }
    }
    hash = { ...freq, ...freq2 };
  }
  if (Object.keys(hash).length > matrix.length) {
    return false;
  }
  return true;
};

console.log("latinSquare2 - ", latinSquare2(matrix1), latinSquare2(matrix2));
