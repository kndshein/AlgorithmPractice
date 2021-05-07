// TODO: Packing Boxes
//* from Binary Search
// Given a list of integers nums, pack consecutive elements of the same value into sublists.
// Note: If there's only one occurrence in the list it should still be in its own sublist.
const nums1 = [4, 4, 1, 6, 6, 6, 1, 1, 1, 1];
const nums2 = [5, 5, 5, 5, 5, 5, 5, 5];

// Input: nums = [4, 4, 1, 6, 6, 6, 1, 1, 1, 1]
// Output: [[4, 4], [1], [6, 6, 6], [1, 1, 1, 1]]

// Input: nums = [5, 5, 5, 5, 5, 5, 5, 5]
// Output: [[5, 5, 5, 5, 5, 5, 5, 5]]

// * Method 1: <Add method summary>
const packingBoxes = (nums) => {
  let output = [];
  let arrIndex = -1;
  let iterator = 0;
  while (iterator < nums.length) {
    if (nums[iterator] !== nums[iterator - 1]) {
      output.push([]);
      arrIndex++;
    }
    output[arrIndex].push(nums[iterator]);
    iterator++;
  }
  return output;
};

console.log("packingBoxes - ", packingBoxes(nums1), packingBoxes(nums2));
