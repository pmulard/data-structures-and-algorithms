class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element)
    }

    pop() {
        this.stack.pop()
    }

    peek() {
        if (isEmpty()) return;
        return this.stack[this.stack.length - 1];
    }

    clear() {
        this.stack = [];
    }

    display() {
        console.log(this.stack);
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}