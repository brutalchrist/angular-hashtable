# `angular-hashtable`

An HashTable for Angular

## API

### `put(key: K, value: V): HashTable<K, V>`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });
```

### `get(key: V): V`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // {msg: "Hello World", emoji: "🛸"}
  console.log(table.get('hi'));
```

### `getAll(): V[]`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // [0: {msg: "Hello World", emoji: "🛸"}]
  console.log(table.getAll());
```

### `getKeys(): string[]`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // ['hi']
  console.log(table.getKeys());
```

### `has(key: K): boolean`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // true
  console.log(table.has('hi'));
```

### `remove(key: K): HashTable<K, V>`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });
  table.remove('hi');

  // []
  console.log(this.table.getAll());
```

### `putArray(key: K, value: V): HashTable<K, V>`
```typescript
  const table = new HashTable<string, any>();

  table.putArray('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  table.putArray('hi', {
    msg: 'Hello Space',
    from: '🌎'
  });
```

### `getArray(key: K): V`
```typescript
  const table = new HashTable<string, any>();

  table.putArray('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  table.putArray('hi', {
    msg: 'Hello Space',
    from: '🌎'
  });

  // [
  //    0: {msg: "Hello World", emoji: "🛸"}
  //    1: {msg: "Hello Space", emoji: "🌍"}
  // ]
  console.log(this.table.getArray('hi'));
```

### `removeArray(key: K, value: V): HashTable<K, V>`
```typescript
  const table = new HashTable<string, any>();

  table.putArray('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  table.putArray('hi', {
    msg: 'Hello Space',
    from: '🌎'
  });

  table.remove('hi', 0);

  // [0: {msg: "Hello Space", emoji: "🌍"}]
  console.log(this.table.getArray('hi'));
```

### `hasArray(key: K): boolean`
```typescript
  const table = new HashTable<string, any>();

  table.putArray('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // true
  console.log(this.table.hasArray('hi'));
```

### `hasinArray(key: K, value: V): boolean`

### `size(): number`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    from: '🛸'
  });

  // 1
  console.log(this.table.size());
```

### `forEach(callback): void`
```typescript
  const table = new HashTable<string, any>();

  table.put('hi', {
    msg: 'Hello World',
    emoji: '🛸'
  });

  table.putArray('bye', {
    msg: 'Bye World',
    emoji: '🛸'
  });

  table.putArray('bye', {
    msg: 'Bye Space',
    emoji: '🌎'
  });

  // hi => : {msg: "Hello World", emoji: "🛸"}
  // bye => : [
  //   0: {msg: "Bye World", emoji: "🛸"}
  //   1: {msg: "Bye Space", emoji: "🌎"}
  // ]
  table.forEach((key, value) => {
    console.log(`${key} => :`, value);
  });
```

## Example

```typescript
import { Component } from '@angular/core';
import { HashTable } from 'angular-hashtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  table: HashTable<string, any>;

  constructor() {
    this.table = new HashTable<string, any>();
    this.table.put('hi', {
      msg: 'Hello World',
      from: '🛸'
    });

    if (this.table.has('hi')) {
      console.table(this.table.get('hi'));
    }
  }
}
```