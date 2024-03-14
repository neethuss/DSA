let arr = [5,3,7,1,9,2]
let i, j
for(i=0,j=arr.length-1;i<=(arr.length-1)/2;i++,j--){
  arr[i] = arr[i] + arr[j]
  arr[j] = arr[i] - arr[j]
  arr[i] = arr[i] - arr[j]
}
console.log(arr)