class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
       
        if (!this.head) {
           this.head = newNode;
           this.tail = this.head;
        } else {
          this.tail.next = newNode;
          this.tail = newNode ;
        }
      
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
      
        let current = this.head;
        let newTail = current;
      
        while (current.next) {
            newTail = current;
            current = current.next;
        }
      
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
      
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
      
        return current;
    }
  
    shift() {
        if(!this.head) return undefined;
      
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
      
        if (this.length === 0) {
            this.tail = null;
        }
      
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
      
        this.length++;
        return this;
    }

    get(index){
        if (index < 0 || index >= this.length) return null;
      
        let count = 0;
        let current = this.head;
        while (count < index) {
            current = current.next;
            count++;
        }
      
        return current;
    }

    set(index, val){
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) return false;

        let prev = this.get(index - 1),
            newNode = new Node(val),
            temp = prev.next;

        prev.next = newNode;
        newNode.next = temp;
        return true;
    }

		remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index == 0) return !!this.shift;
        if (index == this.length - 1) !!this.pop();

        let prev = this.get(index - 1),
            temp = prev.next.next;
        prev.next = temp;
        this.length--;
        return true;
    }

		reverse() {
        let current = this.head,
            prev = null;
        this.tail = this.head;

        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
      
        this.head = prev;
        return prev;
    }
}