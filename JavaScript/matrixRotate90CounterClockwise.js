// TODO: Rotate by 90 Degrees Counter-Clockwise
//* from Binary Search
// Given a two-dimensional square matrix, rotate in-place it 90 degrees counter-clockwise.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Input: matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// Output: matrix = [
//     [3, 6, 9],
//     [2, 5, 8],
//     [1, 4, 7]
// ]

// * Method 1: While Loop + For Loop + Nested For Loop
const matrixRotate90Clockwise = (matrix) => {
  let arr = [];
  let n = 0;
  while (n < matrix.length) {
    arr.push([]);
    n++;
  }
  for (let i = 0; i < matrix.length; i++) {
    let count = matrix.length - 1;
    for (let j = 0; j < matrix[i].length; j++) {
      arr[count].push(matrix[i][j]);
      count--;
    }
  }
  return arr;
};

console.log("matrixRotate90Clockwise - ", matrixRotate90Clockwise(matrix));
