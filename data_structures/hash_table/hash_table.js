// JavaScript has built-in hash table functionality in the form of objects {}. These have some restrictions and are limited though, i.e. only strings can be a key. Regardless, objects are a core property of the language. To make up for that lost functionality, JavaScript also has the Map class. The code below is a custom implementation of a hash table, for the sake of showing how one works. This hashing function only works on strings and uses separate chaining for collisions.

class HashTable {
    constructor() {
        this.table = new Array();
    }

    hashString(key) {
        let hash = 0,
            prime = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let val = key[i].charCodeAt(0) - 96;
            hash += Math.abs(val * prime);
        }

        return hash;
    }

    set(key, val) {
        let index = this.hashString(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        let duplicate = false;
        this.table[index].forEach((subEntry) => {
            if (subEntry[0] == key) {
                subEntry[1] = val;
                duplicate = true;
            }
        })

        if (!duplicate) this.table[index].push([key, val]);
    }

    get(key) {
        let index = this.hashString(key),
        slot = this.table[index];

        if (!slot) return undefined;
        if (slot.length == 1) return slot[0][1];
        for (entry in slot) {
            if (entry[0] == key) return entry[1];
        }
    }

    keys() {
        let keys = [];

        this.table.forEach((entry) => {
            if (entry.length == 1) {
                keys.push(entry[0][0]);
            }
            
            if (entry.length > 1) {
                for (let i = 0; i < entry.length; i++) {
                    keys.push(entry[i][0]);
                }
            }
        })

        return keys;
    }

    values() {
        let values = [];

        this.table.forEach((entry) => {
            if (entry.length == 1) {
                values.push(entry[0][1]);
            }
            
            if (entry.length > 1) {
                for (let i = 0; i < entry.length; i++) {
                    values.push(entry[i][1]);
                }
            }
        })

        return values;
    }
}