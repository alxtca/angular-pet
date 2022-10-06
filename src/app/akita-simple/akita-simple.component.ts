import { Component, OnInit } from '@angular/core';
import {Todo} from "./state/todo.model";
import {Observable} from "rxjs";
import {AtodoQuery} from "./state/atodo.query";
import {AtodoService} from "./state/atodo.service";

@Component({
  selector: 'app-akita-simple',
  templateUrl: './akita-simple.component.html'
})
export class AkitaSimpleComponent implements OnInit {
  //for Akita variation
  atodos$!: Observable<Todo[]>;
  newTodoValue: string = ""
  isEditing: boolean = false;//move these to an Akita state
  todo_message: string = '';
  editing_this_todo!: Todo;
  constructor(private query: AtodoQuery,
              private atodoService: AtodoService
  ) { }

  ngOnInit(): void {
    this.atodos$ = this.query.getAllTodos()
  }

  //with Akita

  //Create
  addTodo_a() {
    this.atodoService.addNewTodo(this.todo_message)
    this.todo_message = ''
  }

  //Read
  //observable subscribed in template

  //Update
  updateTodo_a(){
    this.atodoService.updateTodo(this.editing_this_todo.id, this.todo_message)
  }

  //Delete by id
  deleteTodo_a(id: string) {
    this.atodoService.deleteTodo(id)
  }

  //activate "Edit" screen
  editTodo_a(todo: Todo) {
    this.isEditing = true;
    this.todo_message = todo.message;
    this.editing_this_todo = todo;
  }
  finishEdit_a() {
    this.isEditing = false;
    this.updateTodo_a()
    this.todo_message = ''
  }


  //---------

}
