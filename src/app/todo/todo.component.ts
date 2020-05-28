import { Component } from '@angular/core';
import { Todo, TodoStatus } from './todo-interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Todo[] = [
    { title: 'Create App', description: 'asa', status: TodoStatus.inactive },
    {
      title: 'Create App 2',
      description: 'add Angular Material',
      status: TodoStatus.inactive,
    },
    { title: 'Buy Milk', description: 'asadilce', status: TodoStatus.done },
    {
      title: 'Create App',
      description: 'with ts',
      status: TodoStatus.inProgress,
    },
  ];

  handleTodoSumbmited({ title, description, status }: Todo): void {
    const isTodoAlreadyExists = this.todos.some(
      (todo) => todo.title === title && todo.description === description
    );

    if (!isTodoAlreadyExists) {
      this.todos.push({
        title,
        description,
        status,
      });
    }

    this.todos = [...this.todos]; // only in this way, ngOnChanges can see that the input changed
  }

  searchTodo: string;
  handleSearchTodo(searchValue: string) {
    this.searchTodo = searchValue;
  }
}
