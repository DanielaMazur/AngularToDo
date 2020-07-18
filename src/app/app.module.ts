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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './service/jwt.interceptor';

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
    HttpClientModule,

    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
