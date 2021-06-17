// TODO: Longest Common Prefix
//* from Binary Search
//* 04/2021
// Given a list of lowercase alphabet strings words, return the longest common prefix.
const words = ["anthony", "ant", "antigravity"];

// Input: words = ["anthony", "ant", "antigravity"]
// Output: "ant"
// Explanation: "ant" is the longest common prefix between the three strings.

// * Method 1
const longestCommonPrefix = (words) => {
  let short = words.reduce((a, b) => {
    if (b.length < a.length) {
      return b;
    } else {
      return a;
    }
  });

  let arr = [];

  for (let word of words) {
    let count = 0;
    for (let j = 0; j < short.length; j++) {
      if (word[j] === short[j]) {
        count++;
      } else {
        break;
      }
    }
    arr.push(count);
  }

  let newArr = [];

  for (let i = 0; i < Math.min(...arr); i++) {
    newArr.push(short[i]);
  }

  return newArr.join("");
};

console.log("longestCommonPrefix - ", longestCommonPrefix(words));
