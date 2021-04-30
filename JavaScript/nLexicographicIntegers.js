// TODO: N Lexicographic Integers
//* from Binary Search
// Given an integer n, return first n integers sorted in lexicographic order.
const n = 12;

// Input: n = 12
// Output: [1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9]

// * Method 1: Arr + For Loop + Sort
const nLexicographicInteger1 = (n) => {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  return arr.sort();
};

console.log("nLexicographicInteger1 - ", nLexicographicInteger1(n));
