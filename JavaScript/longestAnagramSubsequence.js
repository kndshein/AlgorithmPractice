// TODO: Longest Anagram Subsequence
//* from Binary Search
//* 5/11/2021
// <A short description of the objective>
const string1 = "afbc";
const string2 = "cxba";

// Input: a = "afbc", b = "cxba"
// Output: 3
// Explanation:
// "abc" is a subsequence in "afbc"
// "cba" is a subsequence in "cxba"
// And abc and cba are anagrams of each other.

// * Method 1
const longestAnagramSubsequence1 = (a, b) => {
  let hash = {},
    hash2 = {},
    count = 0;
  for (let letter of a) {
    hash[letter] = -~hash[letter];
  }
  for (let letter of b) {
    hash2[letter] = -~hash2[letter];
  }
  for (let letter in hash) {
    if (hash[letter] && hash2[letter]) {
      count += Math.min(hash[letter], hash2[letter]);
    }
  }
  return count;
};

console.log(
  "longestAnagramSubsequence1 - ",
  longestAnagramSubsequence1(string1, string2)
);

// * Method 2
const longestAnagramSubsequence2 = (a, b) => {
  if (a.length === 0 || b.length === 0) {
    return 0;
  }
  let hash = {};
  for (let letter of a) {
    hash[letter] = -~hash[letter];
  }
  for (let letter of b) {
    if (hash[letter]) {
      hash[letter] -= 1;
    }
  }
  let value = Object.values(hash).reduce((a, b) => a + b);
  return a.length - value;
};

console.log(
  "longestAnagramSubsequence2 - ",
  longestAnagramSubsequence2(string1, string2)
);
