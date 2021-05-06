// TODO: A Unique String
//* from Binary Search
// Given a lowercase alphabet string s, determine whether it has all unique characters.
const string1 = "abcde";
const string2 = "banana";
const string3 = "";

// Input: s = "abcde"
// Output: true
// Explanation: All characters only occur once

// Input: s = "aab"
// Output: false
// Explanation: There's two a's

// Input: s = ""
// Output: true
// Explanation: All characters occur once (of which there are none)

// * Method 1: Hash Table + For Loop + If/Else
const aUniqueString1 = (string) => {
  let hash = {};
  for (let letter of string) {
    if (hash[letter]) {
      return false;
    } else {
      hash[letter] = true;
    }
  }
  return true;
};

console.log(
  "aUniqueString1 - ",
  aUniqueString1(string1),
  aUniqueString1(string2),
  aUniqueString1(string3)
);

// * Method 2: Nested For Loop + If
const aUniqueString2 = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  "aUniqueString2 - ",
  aUniqueString2(string1),
  aUniqueString2(string2),
  aUniqueString2(string3)
);
