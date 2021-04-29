// TODO: Lone Integer
//* from Binary Search
// You are given a list of integers nums where each integer occurs exactly three times except for one which occurs once. Return the lone integer.
const nums1 = [2, 2, 2, 9, 5, 5, 5];
const nums2 = [7, 1, 1, 1];

// Input: nums = [2, 2, 2, 9, 5, 5, 5]
// Output: 9

// Input: nums = [7, 1, 1, 1]
// Output: 7

// * Method 1: <Add method summary>
const loneInteger = (nums) => {
  let obj = {};
  for (let num of nums) {
    obj[num] = -~obj[num];
  }
  return parseInt(
    Object.keys(obj).reduce((key, v) => (obj[v] < obj[key] ? v : key))
  );
};

console.log("loneInteger1 - ", loneInteger(nums1), loneInteger(nums2));
