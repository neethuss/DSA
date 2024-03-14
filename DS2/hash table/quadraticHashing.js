class HashTable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }

  hash(key){
    let total = 0
    for(let i=0 ; i<key.length ; i++){
      total += key.charCodeAt(i)
    }
    return total%this.size
  }

  insert(key, value){
    let index = this.hash(key)
    let i = 1
    while(this.table[index]!=undefined){
      if(this.table[index][0]===key){
        this.table[index][1] = value
        return
      }
      index  = (index + (i**2))%this.size
      i++
    }
    this.table[index] = [key, value]
  }

  get(key){
    let index = this.hash(key)
    let i = 1
    while(this.table[index]!=undefined){
      if(this.table[index][0]===key){
        return this.table[index][1]
      }
      index = (index + (i**2)) % this.size
      i++
    }
    return undefined
  }

  remove(key){
    let index = this.hash(key)
    let i = 1
    while(this.table[index] != undefined){
      if(this.table[index][0]===key){
        delete this.table[index]
        return
      }
      index = (index + (i**2)) % this.size
      i++
    }
  }

  display(){
    for(let i=0 ; i<this.table.length ; i++){
      if(this.table[i] != undefined){
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10)
table.insert('name','neethu')
table.insert('age',24)
table.insert('mane','same')
table.insert('eame','nsame')
table.insert('maen','nnsame')
table.display()
console.log(table.get('mane'));
table.remove('name')
table.display()