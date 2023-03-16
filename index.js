// factory that contains the value function and a list to the nextNode
function Node(element){
    this.value = function(){
        return element;
    }
    this.nextNode = null
}
// factory that represents the full list
function LinkedList(){
    head = null
    length = 0
    // append(value) adds a new node containing value to the end of the list
    this.append = function(value){
         if(head){
            let current = head;
            while(current.nextNode != null){
                current = current.nextNode;
            }
            current.nextNode = new Node(value);
        }else{
            head = new Node(value);
        }
        length++;
    }
    // prepend(value) adds a new node containing value to the start of the list
    this.prepend = function(value){
        if(head){
            let current = head;
            current.nextNode = head.nextNode;
            head = new Node(value);
            head.nextNode = current.nextNode;
        }else{
            head = new Node(value);
        }
        length++; 
    }
    // size returns the total number of nodes in the list
    this.size = function(){
        return length;
    }
    // head returns the first node in the list
    this.head = function(){
        return head;
    }
    // tail returns the last node in the list
    this.tail = function(){
        if(head){
            let current = head;
            while(current.nextNode != null){
                current = current.nextNode;
            }
            return current;
        }else{
            return head;
        }
    }
    // at(index) returns the node at the given index
    this.at = function(index){
        if(index<=length && index>0){
            let counter = 1;
            let current = head;
            while(counter < index){
                current = current.nextNode;
                counter++;
            }
            return current;
        }else{
            return `Error the element cannot be found inside the linked list, please enter a valid index`
        }
    }
    // pop removes the last element from the list
    this.pop = function(){
        if(length ===0){
            return `the list is empty there is no element to be removed!`
        }else{
           /*  let current = head;
            //let previous;
            while(current.nextNode != null){
                //previous = current;
                current = current.nextNode;
            }
            //previous = null;
            length--;
            return current = new Node(null); */
            this.at(length-1).nextNode = null;
            length--;
        }
    }
    // this function shows the linked list elements from head to tail
    this.showElement = function(){
        let current = head;
        while(current.nextNode != null){
            console.log(current.value());
            current = current.nextNode;
            console.log(current.value())
        }
    }
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    // ... code here ...
    this.contains = function(value){
        for(let i = 1;i<=length;i++){
            if(this.at(i).value() === value){
                return true
            }
        }
        return false;
    }
    // find(value) returns the index of the node containing value, or null if not found.
    this.find = function(value){
        for(let i = 1;i<=length;i++){
            if(this.at(i).value() === value){
                return i;
            }
        }
        return null;
    }
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    this.toString = function(){
        if(length ==0){
            return `-> null`
        }{
            let i = 1;
            let listDisplay = '';
            while(this.at(i).nextNode != null){
                listDisplay += `${this.at(i).value()} -> `;
                i++;
            }
            listDisplay += `${this.at(i).value()} -> null`;
            return listDisplay;
            //return `( ${} ) -> ( ${} ) -> ( ${} ) -> null`;
        }
    }
    // insertAt(value, index) that inserts a new node with the provided value at the given index.
    this.insertAt = function(value, index){
        /* let pointToAfterIndex = this.at(index+1);
        let newNode = new Node(value);
        this.at(index) = newNode
        this.at(index-1).nextNode = this.at(index);
        this.at(index).nextNode = pointToAfterIndex; */
        let i = 0;
        let storeValue = []
        //let storeValue = this.at(index+1).value();
        while(this.at(index).nextNode != null){
            //console.log(length);
            storeValue[i] = this.at(length).value();
            //console.log(storeValue[i]);
            this.pop();
            i++;
        }
        //console.log(storeValue);
        this.pop();
        //console.log(`this is length value ${length}`);
        //console.log(storeValue);
        if(length===0){
            this.prepend(value);
        }else{
            this.append(value);
        }
        //console.log(`this is length value ${length}`);
        //console.log(this.toString());
        //this.at(index).value() = value;
        for(let i = storeValue.length-1;i>=0;i--){
            this.append(storeValue[i]);
        }/* 
        this.append(value);
        this.append(storeValue); */
    }
    // removeAt(index) that removes the node at the given index.
    this.removeAt = function(index){
        let i = 0;
        let storeValue = []
        while(this.at(index).nextNode != null){
            storeValue[i] = this.at(length).value();
            this.pop();
            i++;
        }
        this.pop();
        for(let i = storeValue.length-1;i>=0;i--){
            if(length===0){
                this.prepend(storeValue[i]);
            }else{
                this.append(storeValue[i]);
            }
        }
    }

}


let test = new LinkedList();
// testing
console.log(test.size());//0
console.log(test.head());//null
console.log(test.tail());//null
test.append(1);
test.append(2);
test.append(3);
console.log(test.size());//3
// we add the .value() because head is now equal to an object created by an outside constructor name Node.
console.log(test.head().value());//1
console.log(test.tail().value());//3
console.log('another test')
let obj = {prime: 5}
let testNode = new Node(obj);
console.log(testNode);
console.log(testNode.nextNode);//null
console.log(testNode.value());// {prime: 5}
console.log(test);
console.log(`Testing the at function`);
console.log(test.at(2).value());
console.log(test.at(3).value());
console.log(test.at(1).value());
console.log(test.at(5));
console.log(`Testing the pop function`);
console.log(test.size()); // 3
test.pop();
console.log(test.size()); // 2
console.log(test.head().value());//1
console.log(test.tail().value());//2
test.append(3);
console.log(test.head().value());//1
console.log(test.tail().value());//3
console.log(`Testing the at function again`);
console.log(test.at(2).value()); // 2
console.log(test.at(3).value()); // 3
console.log(test.at(1).value()); // 1 
console.log(test.at(0)); // error
console.log(test.at(4));
console.log(`Testing the contains function`)
console.log(test.contains(3)); // true
console.log(test.contains(2)); // true
console.log(test.contains(1)); // true
console.log(test.contains(0)); // false
console.log(test.contains(null)); // false
console.log(`Testing the find function`)
console.log(test.find(3)); // 3
console.log(test.find(2)); // 2
console.log(test.find(1)); // 1
console.log(test.find(0)); // null
console.log(test.find(null)); // null
console.log(`Testing the toString function`)
console.log(test.toString());// 1 -> 2 -> 3 -> null
console.log(`Testing the insertAt function`)
test.insertAt(4,2)
console.log(test.toString());// 1 -> 4 -> 3 -> null
test.insertAt(2,2); // reset
test.insertAt(4,3)
console.log(test.toString());// 1 -> 2 -> 4 -> null
test.insertAt(3,3); // reset
test.insertAt(4,1)
console.log(test.toString());// 4 -> 2 -> 3 -> null
test.insertAt(1,1); // reset
console.log(test.toString());// 1 -> 2 -> 3 -> null
console.log(`Testing the removeAt function`)
console.log('remove element at index 2');
test.removeAt(2)
console.log(test.toString());// 1 -> 3 -> null
test.insertAt(2,2); // reset
test.append(3); // reset
//console.log(test.toString()); // 1 -> 2 -> 3 null
console.log('remove element at index 3');
test.removeAt(3)
console.log(test.toString());// 1 -> 2 -> null
test.append(3); // reset
//console.log(test.toString()); // 1 -> 2 -> 3 null
console.log('remove element at index 1');
test.removeAt(1)
console.log(test.toString());// 2 -> 3 -> null
test.insertAt(1,1); // reset
test.insertAt(2,2); // reset
test.append(3); // reset
console.log(test.toString());// 1 -> 2 -> 3 -> null
