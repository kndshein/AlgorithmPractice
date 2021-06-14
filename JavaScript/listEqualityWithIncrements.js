// TODO: List Equality with Increments
//* from Binary Search
//* 05/2021
// You are given a list of integers nums, and want to make the values equal. Consider an operation where you pick an integer in the list and increment every other value. Return the minimum number of operations required to make integer values equal.
const nums = [1, 3, 4];

// Input: nums = [1, 3, 4]
// Output: 5
// Explanation: Here are the operations we can use:
// [2, 4, 4]
// [3, 5, 4]
// [4, 5, 5]
// [5, 6, 5]
// [6, 6, 6]

// * Method 1
const listEqualIncrement = (nums) => {
  let min = Math.min(...nums);
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    counter += nums[i] - min;
  }
  return counter;
};

console.log("listEqualIncrement - ", listEqualIncrement(nums));
