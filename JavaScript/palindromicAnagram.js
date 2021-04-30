// TODO: Palindromic Anagram
//* from Binary Search
// Given a string s, determine whether any anagram of s is a palindrome.
const s1 = "carrace";
const s2 = "carace";

// Input: s = "carrace"
// Output: true
// Explanation: "carrace" should return true, since it can be rearranged to form "racecar", which is a palindrome.

// * Method 1: Hash table + counter + tenary operator
const palindromicAnagram1 = (string) => {
  let freq = {};
  let oddCount = 0;
  for (const letter of string) {
    freq[letter] = -~freq[letter];
    freq[letter] % 2 === 1 ? oddCount++ : oddCount--;
  }
  return oddCount <= 1;
};

console.log(
  "palindromicAnagram1 - ",
  palindromicAnagram1(s1),
  palindromicAnagram1(s2)
);
