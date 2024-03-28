class TrieNode{
  constructor(){
    this.children = {}
    this.endOfWord = false
  }
}

class Trie{
  constructor(){
    this.root = new TrieNode()
  }

  insert(word){
    let current = this.root
    for(const char of word){

      if(!current.children[char]){
        current.children[char] = new TrieNode()
      }

      current = current.children[char]
    }
    current.endOfWord = true
  }

  search(word){
    let node = this.root
    for(let char of word){
      if(!node.children[char]){
        return false
      }
      node = node.children[char]
    }
    return node.endOfWord
  }

  print(node=this.root, currWord=''){
    if(node.endOfWord){
      console.log(currWord);
    }
    for(const char in node.children){
      this.print(node.children[char], currWord+char)
    }
  }

  autoComplete(word){
    let node = this.root
    for(let char of word){

      if(!node.children[char]){
        return []
      }

      node = node.children[char]
    }
    let list = []
    this.collectWord(node, word, list)
    return list
  }

  collectWord(node, word,  list){
    if(node.endOfWord){
      list.push(word)
    }

    for(let char in node.children){
      this.collectWord(node.children[char], word+char, list)
    }
    
  }
}

const trie = new Trie()
trie.insert('akash')
trie.insert('akshara')
console.log(trie.autoComplete('ak'));