class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        
        if (!this.size) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        
        this.size++;
        return this;
    }

    dequeue() {
        if (!this.size) return null;
        
        let oldFront = this.front;
        this.front = oldFront.next;
        oldFront.next = null;
        
        this.size--;
        return oldFront;
    }

    peek() {
        return this.front.val;
    }

    isEmpty() {
        return !this.size();
    }

    clear() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
}