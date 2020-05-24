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
    { title: 'Create App 2', description: 'jashjahsja' },
    { title: 'Buy Milk', description: 'asadilce' },
    { title: 'Create App', description: 'asa' },
  ];
  handleTodoSumbmited({ title, description }: Todo): void {
    console.log({ title, description });
    const isTodoAlreadyExists = this.todos.some(
      (todo) => todo.title === title && todo.description === description
    );
    if (!isTodoAlreadyExists) {
      this.todos.push({ title: title, description: description });
    }
  }
}
