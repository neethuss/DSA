let a = 'neethu'
let modifiedString = ''
for(let i=0;i<a.length;i++){
  if(a[i]==='e'){
    modifiedString+=a[i].toUpperCase()
  }else{
    modifiedString+=a[i]
  }
}
console.log(modifiedString);