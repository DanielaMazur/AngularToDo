import { Component, Input } from '@angular/core';
import { Todo, SearchTodo } from '../todo-interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Input() searchTodo: SearchTodo;

  handleTodoDelete(title: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
}
