import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditRoutingModule } from './edit-routing.module';
import { TodoEditFormComponent } from '../../todo/todo-edit-form';

import { MaterialModule } from '../../modules/material-module/material-module';
import { TodoService } from '../../service/todo.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodoEditFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    EditRoutingModule,
  ],
  providers: [TodoService],
})
export class EditTodoModule {}
