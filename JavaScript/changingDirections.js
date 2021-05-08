// TODO: Changing Directions
//* from Binary Search
// Given a list of integers nums, return the number of times that the list changes from positive-to-negative or negative-to-positive slope.
const nums1 = [1, 3, 9, 7, 5, 10, 12];
const nums2 = [1, 2, 3, 3, 2, 1];

// Input: nums = [1, 3, 9, 7, 5, 10, 12]
// Output: 2
// Explanation: Change of direction happens at 9 (positive-to-negative slope), and then at 5 (negative-to-positive slope).

// Input: nums = [1, 2, 3, 3, 2, 1]
// Output: 0
// Explanation: The slope is 0 between [3, 3]. So there are no positive-to-negative or negative-to-positive changes in slope since 0 is neither positive nor negative.

// * Method 1: Counter + For Loop + If
const changingDirections = (nums) => {
  let counter = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1] && nums[i - 1] > nums[i]) {
      counter++;
    }
    if (nums[i] > nums[i + 1] && nums[i - 1] < nums[i]) {
      counter++;
    }
  }
  return counter;
};

console.log(
  "changingDirections - ",
  changingDirections(nums1),
  changingDirections(nums2)
);
