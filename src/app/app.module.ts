import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list';
import { TodoItemComponent } from './todo/todo-item';
import { TodoSearchComponent } from './todo/todo-search';
import { TabsComponent } from './todo/todo-tabs';
import { TodoFormComponent } from './todo/todo-form';

import { SearchPipe } from './pipes/search.pipe';
import { MaterialModule } from './modules/material-module/material-module';
import { EditTodoModule } from './todo/todo-edit-form/edit-todo.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoSearchComponent,
    TabsComponent,

    SearchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
