class Stack{
  constructor(){
    this.items = []
  }

  push(value){
    this.items.push(value)
  }

  pop(){
    return this.items.pop()
  }

  isEmpty(){
    return this.items.length ===0
  }

  peek(){
    return this.items[this.items.length-1]
  }

  size(){
    return this.items.length
  }

  reverse(string){
    let s=''
    for(let i=0 ;i<string.length ;i++){
      this.items.push(string[i])
    }
    while(!this.isEmpty()){
      s+=this.items.pop()
    }
    return s
  }

  print(){
    if(this.isEmpty()){
      console.log('Stack is empty');
    }else{
      console.log(this.items.toString());
    }
  }

}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());