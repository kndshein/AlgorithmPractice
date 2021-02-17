// TODO: Count Characters
// In a given string, return an object with a count of each character
const string = "aaaaabbbbcdddddeefffggg";

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

// * Method 2: <Add method summary>
// const functionName2 = (param) => {};
// console.log("<functionName>2 - ", functionName2(string));
