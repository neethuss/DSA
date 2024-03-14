class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (!arr || arr.length === 0) {
      return null;
  }

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
  }
current.next = null
  return head;
}

const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
console.log(linkedList);
