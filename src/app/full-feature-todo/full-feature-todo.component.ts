import { Component, OnInit } from '@angular/core';
import {FfTodoQuery} from "./state/ff-todo.query";
import {FfTodoService} from "./state/ff-todo.service";

@Component({
  selector: 'app-full-feature-todo',
  templateUrl: './full-feature-todo.component.html',
  styleUrls: ['./full-feature-todo.component.css']
})
export class FullFeatureTodoComponent implements OnInit {

  constructor(private query: FfTodoQuery, private todoService: FfTodoService) { }

  ngOnInit(): void {
  }

  logState() {
    this.query.logAll()
  }

  addTodos() {
    this.todoService.insertNewParts()
  }
}
