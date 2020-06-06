import { Pipe, PipeTransform } from '@angular/core';

import { Todo, Priority } from '../interfaces/todo-interfaces';

@Pipe({ name: 'filterPriority' })
export class FilterPriority implements PipeTransform {
  transform(todos: Todo[], priority: Priority) {
    if (!priority) {
      return todos;
    }

    return todos.filter((todo) => todo.priority === priority);
  }
}
