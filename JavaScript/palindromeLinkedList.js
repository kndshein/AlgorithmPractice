// TODO: Palindrome Linked List
//* from Binary Search
// Given a singly linked list node whose values are integers, determine whether the linked list forms a palindrome.

class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node1 = new LLNode(5);
const node2 = new LLNode(3, node1);
const node3 = new LLNode(5, node2);

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

// palindromeLinkedList(node1);
console.log("functionName1 - ", palindromeLinkedList(node3));
