// TODO: 123 Number Flip
//* from Binary Search
// You are given an integer n consisting of digits 1, 2, and 3 and you can flip one digit to a 3. Return the maximum number you can make.
const number1 = "123";
const number2 = "333";

// Input: n = 123
// Output: 323
// Explanation: We flip 1 to 3

// Input: n = 333
// Output: 333
// Explanation: Flipping doesn't help.

// * Method 1: <Add method summary>
const numberFlip = (number) => {
  let arr = number.toString().split("");
  for (let num in arr) {
    if (parseInt(arr[num]) < 3) {
      arr[num] = "3";
      break;
    }
  }
  return parseInt(arr.join(""));
};

console.log("numberFlip - ", numberFlip(number1), numberFlip(number2));
