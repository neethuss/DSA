class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

function arrayToLinkedList(arr){
  if(!arr || arr.length === 0){
    return null
  }

  let head = new Node(arr[0])
  let curr = head
  for(let i=1 ; i<arr.length ;i++){
    curr.next = new Node(arr[i])
    curr = curr.next
  }
  curr.next = null
  return head
}

let arr = [1,2,3]
console.log(arrayToLinkedList(arr));