import { Injectable } from '@angular/core';
import {Query, QueryEntity} from '@datorama/akita';
import { TrackerStore, TrackerState } from './tracker.store';
import {Observable} from "rxjs";
import {queryCypressBinding} from "./cypressBinding";

@Injectable({ providedIn: 'root' })
export class TrackerQuery extends QueryEntity<TrackerState> {

  constructor(protected override store: TrackerStore) {
    super(store);
    queryCypressBinding(this);
  }

  logAll() {
    //console.log("selectAll", this.selectAll())
    console.log("getAll", this.getAll())
    //console.log("getAll", this.getAll())
    //console.log("getEntity", this.getEntity('234edfnmm03'))
    //console.log("getAll", this.getAll())
  }

  getAllParts() {
    return this.selectAll()
  }

  getPart(id: string) {
    return this.getEntity(id)
  }

}
