import {Injectable} from "@angular/core";
import {AtodoState, AtodoStore} from "./atodo.store";
import {Query} from "@datorama/akita";
import {Observable} from "rxjs";

//query provides methods to fetch specific data from store(state)

@Injectable({providedIn: 'root'})
export class AtodoQuery extends Query<AtodoState> {

  constructor(protected override store: AtodoStore) {
    super(store);
  }

  getAllTodos(): Observable<string[]> {
    //console.log("getValue() : ", this.getValue()) //return Array
    //console.log("select('todos') :", this.select('todos')) //return Observable
    return this.select('todos') //I want to return an observable, to subscribe to it in template
  }

  getTodosList() {
    return this.getValue()
  }

  getOneTodo() {

  }
}
