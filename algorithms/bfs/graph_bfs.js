const BreadthFirstSearchGraph = (root) => {
    let q  = new Queue,
        visited = new Set();
    q.enqeueue(root);

    while (!q.isEmpty()) {
        let node = q.dequeue();
        for (let neighbor of node.neighbors) {
            if (!visited[neighbor]) {
                visited.add(neighbor);
                q.enqueue(neighbor);
            }
        }
    }
}

class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = new Set();
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