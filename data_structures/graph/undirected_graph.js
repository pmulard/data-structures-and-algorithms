class UndirectedGraph {
    constructor() {
        this.list = {};
    }

    addVertex(v) {
        if (!this.list[v]) {
            this.list[v] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.list[v1] && this.list[v2]) {
            this.list[v1].push(v2);
            this.list[v2].push(v1);
        }
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
        this.list[v2].filter((v) => {
            return v !== v1;
        });
    }
}