// TODO: Integer to Base 3
//* from Binary Search
//* 4/2021
// Given an integer n, return its base 3 representation as a string.
const num1 = 7;
const num2 = 11;

// Input: n = 7
// Output: 21

// Input: n = 11
// Output: 102

// * Method 1
const integerToBase3 = (num) => {
  return num.toString(3);
};

console.log("integerToBase3 - ", integerToBase3(num1), integerToBase3(num2));
