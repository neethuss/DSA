class Node{
  constructor(value){
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size===0
  }

  getSize(){
    return this.size
  }

  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  append(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  removeFromFront(){
    if(this.isEmpty()){
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  removeFromEnd(){
    if(this.isEmpty()){
      return null
    }
    const value = this.tail.value
    if(this.size === 1){
      this.head = null
      this.tail = null
    }else{
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.size--
    return value
  }

  reverse(){
    if(this.isEmpty()){
      console.log('Empty list');
    }else{
      let curr = this.tail
      let listValues = ''
      while(curr){
        listValues += `${curr.value} `
        curr = curr.prev
      }
      console.log(listValues);
    }
  }

  print(){
    if(this.isEmpty()){
      console.log('Empty list');
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
  }

}

const list = new DoublyLinkedList()
list.prepend(2)
list.print()
list.prepend(1)
list.print()
list.append(3)

list.print()
list.reverse()