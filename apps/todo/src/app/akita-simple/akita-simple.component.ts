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
  update_detected = false;

  constructor(private query: AtodoQuery,
              private atodoService: AtodoService
  ) { }

  ngOnInit(): void {
    this.atodos$ = this.query.getAllTodos()
    this.atodos$.subscribe(x => {
      console.log("changes has been detected right?: \n", x)
      //so why does not UI updates in cypress?
      //this did not work either:
      this.update_detected = x.length == 3;
    })
    //this can be explained by App actions:
    //- need to expose AppComponent to force UI to rerender
    //to do that, need to bootstrap entry component manually
    //add this to app.module
    //DoBootstrap, ApplicationRef
    //remove bootstrap: [AppComponent]
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
