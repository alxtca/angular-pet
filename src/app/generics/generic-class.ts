import { OnInit } from '@angular/core';

export interface DataStructure<T> {
  stack: T[];
  addItem(newItem: T): void;
  popItem(): T | undefined;
}

//generic class
export class GenericsClass<T> implements OnInit, DataStructure<T> {


  constructor() { }

  ngOnInit(): void {
  }

  //stack: string[] = [];
  stack: Array<T> = [];

  addItem(newItem: T): void {
    this.stack.push(newItem)
  }

  popItem(): T | undefined {
    return this.stack.pop();
  }

  peek(): T {
    return this.stack[this.stack.length - 1]
  }

}
