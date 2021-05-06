// TODO: Roman Numeral to Integer
//* from Binary Search
// Given a string numeral representing a Roman numeral, convert it to an integer.
// Roman numerals contain the symbols representing values in the following list:
// "I" = 1
// "V" = 5
// "X" = 10
// "L" = 50
// "C" = 100
// "D" = 500
// "M" = 1000

// Roman numerals are typically written largest to smallest, from left to right, and can be computed by summing up the values of all the symbols. However, in some cases, when a symbol of lower value is to the left of a symbol of higher value, then the lower value is subtracted from the higher one.
// There are 6 cases where this is possible:
// When "I" is before "V", we get 4.
// When "I" is before "X", we get 9.
// When "X" is before "L", we get 40.
// When "X" is before "C", we get 90.
// When "C" is before "D", we get 400.
// When "C" is before "M", we get 900.

const numeral1 = "XII";
const numeral2 = "XIV";

// Input: numeral = "XII"
// Output: 12
// Explanation: "XII" = 10 + 1 + 1 = 12

// Input: numeral = "XIV"
// Output: 14
// Explanation: "XIV" = 10 + 4 = 14

// * Method 1: <Add method summary>
// Adapted from Adrian Mendez
const romanNumeralToInteger1 = (numeral) => {
  let hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0,
    prev;

  for (let i = 0; i < numeral.length; i++) {
    sum += hash[numeral[i]];
    if (hash[numeral[i]] > prev) {
      sum -= prev * 2;
    }
    prev = hash[numeral[i]];
  }

  return sum;
};

console.log(
  "romanNumeralToInteger1 - ",
  romanNumeralToInteger1(numeral1),
  romanNumeralToInteger1(numeral2)
);

// * Method 2: <Add method summary>
const romanNumeralToInteger2 = (numeral) => {
  let hash = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < numeral.length; i++) {
    sum += hash[numeral[i]];
    if (numeral[i] === "I") {
      if (numeral[i + 1] === "V" || numeral[i + 1] === "X") {
        sum -= 2;
      }
    } else if (numeral[i] === "X") {
      if (numeral[i + 1] === "L" || numeral[i + 1] === "C") {
        sum -= 20;
      }
    } else if (numeral[i] === "C") {
      if (numeral[i + 1] === "D" || numeral[i + 1] === "M") {
        sum -= 200;
      }
    }
  }
  return sum;
};

console.log(
  "romanNumeralToInteger2 - ",
  romanNumeralToInteger2(numeral1),
  romanNumeralToInteger2(numeral2)
);
