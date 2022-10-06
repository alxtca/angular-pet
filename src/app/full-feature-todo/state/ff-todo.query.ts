import { Injectable } from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import { FfTodoStore, FfTodoState } from './ff-todo.store';
import {FFTodo} from "./ff-todo.model";

@Injectable({ providedIn: 'root' })
export class FfTodoQuery extends QueryEntity<FfTodoState, FFTodo> {
  //filtersChange$ = this.select(state => state.ui.filters);
  //filtersChange$ = this.select(state => state);

  constructor(protected override store: FfTodoStore) {
    super(store);
  }

  logAll() {
    //console.log("selectAll", this.selectAll())
    console.log("getAll", this.getAll())
    //console.log("getAll", this.getAll())
    //console.log("getEntity", this.getEntity('234edfnmm03'))
    //console.log("getAll", this.getAll())
  }

}
