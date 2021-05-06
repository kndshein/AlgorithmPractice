// TODO: A Strictly Increasing Linked List
//* from Binary Search
// Given the head of a singly linked list head, return whether the values of the nodes are sorted in a strictly increasing order.
class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node1 = new LLNode(9);
const node2 = new LLNode(8, node1);
const node3 = new LLNode(5, node2);
const node4 = new LLNode(1, node3);

const node5 = new LLNode(8);
const node6 = new LLNode(8, node5);
const node7 = new LLNode(5, node6);
const node8 = new LLNode(1, node7);

// Input: head = [1, 5, 8, 9]
// Output: true
// Explanation: The values 1, 5, 8, 9 are strictly increasing.

// Input: head = [1, 5, 8, 8]
// Output: false
// Explanation: Even though this list is sorted, it's not strictly increasing since 8 is repeated.

// * Method 1: <Add method summary>
const aStrictlyIncreasingLinkedList = (head) => {
  if (head.next === null) {
    return true;
  } else if (head.val >= head.next.val) {
    return false;
  } else {
    head = head.next;
    return aStrictlyIncreasingLinkedList(head);
  }
};

console.log(
  "aStrictlyIncreasingLinkedList - ",
  aStrictlyIncreasingLinkedList(node4),
  aStrictlyIncreasingLinkedList(node8)
);
