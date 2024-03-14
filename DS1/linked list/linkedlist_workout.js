class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size
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
      return console.log('Invalid index') 
    }
    if(index === 0){
      this.prepend(value)
    }else{
      const node = new Node(value)
      let prev = this.head
      for(let i=0; i<index-1 ;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index){
    if(index < 0 || index >= this.size){
     return console.log('Invalid index')
    }
    let removedNode
    if(index === 0){
      removedNode = this.head
      this.head = this.head.next
    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev= prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode
  }

  removeValue(value){
    if(this.isEmpty()){
      return console.log('List is empty')
    }
    if(this.head.value === value){
      this.head = this.head.next
      this.size--
      return value
    }else{
      let prev = this.head
      while(prev.next && prev.next.value!=value){
        prev= prev.next
      }
      if(prev.next){
        let removedNode = prev.next
        prev.next = removedNode.next
        this.size--
        return value
      }else{
        return console.log('No such value found')
      }
    }
  }

  search(value){
    if(this.isEmpty()){
      return console.log('List is empty')
    }else{
      let i = 0
      let curr = this.head
      while(curr){
        if(curr.value === value){
          return console.log('Value is found at the index ',i)
        }else{
          curr = curr.next
          i++
        }
      }
      return console.log('No such value is found in the list')
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

  print(){
    if(this.isEmpty()){
      console.log('List is empty')
    }else{
      let listValues = ''
      let curr = this.head
      while(curr){
       listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}

const list = new LinkedList()
console.log(list.getSize())
list.print()

list.append(10)
list.print()
console.log(list.getSize())

list.append(20)
list.print()
console.log(list.getSize())

list.insert(30,-1)
list.print()

list.insert(30,0)
list.print()

list.insert(40,2)
list.print()
console.log(list.getSize())

list.removeFrom(2)
list.print()
console.log(list.getSize())

list.removeValue(10)
list.print()

list.search(20)

list.print()
list.reverse()
list.print()