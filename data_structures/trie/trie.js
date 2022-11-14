class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.completeWord = false;
    }
}

class Trie {
    constructor(wordsList) {
        this.root = new TrieNode(null);

        if (!wordsList) return;
        
        for (let word of wordsList) {
            this.insert(word);
        }
    }

    insert(word) {
        if (!word || !word.length) return;
        
        let current = this.root;
        for (let i = 0; i < word.length; i++) {                
            if (!current.children[word[i]]) {
                current.children[word[i]] = new TrieNode(word[i]);
            }
            current = current.children[word[i]];
            
            if (i == word.length - 1) current.completeWord = true;
        }
    }

    search(word) {
        let current = this.root;

        for (let c of word) {
            if (!current.children[c]) return false;
            current = current.children[c];
        }
        
        if (current.completeWord) return true;
        return false;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let c of prefix) {
            if (!current.children[c]) return false;
            current = current.children[c];
        }

        return this.dfs(current);
    }

    dfs(root) {
        if (!root) return null;
        if (root.completeWord) return true;

        for (let c in root.children) {
            if (this.dfs(root.children[c])) return true;
        }
        
        return false;
    }
}