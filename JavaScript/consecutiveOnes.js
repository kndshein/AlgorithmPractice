// TODO: Consecutive Ones
//* from Binary Search
// You are given a list of integers nums which contains at least one 1. Return whether all the 1s appear consecutively.
const nums1 = [0, 1, 1, 1, 2, 3];
const nums2 = [1, 1, 0, 1, 1];

// Input: nums = [0, 1, 1, 1, 2, 3]
// Output: true
// Explanation: All the 1s appear consecutively here in the middle.

// Input: nums = [1, 1, 0, 1, 1]
// Output: false
// Explanation: There's two groups of consecutive 1s.

// * Method 1
const consecutiveOnes = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] === 1) {
      count++;
    }
  }
  return count <= 1;
};

console.log(
  "consecutiveOnes - ",
  consecutiveOnes(nums1),
  consecutiveOnes(nums2)
);
