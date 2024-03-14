function recursiveSum(arr, n){
  if(n<=0){
    return 0
  }
  return arr[n-1] + recursiveSum(arr, n-1)
}

console.log(recursiveSum([1,2,3], 3));