import { ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';

import { TodoService } from '../../../todo-utils/todo.service';

export const titleUniquiness: ValidatorFn = (
  control: FormControl
): ValidationErrors | null => {
  const todoService = new TodoService();
  const todos = todoService.getTodos();
  const title: string = control.value;

  const isUnique = todos.some(
    (todo) => todo.title.toLowerCase().trim() === title?.toLowerCase().trim()
  );

  return isUnique ? { notUnique: true } : null;
};
