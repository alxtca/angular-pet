import { Component, OnInit } from '@angular/core';
import {TodosService} from "../services/todos.service";

@Component({
  selector: 'app-simple-todo',
  templateUrl: './simple-todo.component.html'
})
export class SimpleTodoComponent implements OnInit {
  todos: string[] = ['loading'] //replace with observable in template

  constructor(private todosService: TodosService,) { }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos()
  }

  deleteTodo(td: string) {
    this.todosService.removeTodo(td)
  }

  editTodo(todo: string) {
    this.todosService.setEditing(todo)
  }

  get todos2(): string[] {
    return this.todosService.todos2
  }

}
