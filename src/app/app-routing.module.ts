import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoFormComponent } from './todo/todo-form';
import { TodoListComponent } from './todo/todo-list';

const routes: Routes = [
  { path: '', component: TodoFormComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth').then((m) => m.AuthModule),
  },

  { path: 'TodoList', component: TodoListComponent },

  {
    path: 'EditTodo/:id',
    loadChildren: () =>
      import('./todo/todo-edit-form/edit-routing.module').then(
        (m) => m.EditRoutingModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
