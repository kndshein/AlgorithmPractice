// TODO: Closest Distance to Character
//* from Binary Search
// Given a string s and a character c, return a new list of integers of the same length as s where for each index i its value is set the closest distance of s[i] to c. You can assume c exists in s.
const string = "aabaab";
const target = "b";

// Input: <example input here>
// Output: <example output here>
// Explanation: <explanation here>

// * Method 1
const closestDistance = (s, c) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      arr.push(0);
    } else {
      let distance1;
      let distance2;
      for (let x = i; x <= s.length; x++) {
        if (s[x] === c) {
          distance1 = Math.abs(x - i);
          break;
        }
      }
      for (let y = i; y >= 0; y--) {
        if (s[y] === c) {
          distance2 = Math.abs(y - i);
          break;
        }
      }

      if (distance1 === undefined) {
        arr.push(distance2);
      } else if (distance2 === undefined) {
        arr.push(distance1);
      } else if (distance1 < distance2) {
        arr.push(distance1);
      } else {
        arr.push(distance2);
      }
    }
  }
  return arr;
};

console.log("closestDistance - ", closestDistance(string, target));
