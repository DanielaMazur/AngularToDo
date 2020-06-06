import { Injectable } from '@angular/core';

import { Todo } from '../interfaces/todo-interfaces';

import { TODOS } from '../mocked-data/mocked-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos(): Todo[] {
    return TODOS;
  }
}
