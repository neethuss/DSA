class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Queue{
  constructor(){
    this.head = null
  }

  isEmpty(){
    return this.head === null
  }

  enqueue(value){
    let node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let curr = this.head
      while(curr.next){
        curr = curr.next
      }
      curr.next = node
    }
  }

  dequeue(){
    let deleteNode = this.head
    this.head = deleteNode.next
    return deleteNode
  }

  print(){
    let curr = this.head
    while(curr){
      console.log(curr.value);
      curr = curr.next
    }
  }
  
}

let queue = new Queue()
queue.enqueue(10)
queue.print()