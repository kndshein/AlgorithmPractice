// TODO: Intervals Intersecting at Point
//* from Binary Search
//* 4/2021
// You are given a two-dimensional list of integers intervals and an integer point. Each element contains [start, end] represents an inclusive interval. Return the number of intervals that are intersecting at point.
const intervals = [
    [1, 5],
    [3, 9],
    [4, 8],
    [10, 13],
  ],
  point = 4;

// Input: intervals = [
//     [1, 5],
//     [3, 9],
//     [4, 8],
//     [10, 13]
// ]
// point = 4
// Output: 3
// Explanation: At time 4, there are 3 intervals that are intersecting: [1, 5], [3, 9], [4, 8]

// * Method 1
const pointIntersection = (intervals, point) => {
  let count = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (point >= intervals[i][0] && point <= intervals[i][1]) {
      count++;
    }
  }
  return count;
};

console.log("pointIntersection - ", pointIntersection(intervals, point));
