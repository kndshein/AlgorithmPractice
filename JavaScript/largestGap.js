// TODO: Largest Gap
//* from Binary Search
//* 03/2021
// Given a list of integers nums, return the largest difference of two consecutive integers in the sorted version of nums.
const nums = [4, 1, 2, 8, 9, 10];

// Input: nums = [4, 1, 2, 8, 9, 10]
// Output: 4
// Explanation: The largest gap is between 4 and 8.

// * Method 1
const largestGap = (nums) => {
  let largestDiff = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > largestDiff) {
      largestDiff = nums[i + 1] - nums[i];
    }
  }
  return largestDiff;
};

console.log("largestGap - ", largestGap(nums));
