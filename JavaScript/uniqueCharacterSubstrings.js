// TODO: Number of Unique Character Substrings
//* from Binary Search
// Given a lowercase alphabet string s, return the total number of substrings that contain one unique character.
const string = "aab";

// Input: s = "aab"
// Output: 4
// Explanation: These substrings have one unique character: ["a", "a", "aa", "b"]

// * Method 1: Counter + Nested For Loops + Sets + If/Else
const uniqueCharacterSubstrings1 = (string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let temp = string[i];
    count++;
    for (let j = i + 1; j < string.length; j++) {
      temp += `${string[j]}`;
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
  "uniqueCharacterSubstrings1 - ",
  uniqueCharacterSubstrings1(string)
);

// * Method 2 (From Editorial): Counter + Nested For Loops + If/Else
const uniqueCharacterSubstrings2 = (string) => {
  let count = string.length;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[j] !== string[i]) break;
      count++;
    }
  }
  return count;
};

console.log(
  "uniqueCharacterSubstrings2 - ",
  uniqueCharacterSubstrings2(string)
);
