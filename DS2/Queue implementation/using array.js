class Queue{
  constructor(){
    this.items = []
  }

  isEmpty(){
    return this.items.length === 0
  }

  enqueue(value){
    this.items.push(value)
  }

  dequeue(){
    return this.items.shift()
  }

  peek(){
    return this.items[0]
  }

  print(){
    if(this.isEmpty()){
      console.log('Queue is empty');
    }else{
      console.log(this.items.toString());
    }
  }
  
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(50)
queue.print()