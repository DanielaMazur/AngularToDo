import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoEditingDialogComponent } from './todo/todo-editing-dialog/todo-editing-dialog.component';
import { TodoSearchComponent } from './todo/todo-search/todo-search.component';
import { TodoFilterPriorityComponent } from './todo/todo-filter-priority/todo-filter-priority.component';

import { SearchPipe } from './pipes/search.pipe';
import { FilterPriority } from './pipes/filter-priority.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoEditingDialogComponent,
    TodoSearchComponent,
    TodoFilterPriorityComponent,

    SearchPipe,
    FilterPriority,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
