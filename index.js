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
    this.append = function(value){
         if(head){
            let current = head;
            while(current.next != null){
                current = current.next;
            }
            current.next = new Node(value);
        }else{
            head = new Node(value);
        }
        length++;
    }
    this.prepend = function(value){
        if(head){
            let current = head;
            current.next = head.next;
            head = new Node(value);
            head.next = current.next;
        }else{
            head = new Node(value);
        }
        length++; 
    }
    this.size = function(){
        return length;
    }
    this.head = function(){
        return head;
    }
    this.tail = function(){
        if(head){
            let current = head;
            while(current.next != null){
                current = current.next;
            }
            return current;
        }else{
            return head;
        }
    }
    // at(index) returns the node at the given index
    this.at = function(index){
        if(index<=length || index<0){
            let counter = 1;
            let current = head;
            while(counter < index){
                current = current.next;
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
            let current = head;
            let previous;
            while(current.next != null){
                previous = current;
                current = current.next;
            }
            previous = null;
            current = null;
            length--;
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
console.log(test.at(2).value());
console.log(test.at(3).value());
console.log(test.at(1).value());
console.log(test.at(0).value());
console.log(test.at(4));
