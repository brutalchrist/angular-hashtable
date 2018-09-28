/*
* This class represents the class definition.
*/
export class HashTable<T, L> {
    private table: any;

    constructor() {
        this.table = {};
    }

    public put(key: T, value: L): HashTable<T, L> {
        this.table['v_' + key] = value;
        return this;
    }

    public get(key: T): L {
        return this.table['v_' + key];
    }

    public getAll(): L[] {
        const vector = Array.from(Object.keys(this.table), k => this.table[k]);
        return vector;
    }

    public getKeys(): string[] {
        const keys = Array.from(Object.keys(this.table), k => k.substring(2));
        return keys;
    }

    public has(key: T): boolean {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    }

    public remove(key: T): HashTable<T, L> {
        delete this.table['v_' + key];
        return this;
    }

    public putArray(key: T, value: L): HashTable<T, L> {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
        return this;
    }

    public getArray(key: T): L {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    }

    public removeArray(key: T, value: L): HashTable<T, L> {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
        return this;
    }

    public hasArray(key: T): boolean {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        } else {
            return false;
        }
    }

    public hasinArray(key: T, value: L): boolean {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        } else {
            return false;
        }
    }

    public size(): number {
        return Object.keys(this.table).length;
    }

    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /***************************************************/
    public forEach(callback): void {
        for (let key in this.table) {
            callback(key.substring(2), this.table[key]);
        }
    }
}
