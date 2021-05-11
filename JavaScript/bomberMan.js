// TODO: Bomber Man
//* from Binary Search
//* 5/11/2021
// <A short description of the objective>
const matrix = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

// Input: matrix = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0]
// ]
// Output: 1
// Explanation: Only the bottom right cell is safe

// * Method 1
const bomberMan = (matrix) => {
  let row = new Set();
  let col = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        row.add(i);
        col.add(j);
      }
    }
  }
  return (matrix.length - row.size) * (matrix[0].length - col.size);
};

console.log("bomberMan - ", bomberMan(matrix));
