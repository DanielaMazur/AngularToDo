import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Todo, SearchTodo, TodoStatus } from '../todo-interfaces';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges {
  @Input() todos: Todo[];
  @Input() searchTodo: SearchTodo;

  inactiveTodos: Todo[] = [];
  inProgresTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.updateTodos(changes.todos.currentValue);
  }

  updateTodos(todos: Todo[]) {
    this.inactiveTodos = todos.filter(
      (todo) => todo.status === TodoStatus.inactive
    );
    this.inProgresTodos = todos.filter(
      (todo) => todo.status === TodoStatus.inProgress
    );
    this.doneTodos = todos.filter((todo) => todo.status === TodoStatus.done);
  }

  handleTodoDelete(title: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }
}
