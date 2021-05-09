// TODO: Compress String
//* from Binary Search
// Given a string lowercase alphabet s, eliminate consecutive duplicate characters from the string and return it. That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.
const string = "aaaaaabbbccccaaaaddf";

// Input: string = "aaaaaabbbccccaaaaddf"
// Output: "abcadf"

// * Method 1
const compressString = (string) => {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      continue;
    }
    output += string[i];
  }
  return output;
};

console.log("compressString - ", compressString(string));
