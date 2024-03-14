function recursiveReverse(name,n){
  if(n<=0){
    return ' '
  }
  return name[n-1]+=recursiveReverse(name,n-1)
}
console.log(recursiveReverse('neethu',6));