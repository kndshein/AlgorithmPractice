// TODO: Ancient Astronaut Theory
//* from Binary Search
// You are given a string dictionary, representing a partial lexicographic ordering of ancient astronauts' dictionary. Given a string s, return whether it's a lexicographically sorted string according to this ancient astronaut dictionary.
const dictionary1 = "acb";
const string1 = "aaaa h ccc i bbb";

const dictionary2 = "acb";
const string2 = "aaaacccbc";

// Input: dictionary = "acb" s = "aaaa h ccc i bbb"
// Output: true
// Explanation: The only constraint is that a comes before c which comes before b.

// Input: dictionary = "acb" s = "aaaacccbc"
// Output: false
// Explanation: This is false because of the last c, which comes after b.

// * Method 1: For Loop + If/Else
const ancientAstronautTheory = (dictionary, string) => {
  let previousLargest = -1;
  for (let letter of dictionary) {
    let temp = string.indexOf(letter);
    if (temp === -1) {
      continue;
    } else if (temp > previousLargest) {
      previousLargest = string.lastIndexOf(letter);
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  "ancientAstronautTheory - ",
  ancientAstronautTheory(dictionary1, string1),
  ancientAstronautTheory(dictionary2, string2)
);
