import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TrackerQuery} from "./state/tracker.query";
import {TrackerService} from "./state/tracker.service";
import {TrackerModel} from "./state/tracker-model";

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html'
})
export class BugTrackerComponent implements OnInit {

  parts$!: Observable<TrackerModel[]>; //or mb TrackerState[] ?
  newTodoValue: string = ""
  isEditing: boolean = false;//move these to an Akita state
  pn_description: string = '';
  editing_this_pn!: TrackerModel;

  constructor(private trackerQuery: TrackerQuery, private trackerService: TrackerService) { }

  ngOnInit(): void {
    this.parts$ = this.trackerQuery.getAllParts()
  }

  addPart() {
    this.trackerService.insertPn(this.pn_description)
    this.pn_description = ''
  }

  deletePart(id: string) {
    this.trackerService.deleteOne(id)
  }

  getOnePart() {

  }

  editPart(part: TrackerModel) {
    this.isEditing = true;
    this.pn_description = part.description
    this.editing_this_pn = part;
  }

  finishEdit() {
    this.trackerService.updateOne(this.editing_this_pn.pn, this.pn_description)
    this.isEditing = false
    this.pn_description = ''
  }

  insertNewParts() {
    this.trackerService.insertNewParts()
  }
  insertMoreParts() {
    this.trackerService.insertMoreParts()
  }

  logData() {
    this.trackerQuery.logAll()
  }

/*  logAll() {
    this.trackerQuery.logAll()
  }

  setAll() {
    this.trackerService.insertNewTodos()
  }

  addTodo() {
    this.trackerService.insertTodo()
  }

  setAllArray() {
    this.trackerService.insertNewTodosArray()
  }

  addTodo2() {
    this.trackerService.insertTodo2()
  }

  deleteOne() {
    this.trackerService.deleteOne()
  }*/


}
