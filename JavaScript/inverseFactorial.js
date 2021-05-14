// TODO: Inverse Factorial
//* from Binary Search
//* 4/2021
// The factorial of a number n is defined as n! = n * (n - 1) * (n - 2) * ... * 1. Given a positive integer a, return n such that n! = a. If there is no integer n that is a factorial, then return -1.
const num1 = 6;
const num2 = 10;

// Input: a = 6
// Output: 3
// Explanation: 3! = 6

// Input: a = 10
// Output: -1
// Explanation: 10 is not any integer factorial.

// * Method 1
const inverseFactorial1 = (num) => {
  let n = 1;
  while (num > 1) {
    num = num / n;
    n++;
  }
  return num === 1 ? n - 1 : -1;
};

console.log(
  "inverseFactorial1 - ",
  inverseFactorial1(num1),
  inverseFactorial1(num2)
);

// * Method 2
const inverseFactorial2 = (num) => {
  let arr = [1];
  let n = 1;
  while (n <= num) {
    if (arr.reduce((a, b) => a * b) === num) {
      return arr.pop();
    } else {
      n++;
      arr.push(n);
    }
  }
  return -1;
};

console.log(
  "inverseFactorial2 - ",
  inverseFactorial2(num1),
  inverseFactorial2(num2)
);
