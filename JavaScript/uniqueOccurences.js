// TODO: Unique Occurrences
//* from Binary Search
// Given a list of integers nums, return whether the number of occurrences of every value in the array is unique. Note: Numbers can be negative.
const nums = [5, 3, 1, 8, 3, 1, 1, 8, 8, 8];

// Input: nums = [5, 3, 1, 8, 3, 1, 1, 8, 8, 8]
// Output: true
// Explanation: There's 1 occurrence of 5, 2 occurrences of 3, 3 occurrences of 1, and 4 occurrences of 8. All number of occurrences are unique.

// Input: nums = [-3, -1, -1, -1, -2, -2]
// Output: true
// Explanation: There's 1 occurrence of -3, 2 occurrences of -2, and 3 occurrences of -1. All number of occurrences are unique.

// Input: nums = [3, 1, 1, 2, 2, 2, 3]
// Output: false
// Explanation: There are 2 occurrences of 1, and 2 occurrences of 3. So the number of occurrences here is not unique.

// * Method 1: Hash Table + For Loops + Sort + For + If/Else
const uniqueOccurrences = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = -~obj[nums[i]];
  }
  let freq = Object.values(obj).sort((a, b) => a - b);
  for (let j = 0; j < freq.length; j++) {
    if (freq[j] === freq[j + 1]) {
      return false;
    }
  }
  return true;
};

console.log("uniqueOccurrences - ", uniqueOccurrences(nums));
