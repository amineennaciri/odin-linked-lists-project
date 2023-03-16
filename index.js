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
/* console.log(`A new test`)
let current = LinkedList.head;
console.log(current);
while(current.nextNode != null){
    current = current.nextNode;
    console.log(current)
} */