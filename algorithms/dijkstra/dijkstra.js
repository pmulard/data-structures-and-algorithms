const Dijkstra = (graph, start, finish) => {
    let q = new PriorityQueue(),
        distances = {},
        prevList = {},
        shortestPath = [];

    // build initial state and objects to hold path data
    for (let v in graph.list) {
        if (v === start) {
            distances[v] = 0;
            q.enqueue(v, 0);
        } else {
            distances[v] = Infinity;
            q.enqueue(v, Infinity);
        }
        prevList[v] = null;
    }

    while (q.queue.length) {
        let current = q.dequeue().val;

        // if finished, start from the finish node and build the shortest path
        if (current == finish) {
            while (prevList[current]) {
                shortestPath.push(current);
                current = prevList[current];
            }
            shortestPath.push(current);
            shortestPath.reverse();
            break;
        }
        
        if (current || distances[current] !== Infinity) {
            // loop over all neighbors for the current node
            for (let neighbor in graph.list[current]) {
                // update the (possible) distance to that neighbor
                let newDistance = distances[current] + neighbor.weight;
                // check if this new distance would be less than the existing one
                if (newDistance < distances[neighbor.node]) {
                    // if so, update the distance and previous node
                    distances[neighbor.node] = newDistance;
                    prevList[neighbor.node] = current;
                    // put node back in queue with its new priority (distance)
                    q.enqueue(neighbor.node, newDistance);
                }
            }
        }
    }

    return finalPath;
}

class WeightedGraph {
    constructor() {
        this.list = {};
    }

    addVertex(v) {
        if (!this.list[v]) this.list[v] = [];
    }

    addEdge(v1, v2, weight) {
        this.list[v1].push({node: v2, weight});
        this.list[v2].push({node: v1, weight});
    }
}

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