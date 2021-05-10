// TODO: Count Next Element
//* from Binary Search
// Given a list of integers nums, return the number of elements x there are such that x + 1 exists as well.
const nums = [3, 1, 2, 2, 7];

// Input: nums = [3, 1, 2, 2, 7]
// Output: 3
// Explanation: We can take 1 since 1 + 1 exists in the list.2 since 2 + 1 exists in the list. Another 2.

// * Method 1
const countNextElement1 = (nums) => {
  let set = new Set(nums);
  let count = 0;
  for (let bum of nums) {
    if (set.has(bum + 1)) {
      count++;
    }
  }
  return count;
};

console.log("countNextElement1 - ", countNextElement1(nums));

// * Method 2
const countNextElement2 = (nums) => {
  let freq = {};
  let count = 0;
  for (let num of nums) {
    freq[num] = true;
  }
  for (let bum of nums) {
    if (freq[bum + 1]) {
      count++;
    }
  }
  return count;
};

console.log("countNextElement2 - ", countNextElement2(nums));
