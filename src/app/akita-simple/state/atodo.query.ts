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
    /*
    : Observable<string[]>
    //console.log("getValue() : ", this.getValue()) //return Array
    //console.log("select('todos') :", this.select('todos')) //return Observable
    return this.select('todos') //I want to return an observable, to subscribe to it in template
     */
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
