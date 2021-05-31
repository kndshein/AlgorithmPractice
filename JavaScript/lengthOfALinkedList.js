// TODO: Length of a Linked List
//* from Binary Search
//* 3/2021
// Given a singly linked list node, return its length. The linked list has fields next and val.

class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node12 = new LLNode(3);
const node11 = new LLNode(4, node12);
const node1 = new LLNode(5, node11);

const node21 = new LLNode(2);
const node2 = new LLNode(1, node21);

// Input: 5 -> 4 -> 3
// Output: 3
// Explanation: This linked list has 3 nodes.

// Input: 1 -> 2
// Output: 2
// Explanation: This linked list has 2 nodes.

// * Method 1
const linkedListLength = (node) => {
  if (node === null) {
    return 0;
  }
  let count = 1;
  let currentNode = node;
  // console.log(node.next)
  while (currentNode.next !== null) {
    count = count + 1;
    currentNode = currentNode.next;
  }
  return count;
};

console.log(
  "linkedListLength - ",
  linkedListLength(node1),
  linkedListLength(node2)
);
