import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { v1 as uuidv1 } from 'uuid';

import { TodoService } from '../../service/todo.service';

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

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  todoForm = this.fb.group({
    title: ['', [Validators.required, titleUniquiness]],
    description: ['', [Validators.required]],
    owner: ['', [Validators.required]],
    priority: ['', [Validators.required]],
    deadline: ['', [Validators.required]],
  });

  onSubmit(): void {
    const todoDetails: Omit<Todo, 'id'> = this.todoForm.value;
    this.todos.push({
      id: uuidv1(),
      ...todoDetails,
    });

    this.todoForm.reset();
  }
}
