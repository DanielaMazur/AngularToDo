import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../interfaces/todo-interfaces';

import { TODOS } from '../mocked-data/mocked-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos(): Observable<Todo[]> {
    return of(TODOS);
  }
}
