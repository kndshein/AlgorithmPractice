// TODO: Count Characters
// In a given string, return an object with a count of each character
const string = "aaaaabbbbcdddddeefff";

// * Method 1: for loop + if/else
const charCount1 = (string) => {
  const charHolder = {};
  for (i in string) {
    if (charHolder[string[i]]) {
      charHolder[string[i]] += 1;
    } else {
      charHolder[string[i]] = 1;
    }
  }
  return charHolder;
};
console.log("charCount1 - ", charCount1(string));

// * Method 2: .split + forEach + ternary operator
const charCount2 = (string) => {
  const stringArray = string.split("");
  const charHolder = {};
  stringArray.forEach((ele) => {
    charHolder[ele] ? (charHolder[ele] += 1) : (charHolder[ele] = 1);
  });
  return charHolder;
};
console.log("charCount2 - ", charCount2(string));
