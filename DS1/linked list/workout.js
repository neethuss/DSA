class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insert(value,index){
    if(index < 0 || index > this.size){
      console.log('Invalid index')
      return
    }
    if(index === 0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i=0 ; i<index-1 ; i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index){
    if(index < 0 || index >= this.size){
      console.log('Invalid index')
      return
    }
    let removeNode
    if(index === 0){
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0 ;i<index-1;i++){
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
  }

  removeValue(value){
    if(this.isEmpty()){
      conseole.log('Empty list')
      return 
    }
    if(this.head.value === value){
      this.head = this.head.next
      this.size--
      return value
    }else{
      let prev = this.head
      while(prev.next && prev.next.value != value){
        prev = prev.next
      }
      let removeNode = prev.next
      prev.next = removeNode.next
      this.size--
      return value
    }
  }

  search(value){
    if(this.isEmpty()){
      console.log('Empty list');
      return
    }
    let i=0
    let curr = this.head
    while(curr){
      if(curr.value===value){
        return i
      }
      i++
    }
  }

  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  deleteMiddleNode(){
    if(this.isEmpty()){
      console.log('Empty list');
      return
    }
    let slow = this.head
    let fast = this.head
    let prev = null
    while(fast && fast.next){
      fast = fast.next.next
      prev = slow
      slow = slow.next 
    }
    if(prev){
      prev.next = slow.next
    }else{
      this.head = slow.next
    }
  }
  
  print(){
    if(this.isEmpty()){
      console.log('Empty list')
      return
    }else{
      let curr = this.head
      let listValues = ''
      while(curr){
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues);
    }
    return -1
  }

}

const list = new LinkedList();
list.prepend(1)
list.append(2)
list.insert(3,1)
list.print()
list.reverse()
list.print()
list.deleteMiddleNode()
list.print()