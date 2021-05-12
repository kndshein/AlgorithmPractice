// TODO: Flip and Invert Matrix
//* from Binary Search
//* 4/2021
// You are given a two-dimensional integer matrix matrix containing 1s and 0s. For each row in matrix, reverse the row. Then, flip each value in the matrix such that any 1 becomes 0 and any 0 becomes 1.
const matrix = [
  [1, 1, 0],
  [0, 0, 1],
  [0, 0, 0],
];

// Input: matrix = [
//     [1, 1, 0],
//     [0, 0, 1],
//     [0, 0, 0]
// ]
// Output: [
//     [1, 0, 0],
//     [0, 1, 1],
//     [1, 1, 1]
// ]

// * Method 1
const flipAndInvert = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      } else if (matrix[i][j] === 0) {
        matrix[i][j] = 1;
      }
    }
    matrix[i].reverse();
  }
  return matrix;
};

console.log("flipAndInvert - ", flipAndInvert(matrix));
