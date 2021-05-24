// TODO: Largest Number By Two Times
//* from Binary Search
//* 04/2021
// Given a list of integers nums, return whether the largest number is bigger than the second-largest number by more than two times.
const nums1 = [3, 6, 9];
const nums2 = [3, 6, 15];
const nums3 = [3, 6, 12];

// Input: nums = [3, 6, 9]
// Output: false
// Explanation: 9 is not bigger than 2 * 6.

// Input: nums = [3, 6, 15]
// Output: true
// Explanation: 15 is bigger than 12 (2 * 6).

// Input: nums = [3, 6, 12]
// Output: false
// Explanation: 12 is not bigger than 2 * 6, they're equal.

// * Method 1
const largestNumByTwoTimes = (nums) => {
  let highest = nums.splice(nums.indexOf(Math.max(...nums)), 1);
  let secondHighest = nums.splice(nums.indexOf(Math.max(...nums)), 1);

  if (highest > secondHighest * 2) {
    return true;
  } else {
    return false;
  }
};

console.log(
  "largestNumByTwoTimes - ",
  largestNumByTwoTimes(nums1),
  largestNumByTwoTimes(nums2),
  largestNumByTwoTimes(nums3)
);
