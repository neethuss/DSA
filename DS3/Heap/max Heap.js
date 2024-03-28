class MaxHeap {
  constructor() {
    this.values = [];
  }

  //inseting new value to the heap
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  //ensure heap property while insertig
  bubbleUp() {
    let index = this.values.length - 1;
    let value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= value) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  //removing max element
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    
    return max;
  }

  //ensure heap property after max removal
  sinkDown() {
    let index = 0;
    let length = this.values.length;
    while (true) {
      let largest = index;
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      if (leftIndex < length && this.values[largest] < this.values[leftIndex])
        largest = leftIndex;
      if (rightIndex < length && this.values[largest] < this.values[rightIndex])
        largest = rightIndex;

      if (largest === index) break;
      [this.values[largest], this.values[index]] = [
        this.values[index],
        this.values[largest],
      ];
      index = largest;
    }
  }

  //converting array to heap
  heapify(arr) {
    let lastNonLeafNode = Math.floor(arr.length / 2 - 1);
    for (let i = lastNonLeafNode; i >= 0; i--) {
      this.buildHeap(i, arr);
    }
    return arr;
  }

  //ensuring heap property while converting
  buildHeap(index, arr) {
    let largest = index;
    let length = arr.length;
    let leftIndex = 2 * largest + 1;
    let rightIndex = 2 * largest + 2;
    if (leftIndex < length && arr[largest] < arr[leftIndex])
      largest = leftIndex;
    if (rightIndex < length && arr[largest] < arr[rightIndex])
      largest = rightIndex;

    if (largest != index) {
      [arr[largest], arr[index]] = [arr[index], arr[largest]];
      this.buildHeap(largest, arr);
    }
  }


  //heap sort
  heapSort(){
    let sorted = []
    while(this.values.length){
      sorted.unshift(this.extractMax())
    } 
    return sorted
  }

  print() {
    console.log(this.values);
  }
}

const heap = new MaxHeap();
heap.insert(80);
heap.insert(40);
heap.insert(79);
heap.insert(12);
heap.insert(50);
heap.insert(10);
heap.insert(90);
heap.print();
console.log(heap.heapSort());