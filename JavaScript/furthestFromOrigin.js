// TODO: Furthest From Origin
//* from Binary Search
//* 4/2021
// You are given a string s where each character is "L" meaning you moved one unit left, "R" meaning you moved one unit right, or "?" meaning either "L" or "R". Given you are at position 0, return the maximum possible distance you could be from 0 by replacing "?" with "L" or "R".
const string = "LLRRR??";

// Input: s = "LLRRR??"
// Output: 3
// Explanation: We can replace the two "?" with "R" to move 5 units right and 2 units left, for a total distance of 3 units from 0.

// * Method 1
const furthestFromOrigin = (string) => {
  let pos = 0;
  let mark = 0;
  for (let dir of string) {
    if (dir === "L" || dir === "R") {
      dir === "L" ? pos-- : pos++;
    } else {
      mark++;
    }
  }
  return pos > 0 ? pos + mark : Math.abs(pos - mark);
};

console.log("furthestFromOrigin - ", furthestFromOrigin(string));
