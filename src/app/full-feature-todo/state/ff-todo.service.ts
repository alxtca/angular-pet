import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FfTodoStore } from './ff-todo.store';
import { createTodo } from "./ff-todo.model";

@Injectable({ providedIn: 'root' })
export class FfTodoService {

  constructor(private ffTodoStore: FfTodoStore) {
  }

  insertNewParts() {
    const td1 = createTodo('Showel todo')
    const td2 = createTodo('Hammer todo')
    const td3 = createTodo('Chisel todo')
    this.ffTodoStore.add([td1, td2, td3])
  }

  //what is setActive?


}
