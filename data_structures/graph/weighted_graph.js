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