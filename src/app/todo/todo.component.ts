import { Component } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Todo[] = [
    { title: 'Create App', description: 'asa' },
    {
      title: 'Create App 2',
      description: 'add Angular Material',
    },
    { title: 'Buy Milk', description: 'asadilce' },
    { title: 'Create App', description: 'with ts' },
  ];

  handleTodoSumbmited({ title, description }: Todo): void {
    const isTodoAlreadyExists = this.todos.some(
      (todo) => todo.title === title && todo.description === description
    );
    if (!isTodoAlreadyExists) {
      this.todos.push({ title: title, description: description });
    }
  }
}
