// TODO: Equivalent Value and Frequency
//* from Binary Search
// Given a list of integers nums, return whether there's an integer whose frequency in the list is same as its value.
const nums = [7, 9, 3, 3, 3];

// Input: nums = [7, 9, 3, 3, 3]
// Output: true
// Explanation: The number 3 appears 3 times.

// * Method 1
const equalValAndFreq = (nums) => {
  let hash = {};
  for (let num of nums) {
    hash[num] = -~hash[num];
  }
  for (let key of Object.keys(hash)) {
    if (key == hash[key]) {
      return true;
    }
  }
  return false;
};

console.log("equalValAndFreq - ", equalValAndFreq(nums));
