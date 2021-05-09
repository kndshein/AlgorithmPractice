// TODO: Collatz Sequence
//* from Binary Search
// Given a positive integer n, find the length of its Collatz sequence. The Collatz sequence is generated sequentially where
// n = n / 2 if n is even
// n = 3 * n + 1 if n is odd
// And the sequence ends if n = 1

const num = 11;

// Input: n = 11
// Output: 15
// Explanation: The Collatz sequence is: [11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] and its length is 15.

// * Method 1
const collatzSequence = (num) => {
  let newArr = [num];
  let newNum = 0;
  while (newArr[newArr.length - 1] !== 1) {
    if (newArr[newArr.length - 1] % 2 === 0) {
      newNum = newArr[newArr.length - 1] / 2;
      newArr.push(newNum);
    } else {
      newNum = 3 * newArr[newArr.length - 1] + 1;
      newArr.push(newNum);
    }
  }
  return newArr.length;
};

console.log("collatzSequence - ", collatzSequence(num));
