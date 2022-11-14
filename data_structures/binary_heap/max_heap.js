class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        let current = this.heap.length - 1,
            parent = this.getParentIndex(current);
            
        while (current > 0 && this.heap[current] > this.heap[parent]) {
            this.swap(current, parent);
            current = parent;
            parent = this.getParentIndex(current);
        }
    }

    extractMax() {
        if (!this.heap.length) return;
        
        this.swap(0, this.heap.length - 1);
        let max = this.heap.pop();
        this.bubbleDown(0);
        
        return max;
    }

    bubbleDown(current) {
        let len = this.heap.length;
        if (current >= len || this.isLeaf(current)) return;
        
        let left = this.getLeftChildIndex(current),
            right = this.getRightChildIndex(current),
            max = current;

        // These account for null values in left or right
        if (this.heap[left] > this.heap[max]) max = left;
        if (this.heap[right] > this.heap[max]) max = right;

        if (max !== current) {
            this.swap(current, max);
            this.bubbleDown(max);
        }
    }

    isLeaf(index) {
        let len = this.heap.length;
        return this.getLeftChildIndex(index) >= len && this.getRightChildIndex(index) >= len;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
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

    buildHeap(array) {
        for (let e of array) {
            this.insert(e);
        }
    }
}