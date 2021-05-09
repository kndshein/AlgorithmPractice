// TODO: Complete an Arithmetic Sequence
//* from Binary Search
// You are given a list of integers nums that used to be an arithmetic sequence. Given that a number was removed, and that the number was not the first or the last element, return the removed number.
const nums1 = [1, 3, 5, 9];
const nums2 = [1, 5];

// Input: nums = [1, 3, 5, 9]
// Output: 7
// Explanation: If we add 7 in to this sequence, we get [1, 3, 5, 7, 9] which is an arithmetic sequence.

// Input: nums = [1, 5]
// Output: 3

// * Method 1
const arithmeticSequence = (nums) => {
  let diff = (nums[nums.length - 1] - nums[0]) / nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] !== nums[i] + diff) {
      return nums[i] + diff;
    }
  }
};

console.log(
  "arithmeticSequence - ",
  arithmeticSequence(nums1),
  arithmeticSequence(nums2)
);
