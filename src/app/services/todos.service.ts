import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
//This is a state management class
//it uses mutable variables for state
//and methods to update the state. Methods are used by components after injection
export class TodosService {

  private todos: string[] = ['item1', 'item2', 'item3']
  public todos2: string[] = ['item11', 'item22', 'item33']

  //do these have to be observables? -I don't think so: BehaviorSubject.value can be used?
  private isEditing = new BehaviorSubject<boolean>(false)
  public isEditing$ =  this.isEditing.asObservable()

  private editingItem = new BehaviorSubject<string>("todo do")
  public editingItem$ =  this.editingItem.asObservable()

  editingItemIndex: number = 0


  constructor() { }

  getTodos(): string[] {
    return this.todos
  }

  addTodo(td: string) {
    this.todos.push(td)
  }

  removeTodo(td: string) {
    const index = this.todos.indexOf(td)
    this.todos.splice(index, 1)
  }

  updateTodo() {

  }

  setEditing(todo: string) {
    this.isEditing.next(true)
    this.editingItemIndex = this.todos.indexOf(todo)
    this.editingItem.next(todo)
    console.log("item:", todo)
    console.log("index:", this.editingItemIndex)
  }

  finishEditing(todo: string) {
    this.isEditing.next(false)
    //this.todos[this.editingItemIndex]= todo
    //alt
    this.todos.forEach((item, index) => {
      index == this.editingItemIndex ? this.todos[index] = todo : "else do nothing"
    });
  }

}
