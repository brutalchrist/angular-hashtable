import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HashTable } from './angular-hashtable.class';

describe('HashTable', () => {
  let component: HashTable<string, string>;
  let fixture: ComponentFixture<HashTable<string, string>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
