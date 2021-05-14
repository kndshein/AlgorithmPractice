// TODO: Interleaved String
//* from Binary Search
//* 4/2021
// Given two strings s0 and s1, return the two strings interleaved, starting with s0. If there are leftover characters in a string they should be added to the end.
const string11 = "abc";
const string12 = "xyz";

const string21 = "abc";
const string22 = "x";

// Input: s0 = "abc" s1 = "xyz"
// Output: "axbycz"

// Input: s0 = "abc" s1 = "x"
// Output: "axbc"

// * Method 1
const interleavedString = (s0, s1) => {
  let arr = [];
  let loop;
  s0.length < s1.length ? (loop = s1) : (loop = s0);
  for (let letter in loop) {
    arr.push(s0[letter]);
    arr.push(s1[letter]);
  }
  return arr.join("");
};

console.log(
  "interleavedString - ",
  interleavedString(string11, string12),
  interleavedString(string21, string22)
);
