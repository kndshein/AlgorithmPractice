// TODO: Check if Number Is Perfect Square
//* from Binary Search
// Given an integer n, return whether n = k * k for some integer k. This should be done without using built-in square root function.
const num1 = 25;
const num2 = 33200644;
const num3 = 3;

// Input: num = 25
// Output: true
// Explanation: 25 = 5 * 5

// Input: num = 33200644;
// Output: true
// Explanation: 33200644 = 5762 * 5762

// Input: num = 3
// Output: false

// * Method 1:
const checkPerfectSquare = (num) => {
  if (num === 0) {
    return true;
  }
  let k = 1;
  while (k ** 2 <= num) {
    if (num / k === k) {
      return true;
    } else {
      k++;
    }
  }
  return false;
};

console.log(
  "checkPerfectSquare - ",
  checkPerfectSquare(num1),
  checkPerfectSquare(num2),
  checkPerfectSquare(num3)
);
