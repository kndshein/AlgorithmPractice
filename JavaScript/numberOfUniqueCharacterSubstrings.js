// TODO: Number of Unique Character Substrings
//* from Binary Search
// <A short description of the objective>
const string1 = "aab";
const string2 = "aaaababaabba";

// Input: s = "aab"
// Output: 4
// Explanation: These substrings have one unique character: ["a", "a", "aa", "b"]

// Input: s = "aaaababaabba"
// Output: 20

// * Method 1: Counter + Nested For Loop + If/Else + Set
const numberOfUniqueCharacterSubstrings1 = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    count++;
    for (let j = i + 1; j < s.length; j++) {
      temp += `${s[j]}`;
      let set = new Set(temp);
      if (set.size < 2) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(
  "numberOfUniqueCharacterSubstrings1 - ",
  numberOfUniqueCharacterSubstrings1(string1),
  numberOfUniqueCharacterSubstrings1(string2)
);

// * Method 2: Counter + Nested For Loop + If/Else
const numberOfUniqueCharacterSubstrings2 = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

console.log(
  "numberOfUniqueCharacterSubstrings2 - ",
  numberOfUniqueCharacterSubstrings2(string1),
  numberOfUniqueCharacterSubstrings2(string2)
);
