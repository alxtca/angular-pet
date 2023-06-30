import {AtodoState, AtodoStore} from "./atodo.store";
import {Query} from "@datorama/akita";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Todo} from "./todo.model";

//query provides methods to fetch specific data from store(state)

@Injectable({providedIn: 'root'})
export class AtodoQuery extends Query<AtodoState> {

  constructor(protected override store: AtodoStore) {
    super(store);
  }

  getAllTodos(): Observable<Todo[]> {
    //console.log("getValue() : ", this.getValue()) //return Array
    return this.select('todos')
  }

  //other methods that can be made here:
  //get by id

  getTodo(id: string): any {
    return this.getValue().todos.filter(todo => todo.id === id)
  }
  //get by filtering results:
  // filter by message
  // filter by completion
}
