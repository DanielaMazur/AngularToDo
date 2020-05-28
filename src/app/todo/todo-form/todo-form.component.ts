import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Todo } from '../todo-interfaces';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Output() todoSubmit = new EventEmitter<Todo>();

  createTodoForm = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null),
  });

  onSubmit(): void {
    this.todoSubmit.emit({
      title: this.createTodoForm.value.title,
      description: this.createTodoForm.value.description,
    });

    this.createTodoForm.reset();
  }
}
