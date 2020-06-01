import { Pipe, PipeTransform } from '@angular/core';
import { Todo, SearchTodo } from '../todo/todo-interfaces';

@Pipe({ name: 'search', pure: false })
export class SearchPipe implements PipeTransform {
  transform(todos: Todo[], searchTodo: SearchTodo) {
    if (!searchTodo || todos.length) {
      return todos;
    }

    const filteredTodos = searchTodo.byTitle
      ? todos.filter((todo) =>
          todo.title
            .toLocaleLowerCase()
            .includes(searchTodo.value.toLocaleLowerCase())
        )
      : todos.filter((todo) =>
          todo.description
            .toLocaleLowerCase()
            .includes(searchTodo.value.toLocaleLowerCase())
        );

    return filteredTodos;
  }
}
