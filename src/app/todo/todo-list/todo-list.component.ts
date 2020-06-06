import { Component, Input, OnInit } from '@angular/core';

import { TodoService } from '../../todo-utils/todo.service';

import { Todo, SearchTodo, Priority } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() searchTodo: SearchTodo;
  @Input() filterPriority: Priority;

  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  handleTodoDelete(title: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
}
