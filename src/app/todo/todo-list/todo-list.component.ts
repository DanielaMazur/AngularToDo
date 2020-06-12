import { Component, Input, OnInit } from '@angular/core';

import { TodoService } from '../../service/todo.service';

import { Todo, SearchTodo } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() searchTodo: SearchTodo;

  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  handleTodoDelete(title: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
}
