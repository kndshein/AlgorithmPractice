// TODO: Check Palindrome
//* from Binary Search
// Given a string return whether it is a palindrome.
const string1 = "racecar";
const string2 = "evilolive";
const string3 = "palindrome";

// Input: string = "racecar"
// Output: true

// Input: string = "evilolive"
// Output: true

// Input: string = "palindrome"
// Output: false

// * Method 1
const checkPalindrome1 = (string) => {
  return string === string.split("").reverse().join("");
};

console.log(
  "checkPalindrome1 - ",
  checkPalindrome1(string1),
  checkPalindrome1(string2),
  checkPalindrome1(string3)
);
