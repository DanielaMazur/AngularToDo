import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

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
  inProgressTodos: Todo[] = [];
  doneTodos: Todo[] = [];

  ngOnChanges(changes: SimpleChanges) {
    this.updateTodos(changes.todos?.currentValue);
  }

  updateTodos(todos: Todo[] | null): void {
    if (!todos) {
      return;
    }

    this.inactiveTodos = todos.filter(
      (todo) => todo.status === TodoStatus.inactive
    );
    this.inProgressTodos = todos.filter(
      (todo) => todo.status === TodoStatus.inProgress
    );
    this.doneTodos = todos.filter((todo) => todo.status === TodoStatus.done);
  }

  handleTodoDelete(title: string): void {
    this.todos = this.todos.filter((todo) => todo.title !== title);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
