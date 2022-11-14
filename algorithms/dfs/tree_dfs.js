const DepthFirstSearchTree = (root) => {
    let stack = new Stack(),
        visited = new Set();
    stack.push(root);

    while (!stack.isEmpty()) {
        let current = stack.pop();

        if (!visited.has(current)) {
            visited.add(current);
                
            for (let child of current.children) {
                        
                if (!visited.has(child)) {
                stack.push(child);
                }
            }
        }
    }
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = new Set();
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        if (this.isFull()) return;
        this.stack.push(element)
    }

    pop() {
        if (this.isEmpty()) return;
        this.container.pop()
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