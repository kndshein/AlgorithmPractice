// TODO: Linked List Folding
//* from Binary Search
//* 5/12/2021
// You are given a singly linked list node containing integer values. Take the first half of the linked list and fold over the second half and merge the intersecting nodes by taking their sum.

class LLNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let node14 = new LLNode(4);
let node13 = new LLNode(2, node14);
let node12 = new LLNode(1, node13);
let node1 = new LLNode(3, node12);

let node23 = new LLNode(3);
let node22 = new LLNode(1, node23);
let node2 = new LLNode(2, node22);

// Input: node = [3, 1, 2, 4]
// Output: [3, 7]
// Explanation: We fold the linked list so the 3 and 4 get merged into 7, and the 1 and 2 get merged into 3.

// Input: node = [2, 1, 3]
// Output: [1, 5]
// Explanation: We fold at the 1, which doesn't change, and 2 and 3 get merged into 5.

// * Method 1
const linkedListFolding = (node) => {
  // Exploring the LinkedList
  let arr = [];
  let copy = node;
  while (copy.next !== null) {
    arr.push(copy.val);
    copy = copy.next;
  }
  arr.push(copy.val);

  // Determining the flippity flip
  let newArr = [];
  let mid = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    newArr.push(arr[mid]);
    let pointer = 1;
    for (let i = mid + 1; i < arr.length; i++) {
      let temp = arr[i] + arr[mid - pointer];
      newArr.push(temp);
      pointer++;
    }
  } else {
    let pointer = 1;
    for (let i = mid; i < arr.length; i++) {
      let temp = arr[i] + arr[mid - pointer];
      newArr.push(temp);
      pointer++;
    }
  }

  // Making the damn LinkedList
  let output = new LLNode(newArr[0]);
  let outputCopy = output;
  for (let i = 1; i < newArr.length; i++) {
    outputCopy.next = new LLNode(newArr[i]);
    outputCopy = outputCopy.next;
  }
  return output;
};

console.log(
  "linkedListFolding - ",
  linkedListFolding(node1),
  linkedListFolding(node2)
);
