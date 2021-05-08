// TODO: Check Power of Two
//* from Binary Search
// Given an integer n greater than or equal to 0, return whether it is a power of two.
const num1 = 0;
const num2 = 1;
const num3 = 2;
const num4 = 1073741824;

// Input: 0
// Output: false

// Input: 1
// Output: true
// Explanation: 2^0 = 1

// Input: 2
// Output: true
// Explanation: 2^1 = 2

// Input: 1073741824
// Output: true
// Explanation: 2^30 = 1073741824

// * Method 1
const checkPowerOfTwo = (num) => {
  let a = 0;
  while (2 ** a <= num) {
    if (2 ** a === num) {
      return true;
    } else {
      a++;
    }
  }
  return false;
};

console.log(
  "checkPowerOfTwo - ",
  checkPowerOfTwo(num1),
  checkPowerOfTwo(num2),
  checkPowerOfTwo(num3),
  checkPowerOfTwo(num4)
);
