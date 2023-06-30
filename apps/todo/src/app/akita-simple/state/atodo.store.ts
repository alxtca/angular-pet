
import {Store, StoreConfig} from "@datorama/akita";
import { Todo } from "./todo.model";
import {Injectable} from "@angular/core";

//store - provides interface and inherit Akita store class. That's it.

/*
export interface AtodoState {
  todos: string[]
}

export function createInitialState(): AtodoState {
  return {
    todos: ['a-todo1', 'a-todo2', 'a-todo-3']
  }
}
*/

export interface AtodoState {
  todos: Todo[]
}

export function createInitialState(): AtodoState {
  return {
    todos: [
      {
        id: '1',
        message: 'first thing to do',
        completed: false
      },
      {
        id: '2',
        message: 'second thing to do',
        completed: false
      }
    ]
  }
}

@Injectable({ providedIn: 'root'})
@StoreConfig( {name: 'todos1'})
export class AtodoStore extends Store<AtodoState> {

  constructor() {
    super(createInitialState());
  }
}
