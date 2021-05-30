// TODO: Zero Matrix
//* from Binary Search
//* 5/11/2021
// Given a two-dimensional matrix of integers, for each zero in the original matrix, replace all values in its row and column with zero, and return the resulting matrix.
const matrix = [
  [5, 0, 0, 5, 8],
  [9, 8, 10, 3, 9],
  [0, 7, 2, 3, 1],
  [8, 0, 6, 7, 2],
  [4, 1, 8, 5, 10],
];

// Input: matrix = [
//     [5, 0, 0, 5, 8],
//     [9, 8, 10, 3, 9],
//     [0, 7, 2, 3, 1],
//     [8, 0, 6, 7, 2],
//     [4, 1, 8, 5, 10]
// ]
// Output: [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 3, 9],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 5, 10]
// ]

// * Method 1
const zeroMatrix = (matrix) => {
  let row = [];
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  const rowSet = new Set(row);
  const colSet = new Set(col);
  for (let row1 of [...rowSet]) {
    for (let j = 0; j < matrix[row1].length; j++) {
      matrix[row1][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let col1 of [...colSet]) {
      matrix[i][col1] = 0;
    }
  }
  return matrix;
};

console.log("zeroMatrix - ", zeroMatrix(matrix));
