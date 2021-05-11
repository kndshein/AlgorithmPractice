// TODO: First Fit Room
//* from Binary Search
//* April 2021
// You are given a list of integers rooms and an integer target. Return the first integer in rooms that's target or larger. If there is no solution, return -1.
const rooms1 = [15, 10, 30, 50, 25];
const target1 = 20;

const rooms2 = [15, 10, 30, 50, 25];
const target2 = 51;

// Input: rooms = [15, 10, 30, 50, 25] target = 20
// Output: 30
// Explanation: 30 is the first room that's at least as large as 20.

// Input: rooms = [15, 10, 30, 50, 25] target = 51
// Output: -1
// Explanation: There's no room that's at least 51.

// * Method 1
const firstFitRoom = (rooms, target) => {
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i] >= target) {
      return rooms[i];
    }
  }
  return -1;
};

console.log(
  "firstFitRoom - ",
  firstFitRoom(rooms1, target1),
  firstFitRoom(rooms2, target2)
);
