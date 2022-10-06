import { Injectable } from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {FFTodo} from "./ff-todo.model";
import {VISIBILITY_FILTER} from "../filter/filter.model";

export interface FfTodoState extends EntityState<FFTodo>{
/*  ui: {
    filter: VISIBILITY_FILTER
  };*/
}

const initialState = { //not sure about type
/*  ui: {
    filters: {
      condition: {
        new: false,
        used: false,
        notSpecified: false,
      },
      location: false,
    }
  }*/
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ff-todo' })
export class FfTodoStore extends EntityStore<FfTodoState , FFTodo> {

  constructor() {
    super(initialState);
  }

}
