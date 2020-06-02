import { Component } from '@angular/core';
import { Todo } from './todo-interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Todo[] = [
    {
      title: 'Create App',
      description: 'asa',
      priority: 'high',
      owner: 'Dana',
      deadline: 'azi',
    },
    {
      title: 'Create App 2',
      description: 'add Angular Material',
      priority: 'high',
      owner: 'Dana',
      deadline: 'azi',
    },
    {
      title: 'Buy Milk',
      description: 'asadilce',
      priority: 'medium',
      owner: 'Dana',
      deadline: 'azi',
    },
    {
      title: 'Create App',
      description: 'with ts',
      priority: 'high',
      owner: 'Dana',
      deadline: 'azi',
    },
  ];

  handleTodoSumbmited({
    title,
    description,
    priority,
    owner,
    deadline,
  }: Todo): void {
    const isTodoAlreadyExists = this.todos.some(
      (todo) => todo.title === title && todo.description === description
    );

    if (!isTodoAlreadyExists) {
      this.todos.push({ title, description, priority, owner, deadline });
    }
  }

  searchTodo: string;
  handleSearchTodo(searchValue: string) {
    this.searchTodo = searchValue;
  }
}
