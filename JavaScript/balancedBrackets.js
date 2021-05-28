// TODO: Balanced Brackets
//* from Binary Search
//* 5/11/2021
// You're given a string s consisting solely of "(" and ")". Return whether the parentheses are balanced.
const string1 = "()"; // true
const string2 = "()()"; // true
const string3 = ")("; // false
const string4 = ""; // true
const string5 = "(((())))"; //true
const string6 = "((()"; //false

// * Method 1
const balancedBrackets = (s) => {
  let count = 0;
  for (let bracket of s) {
    if (bracket === "(") {
      count++;
    }
    if (bracket === ")") {
      count--;
    }
    if (count < 0 && bracket === ")") {
      return false;
    }
  }
  return count === 0;
};

console.log(
  "balancedBrackets - ",
  balancedBrackets(string1),
  balancedBrackets(string2),
  balancedBrackets(string3),
  balancedBrackets(string4),
  balancedBrackets(string5),
  balancedBrackets(string6)
);
