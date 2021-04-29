// TODO: Palindrome Linked List
// Given a singly linked list node whose values are integers, determine whether the linked list forms a palindrome.

class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let node = new LLNode(5, 3);
node = node.next;
node = new LLNode(3, 5);
// Input: node = 5-> 3 -> 5
// Output: true
// Explanation: 5 -> 3 -> 5 is a palindrome.

// Input: node = 12 -> 8 -> 12
// Output: true
// Explanation: The values of the linked list are the same forwards and backwards.

// * Method 1: <Add method summary>
const palindromeLinkedList = (node) => {
  if (node === null) {
    return true;
  }
  let arr = [];
  while (node.next !== null) {
    arr.push(node.val);
    node = node.next;
  }
  arr.push(node.val);

  return arr.join("") === arr.reverse().join("");
};

palindromeLinkedList(node);
// console.log("functionName1 - ", palindromeLinkedList(node));
