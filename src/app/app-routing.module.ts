import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoFormComponent } from './todo/todo-form';
import { TodoListComponent } from './todo/todo-list';
import { TodoEditFormComponent } from './todo/todo-edit-form';

const routes: Routes = [
  { path: '', component: TodoFormComponent },
  { path: 'TodoList', component: TodoListComponent },
  { path: 'EditTodo/:id', component: TodoEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
