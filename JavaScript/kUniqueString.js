// TODO: k Unique String
//* from Binary Search
// Given a string s of lowercase alphabet characters, and an integer k, return the minimum number of changes needed in the string (one change involves changing a single character to any other character) so that the resulting string has at most k distinct characters.
const s = "daabbccaa";
const k = 3;

// Input: s = "daabbccaa" k = 3
// Output: 1
// Explanation: We can remove the "d" to get 3 distinct characters (a, b, and c).

// Input: s = "daabbccaad" k = 3
// Output: 2
// Explanation: We must remove either 2 "b"s, 2 "c"s, or 2 "d"s.

// * Method 1: Hash Table + For Loop + While Loop
const kUniqueString = (s, k) => {
  let hash = {};
  for (let letter of s) {
    hash[letter] = -~hash[letter];
  }
  let distinct = Object.keys(hash).length;
  let counter = 0;
  while (k < distinct) {
    let temp = Math.min(...Object.values(hash));
    distinct--;
    counter += temp;
    delete hash[Object.keys(hash).find((key) => hash[key] === temp)];
  }
  return counter;
};

console.log("kUniqueString - ", kUniqueString(s, k));
