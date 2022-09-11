import {Injectable} from "@angular/core";
import {Store, StoreConfig} from "@datorama/akita";

//store - provides interface and inherit Akita store class. That's it.

export interface AtodoState {
  todos: string[]
}

export function createInitialState(): AtodoState {
  return {
    todos: ['a-todo1', 'a-todo2', 'a-todo-3']
  }
}

@Injectable({ providedIn: 'root'})
@StoreConfig( {name: 'todos'})
export class AtodoStore extends Store<AtodoState> {

  constructor() {
    super(createInitialState());
  }
}
