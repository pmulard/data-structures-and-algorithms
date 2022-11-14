class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        
        if (!this.size) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;
        return this;
    }

    pop() {
        if (!this.size) return undefined;

        let oldTop = this.top;
        this.top = oldTop.next;
        oldTop.next = null;

        this.size--;
        return oldTop;        
    }

    peek() {
        return this.top.val;
    }

    isEmpty() {
        return !this.size;
    }

    clear() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }
}