class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val); 
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode; 
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let oldTail = this.tail;  
        
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            oldTail.prev = null;
            this.tail.next = null;
        }

        this.length--;
        return oldTail;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        let mid = Math.floor(this.length / 2),
            current,
            count;
        
        if (index < mid) {
            current = this.head;
            count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }
        } else { // index >= mid
            current = this.tail;
            count = this.length - 1;
            while (count > index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index == 0) return !!this.unshift(val);
        if (index == this.length) return !!this.push(val);
        
        let newNode = new Node(val),
            oldNode = this.get(index);

        if (oldNode) {
            oldNode.prev.next = newNode;
            newNode.prev = oldNode.prev;
            newNode.next = oldNode;
            oldNode.prev = newNode;
            this.length++;
            return true;
        }

        return false;
    }

    remove(index) {
        if (index == 0) return !!this.shift();
        if (index == this.length - 1) return !!this.pop();
        
        let node = this.get(index);
        if (node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.prev = null;
            node.next = null;
            this.length--;
            return true;
        }

        return false;
    }

    reverse() {
        let current = this.head,
            oldHead = current;
        this.head = this.tail;
        
        while (current !== null) {
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }
        
        this.tail = oldHead;
        return this;
    }
}