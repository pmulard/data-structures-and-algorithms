class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val, node = this.root) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        
        if (val < node.val) {
            if (node.left) {
                return this.insert(val, node.left);
            } else {
                node.left = new Node(val);
                return this;
            }
        }
        
        if (val > this.root.val) {
            if (node.right) {
                return this.insert(val, node.right);
            } else {
                node.right = new Node(val);
                return this;
            }
        }

        return false;
    }

    find(val, node = this.root) {
        if (!node || val == node.val) return node;
        if (val < node.val) return this.find(val, node.left);
        if (val > node.val) return this.find(val, node.right);
    }
}