import {AtodoStore} from "./atodo.store";
import {AtodoQuery} from "./atodo.query";
import {Injectable} from "@angular/core";
import {createTodo, Todo} from "./todo.model";

//service - provides methods to interact(change state) with TodoStore class methods inherited from Akita Store class
//server calls to update state can also be done here

//if you need to read from state, use query

@Injectable({ providedIn: 'root' })
export class AtodoService {

  constructor(private atodoStore: AtodoStore,
              private query: AtodoQuery
  ) {
  }

  deleteTodo(id: string) {
    this.atodoStore.update(storage => {
      return {todos: storage.todos.filter(todo => todo.id !== id)}
    })
  }

  updateTodo(id: string, message: string){
    console.log("update to do: ", id, message)
    this.atodoStore.update( storage => {
      return {todos: storage.todos.map(todo => {
        if (todo.id == id) { return {...todo, message}}
        else return todo
        })}
    })

  }

  addNewTodo(newTodo: string) {
    this.atodoStore.update(storage => {
      console.log(storage.todos)
      const todo = createTodo(newTodo)
      return {todos: [...storage.todos, todo]}
    })
  }

  replaceAllTodos() {
    //replace Store object with new object. This is done for every type of CRUD operation.
    this.atodoStore.update(
      {todos: [
          {
            id: '3',
            message: 'new thing to do',
            completed: false
          },
          {
            id: '4',
            message: 'another new thing to do',
            completed: false
          }
        ]
      })
  }
}
