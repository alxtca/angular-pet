import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AtodoStore } from "./atodo.store";
import {AtodoQuery} from "./atodo.query";

//service - provides methods to interact(change state) with TodoStore class methods inherited from Akita Store class
//server calls to update state can also be done here

//if you need to read from state, use query

@Injectable({ providedIn: 'root' })
export class AtodoService {

  constructor(private atodoStore: AtodoStore,
              private query: AtodoQuery
  ) {
  }

  addTodo(td: string) {
    const todos_temp = this.query.getTodosList().todos.concat([td])
    //try to add like so: [...old_todos, td]
    this.atodoStore.update({todos: todos_temp})
  }

  removeTodo(td: string) {
    const index = this.query.getTodosList().todos.indexOf(td)
    let new_todos = this.query.getTodosList().todos
    let tt2 = new_todos.slice(0, index).concat(new_todos.slice(index+1))
    //console.log("resulting array: ", tt2)
    this.atodoStore.update({todos: tt2})

    //slice(start, end) - slices out part of array. create new array. does not affect original
    //splice() -
    //this.todos.splice(index, 1)
  }

  updateTodo(old_todo: string, new_todo: string){
    let new_todos = this.query.getTodosList().todos
    const index = new_todos.indexOf(old_todo)
    //to update:
    new_todos.forEach((item, i) => {
           i == index ? new_todos[index] = new_todo : "else do nothing"
         });
    this.atodoStore.update({todos: new_todos})
  }


}
