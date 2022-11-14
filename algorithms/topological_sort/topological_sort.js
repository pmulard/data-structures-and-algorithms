const topologicalSort = (graph) => {
    let vertices = Object.keys(graph.list),
            visited = new Set();
            sorted = [];

    for (let v of vertices) {
            if (!visited.has(v)) dfs(v);
    }

    const dfs = (v) => {
            for (let neighbor of graph.list[v]) {
                    if (!visited.has(v)) dfs(v);
            }
            visited.add(v);
            sorted.push(v);
    }

    return sorted;
}

class DirectedGraph {
    constructor() {
        this.list = {};
    }

    addVertex(v) {
        if (!this.list[v]) {
            this.list[v] = [];
        }
    }

    addEdge(v1, v2) {
        this.list[v1].push(v2);
    }

    removeVertex(v) {
        let neighbors = this.list[v];
        neighbors.forEach((n) => {
            removeEdge(v, n);
        });
        delete this.list[v];
    }

    removeEdge(v1, v2) {
        this.list[v1].filter((v) => {
            return v !== v2;
        });
    }
}