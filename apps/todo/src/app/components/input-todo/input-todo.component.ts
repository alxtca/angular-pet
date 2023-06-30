import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../services/todos.service";
import {UntypedFormControl} from "@angular/forms";

@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html'
})
export class InputTodoComponent implements OnInit {

  //todo: string = '' //two way binding is an option
  todo = new UntypedFormControl('default todo')
  isEditing: boolean = false

  constructor(private todoService: TodosService) {
    this.todoService.isEditing$.subscribe(
      n => this.isEditing = n
    )
  }

  ngOnInit(): void {
    this.todoService.editingItem$.subscribe(
      n => this.todo.setValue(n)
    )
  }

  addTodo() {
    this.todoService.addTodo(this.todo.value)
    this.todo.setValue('')
  }

  updateTodo() {
    this.todoService.finishEditing(this.todo.value)
    this.todo.setValue('')
  }
}
