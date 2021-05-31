// TODO: Linked List to Integer
//* from Binary Search
//* 3/2021
// Given a single linked list node, representing a binary number with most significant digits first, return it as an integer.
class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node3 = new LLNode(0);
const node2 = new LLNode(0, node3);
const node = new LLNode(1, node2);

// Input: 1 -> 0 -> 0
// Output: 4
// Explanation: The linked list represented 100 in binary.

// * Method 1
const linkedListToInteger = (node) => {
  let arr = [];
  while (node.next !== null) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);
  return parseInt(arr.join(""), 2);
};

console.log("linkedListToInteger - ", linkedListToInteger(node));
