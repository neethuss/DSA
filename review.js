class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
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

  insert(value, index){
    if(index<0 || index>this.size){
      return 
    }
    if(index === 0){
      this.prepend(value)
    }else{
      let prev = this.head
      const node = new Node(value)
      for(let i=0;i,index-1;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index){
    if(index<0 || index >= this.size){
      return
    }
    let removeNode
    if(index===0){
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev = prev.next
      }
      removeNode = prev.next
      prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
  }

  remove(value){
    if(this.isEmpty()){
      return
    }
    if(this.head.value===value){
      this.head = this.head.next
      this.size--
    }else{
      prev = this.head
      while(prev.next && prev.next.value!=value){
        prev = prev.next
      }
      let removeNode = prev.next
      prev.next = removeNode.next
      this.size--
    }
    return null
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  search(value){
    if(this.isEmpty()){
      return
    }
    let i =0
    let curr = this.head
    while(curr){
      if(curr.value === value){
        return i
      }
      curr = curr.next
      i++
    }
    return -1
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

  print(){
    if(this.isEmpty()){
      console.log('Empty list');
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

const list = new LinkedList()
list.print()
list.prepend(1)
list.print()
list.append(2)
list.print()
list.insert(3,1)
list.print()
console.log(list.search(3));
list.reverse()
list.print()