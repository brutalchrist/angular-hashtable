# `angular-hashtable`

An HashTable for Angular

## Use

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
      emoji: '🛸'
    });

    if (this.table.has('hi')) {
      console.table(this.table.get('hi'));
    }
  }
}
```