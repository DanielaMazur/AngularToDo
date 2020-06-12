import { ValidationErrors, FormControl } from '@angular/forms';

import { TodoService } from '../../../service/todo.service';

type TitleUniquiness = (control: FormControl) => ValidationErrors | null;

export const titleUniquiness: TitleUniquiness = (control) => {
  const title: string = control.value;
  let isUnique: Boolean;

  const todoService = new TodoService();
  const todos$ = todoService.getTodos();

  todos$.subscribe(
    (todos) =>
      (isUnique = todos.some(
        (todo) =>
          todo.title.toLowerCase().trim() === title?.toLowerCase().trim()
      ))
  );

  return isUnique ? { notUnique: true } : null;
};
