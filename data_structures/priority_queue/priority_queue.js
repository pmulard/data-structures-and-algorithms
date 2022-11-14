class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val, priority) {
        this.queue.push(new Node(val, priority));
        let current = this.queue.length - 1,
            parent = this.getParentIndex(current);
            
        while (current > 0 && this.queue[current].priority < this.queue[parent].priority) {
            this.swap(current, parent);
            current = parent;
            parent = this.getParentIndex(current);
        }
    }

    dequeue() {
        if (!this.queue.length) return;
        
        this.swap(0, this.queue.length - 1);
        let first = this.queue.pop();
        this.bubbleDown(0);
        
        return first;
    }

    bubbleDown(current) {
        let len = this.queue.length;
        if (current >= len || this.isLeaf(current)) return;
        
        let left = this.getLeftChildIndex(current),
            right = this.getRightChildIndex(current),
            first = current;
        
        if (this.queue[left] && this.queue[left].priority < this.queue[first].priority) first = left;
        if (this.queue[right] && this.queue[right].priority < this.queue[first].priority) first = right;

        if (first !== current) {
            this.swap(current, first);
            this.bubbleDown(first);
        }
    }

    isLeaf(index) {
        let len = this.queue.length;
        return this.getLeftChildIndex(index) >= len && this.getRightChildIndex(index) >= len;
    }

    swap(index1, index2) {
        [this.queue[index1], this.queue[index2]] = [this.queue[index2], this.queue[index1]]
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    buildQueue(array) {
        for (let e of array) {
            this.enqueue(e);
        }
    }
}