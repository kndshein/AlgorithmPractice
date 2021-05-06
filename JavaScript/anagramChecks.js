// TODO: Anagram Checks
//* from Binary Search
// Given two strings s0 and s1, return whether they are anagrams of each other.
const compare1String1 = "listen";
const compare1String2 = "silent";

const compare2String1 = "bedroom";
const compare2String2 = "bathroom";

// Input: s0 = "listen", s1 = "silent"
// Output: true

// Input: s0 = "bedroom", s1 = "bathroom"
// Output: false

// * Method 1: Split + Sort + For Loop + If/Else
const anagramChecks1 = (s0, s1) => {
  if (s0.length !== s1.length) {
    return false;
  }

  let arr0 = s0.split("").sort();
  let arr1 = s1.split("").sort();

  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i] === arr1[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  "anagramChecks1 - ",
  anagramChecks1(compare1String1, compare1String2),
  anagramChecks1(compare2String1, compare2String2)
);

// * Method 2: Split + Sort + Join
const anagramChecks2 = (s0, s1) => {
  return s0.split("").sort().join("") === s1.split("").sort().join("");
};

console.log(
  "anagramChecks2 - ",
  anagramChecks2(compare1String1, compare1String2),
  anagramChecks2(compare2String1, compare2String2)
);
