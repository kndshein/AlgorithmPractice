// TODO: Length of Longest Balanced Subsequence
//* from Binary Search
// Given a string s containing brackets "(" and ")", return the length of the longest subsequence of balanced brackets.
const string1 = "())(()";
const string2 = "))((";
const string3 = "))()))()";

// Input: string = "())(()"
// Output: 4
// Explanation: We can take the subsequence "()()"

// Input: string = "))(("
// Output: 0
// Explanation: We can't take any letters from s that's balanced, so the longest balanced subsequence is "" (empty string).

// Input: string = "))()))()"
// Output: 4
// Explanation: We can take the subsequence "()()". Note that characters in the subsequence do not have to be contiguous.

// * Method 1: Two Counter + For Loop + If/Else
const longestBalancedSubsequence1 = (string) => {
  let count = 0;
  let count2 = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      count++;
      count2++;
    } else if (string[i] === ")" && count <= 0) {
      continue;
    } else if (string[i] === ")") {
      count--;
      count2++;
    } else {
      continue;
    }
  }
  return count2 - count;
};

console.log(
  "longestBalancedSubsequence1 - ",
  longestBalancedSubsequence1(string1),
  longestBalancedSubsequence1(string2),
  longestBalancedSubsequence1(string3)
);

// * Method 2: <Add method summary>
const longestBalancedSubsequence2 = (string) => {
  let count = 0;
  let totalCount = 0;
  for (let bracket of string) {
    if (bracket === "(") {
      count++;
      totalCount++;
    } else if (bracket === ")" && count > 0) {
      count--;
      totalCount++;
    }
  }
  return totalCount - count;
};
console.log(
  "longestBalancedSubsequence2 - ",
  longestBalancedSubsequence2(string1),
  longestBalancedSubsequence2(string2),
  longestBalancedSubsequence2(string3)
);
