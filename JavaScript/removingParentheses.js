// TODO: Removing Parentheses
//* from Binary Search
// Given a string of parentheses s, return the minimum number of parentheses to be removed to make the string balanced.
const string1 = "()())()";
const string2 = ")(";
const string3 = "))))((((";

// Input: string = "()())()"
// Output: 1
// Explanation: We can remove the ")" at index 4 to make it balanced.

// Input: string = ")("
// Output: 2

// Input: string = "))))(((("
// Output: 8

// * Method 1: Counters + For Loop + Nested If/Else
const removingParentheses = (string) => {
  let openCount = 0;
  let closeCount = 0;
  for (let paren of string) {
    if (paren === "(") {
      openCount++;
    } else if (paren === ")") {
      if (openCount > 0) {
        openCount--;
      } else {
        closeCount++;
      }
    }
  }
  return openCount + closeCount;
};

console.log(
  "removingParentheses - ",
  removingParentheses(string1),
  removingParentheses(string2),
  removingParentheses(string3)
);
