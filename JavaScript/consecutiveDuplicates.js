// TODO: Consecutive Duplicates
//* from Binary Search
// Given a string s, consisting of "X" and "Y"s, delete the minimum number of characters such that there's no consecutive "X" and no consecutive "Y".
const string = "YYYXYXX";

// Input: string = "YYYXYXX"
// Output: "YXYX"
// Explanation: One solution is to delete the first two "Y"s and the last "X".

// * Method 1
const consecutiveDuplicates = (string) => {
  string = string.split("");
  let counter = 0;
  while (counter < string.length) {
    if (string[counter] === string[counter + 1]) {
      string.splice(counter, 1);
      counter--;
    }
    counter++;
  }
  return string.join("");
};

console.log("consecutiveDuplicates - ", consecutiveDuplicates(string));
