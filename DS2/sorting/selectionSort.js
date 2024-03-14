function selectionSort(arr){
  for(let i=0 ; i<arr.length-1 ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
      if(arr[i]>arr[j]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

let arr = [4,-8,6,1,9,3]
console.log(selectionSort(arr));