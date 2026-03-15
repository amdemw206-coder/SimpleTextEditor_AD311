## Project Title: AD 311 Simple Text Editor with Undo Functionality
#### By: Amde Wubshet

### FAQ: 
- Time Complexity: 1(n) (Constant Time). 
- Space Complexity: 1(n) (Constant Space).

#### How does the script work? 
- This script acts as a simple text editor that allows the user to input text (.addCharacter()), delete the last character (.deleteCharacter()), and undo the last operation (.undoCharacter()). In order for these three methods to work, the script depends on two classes: 
    - *TextOperation*: Represents the operation performed on the text. Includes information about the type of operation (add or delete) and the character involved in the operation. 
    - *TextEditor*: Represents the current state of the text. This is done using these properties: 
        - *this.text*: Where the current characters are stored
        - *this.history*: The stack that houses the TextOperation objects, following the Last In First Out (LIFO) principle. 
        - Also within the text editor are the three methods that add, delete, and undo's characters: 
            - *.addCharacter()*: Method to add a character to the text and record this action on the stack. Requires an input 'charToAdd' string character
            - *.deleteCharacter()*: Method to delete the last character of the text and record this deletion on the stack.
            - *.undoCharacter()*: Method that uses the stack to revert the last operation.    

### Flowchart
![alt text](https://github.com/amdemw206-coder/SimpleTextEditor_AD311/blob/main/Screenshots/FlowchartW7.drawio.svg)