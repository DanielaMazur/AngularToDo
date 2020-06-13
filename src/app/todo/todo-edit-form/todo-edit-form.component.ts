import { Component, ɵConsole } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TodoService } from 'src/app/service/todo.service';

import { Todo } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit-form.component.html',
  styleUrls: ['./todo-edit-form.component.scss'],
})
export class TodoEditFormComponent {
  todos: Todo[];
  editTodoId: string;
  currentTodo: Todo;
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTodos();
    this.getTodoId();
    this.getCurrentTodo();
    this.initializeForm();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  getTodoId() {
    this.route.params.subscribe((params) => (this.editTodoId = params.id));
  }

  getCurrentTodo() {
    this.currentTodo = this.todos.find((todo) => todo.id === this.editTodoId);
  }

  initializeForm() {
    this.todoForm = this.fb.group({
      title: [this.currentTodo.title, [Validators.required]],
      description: [this.currentTodo.description, [Validators.required]],
      owner: [this.currentTodo.owner, [Validators.required]],
      priority: [this.currentTodo.priority, [Validators.required]],
      deadline: [new Date(this.currentTodo.deadline), [Validators.required]],
    });
  }

  onApplyChanges(): void {
    const todoDetails: Todo = {
      ...this.todoForm.value,
      id: this.currentTodo.id,
    };

    this.todos.map((todo) => {
      if (todo.id === this.currentTodo.id) {
        todo.id = todoDetails.id;
        todo.owner = todoDetails.owner;
        todo.priority = todoDetails.priority;
        todo.title = todoDetails.title;
        todo.description = todoDetails.description;
        todo.deadline = todoDetails.deadline;
      }
    });

    this.router.navigate(['/TodoList']);
  }
}
