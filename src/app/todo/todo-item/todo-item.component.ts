import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodoEditingDialogComponent } from '../todo-editing-dialog/todo-editing-dialog.component';

import { Todo } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {}

  onDelete() {
    this.todoDelete.emit(this.todo.title);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoEditingDialogComponent, {
      data: { title: this.todo.title, description: this.todo.description },
    });

    dialogRef.afterClosed().subscribe((result?: Todo) => {
      console.log('The dialog was closed');

      if (result) {
        this.todo = result;
      }
    });
  }
}
