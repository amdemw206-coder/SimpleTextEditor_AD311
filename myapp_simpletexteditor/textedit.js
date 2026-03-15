
class TextOperation {
  constructor(type, char) {
    this.type = type; 
    this.char = char; 
  }
}; 

class TextEditor{
    constructor(){
        this.text = ""
        this.history = [];
    }
    addCharacter(charToAdd){
        this.text += charToAdd;
        const addChar = new TextOperation('add', charToAdd)
        this.history.push(addChar); 
        console.log(`Added: "${charToAdd}" | Current Text: "${this.text}"`);
    }

    deleteCharacter(){
        const charToDelete = this.text.slice(-1)
        this.text = this.text.slice(0,-1)
        const delChar = new TextOperation('delete', charToDelete)
        this.history.push(delChar); 
        console.log(`Deleted: "${charToDelete}" | Current Text: "${this.text}"`);

    }
    undoCharacter(){
        const charToUndo = this.history.pop()
        if (charToUndo.type === 'add'){
          this.text = this.text.slice(0,-1)
          console.log(`Undo-Add: Removed "${charToUndo.char}"`);  
        }else if (charToUndo.type == 'delete'){
            this.text += charToUndo.char
        console.log(`Undo-Delete: Added "${charToUndo.char}"`)    
        }
    }
    
}; 

const textedit = new TextEditor(); 

// Testing
textedit.addCharacter("H")
textedit.addCharacter("i")
textedit.deleteCharacter()
textedit.undoCharacter()
console.log(textedit.text)