import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { TodoService } from '../../todo-utils/todo.service';

import { titleUniquiness } from './validators/title-uniquiness';

import { Todo } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todos: Todo[];
  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  createTodoForm = this.fb.group({
    title: ['', [Validators.required, titleUniquiness]],
    description: ['', [Validators.required]],
    owner: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
  });

  getTodos() {
    this.todos = this.todoService.getTodos();
  }

  onSubmit(): void {
    const {
      title,
      description,
      priority,
      owner,
      deadline,
    } = this.createTodoForm.value;

    this.todos.push({ title, description, priority, owner, deadline });

    this.createTodoForm.reset();
  }
}
