// TODO: FizzBuzz
//* from Binary Search
//* 5/11/2021
// Given an integer n, return a list of integers from 1 to n as strings except for multiples of 3 use “Fizz” instead of the integer and for the multiples of 5 use “Buzz”. For integers which are multiples of both 3 and 5 use “FizzBuzz”.
const num = 15;

// Input: num = 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

// * Method 1
const fizzBuzz1 = (n) => {
  let arr = [];
  for (let i = 1; i < n + 1; i++) {
    let string = (i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i.toString();
    arr.push(string);
  }
  return arr;
};

console.log("fizzBuzz1 - ", fizzBuzz1(num));

// * Method 2
const fizzBuzz2 = (n) => {
  let ans = [];
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ans.push("FizzBuzz");
      // console.log(ans)
    } else if (i % 5 === 0) {
      ans.push("Buzz");
    } else if (i % 3 === 0) {
      ans.push("Fizz");
    } else {
      ans.push(i.toString());
    }
  }
  return ans;
};

console.log("fizzBuzz2 - ", fizzBuzz2(num));
