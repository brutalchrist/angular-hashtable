/*
* This class represents the class definition.
*/
export class HashTable<T, L> {
    private table: any;
    private id: string;

    constructor(id: string = null, reload: boolean = false) {
        this.table = {};
        this.id = id;

        if (this.id && reload) {
            this.loadFromMemory();
        }
    }

    public put(key: T, value: L) {
        this.table['v_' + key] = value;
    }

    public get(key: T) {
        return this.table['v_' + key];
    }

    public getAll() {
        const vector = Array.from(Object.keys(this.table), k => this.table[k]);
        return vector;
    }

    public getKeys() {
        const keys = Array.from(Object.keys(this.table), k => k.substring(2));
        return keys;
    }

    public has(key: T) {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    }

    public remove(key: T) {
        delete this.table['v_' + key];
    }

    public putArray(key: T, value: L) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
    }

    public getArray(key: T) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    }

    public removeArray(key: T, value: L) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
    }

    public hasArray(key: T) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        } else {
            return false;
        }
    }

    public hasinArray(key: T, value: L) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    private loadFromMemory() {
        // if(localStorage.getItem(this.id)) this.table = localStorage.getItem(this.id);
    }

    public size(): number {
        return Object.keys(this.table).length;
    }
}
