// TODO: Find Local Peaks
//* from Binary Search
//* N/A
// You are given a list of integers nums. Return the index of every peak in the list, sorted in ascending order. An index i is called a peak if
// nums[i] > nums[i + 1] if i = 0
// nums[i] > nums[i - 1] if i = n - 1
// nums[i - 1] < nums[i] > nums[i + 1] otherwise
// However, a list of length 1 is not considered a peak.
const nums1 = [1, 2, 3, 2, 4];
const nums2 = [1, 1, 1, 1];
const nums3 = [3, 4];

// Input: nums = [1, 2, 3, 2, 4]
// Output: [2,4]
// Explanation: The values at index 2 and 4 are considered peaks since they are larger than their neighbors.

// Input: nums = [1, 1, 1, 1]
// Output: []

// Input: nums = [5]
// Output: []

// Input: nums = [3,4]
// Output: [1]

// * Method 1
const localPeaks = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (nums[i] > nums[i + 1]) {
        arr.push(i);
      }
    }
    if (i === nums.length - 1) {
      if (nums[i] > nums[i - 1]) {
        arr.push(i);
      }
    }
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(
  "localPeaks - ",
  localPeaks(nums1),
  localPeaks(nums2),
  localPeaks(nums3)
);
