import { Component, Input } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: Todo[];

  handleTodoDelete(index: number): void {
    this.todos.splice(index, 1);
  }
}
