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
  table: HashTable<string, string>;

  constructor() {
    this.table = new HashTable<string, string>();
    this.table.put('hi', 'Hello World 🛸');
    console.log(this.table.get('hi'));
  }
}
```