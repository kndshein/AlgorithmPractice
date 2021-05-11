// TODO: Fixed Point !Wrong Solution
//* from Binary Search
//* 4/2021
// Given a list of unique integers nums sorted in ascending order, return the minimum i such that nums[i] == i. If there's no solution, return -1. This should be done in O(log(n))\mathcal{O}(log(n))O(log(n)) time.
const nums1 = [-5, -2, 0, 3, 4];
const nums2 = [-5, -4, 0];

// Input: nums = [-5, -2, 0, 3, 4]
// Output: 3
// Explanation: Both nums[3] == 3 and nums[4] == 4 but 3 is smaller.

// Input: nums = [-5, -4, 0]
// Output: -1
// Explanation: There's no i such that nums[i] = i.

// * Method 1
const fixedPoint = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      return i;
    }
  }
  return -1;
};

console.log("fixedPoint - ", fixedPoint(nums1), fixedPoint(nums2));
