import { Component, Input, Inject } from '@angular/core';
import { Todo } from '../todo-interfaces';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-editing-dialog',
  templateUrl: './todo-editing-dialog.component.html',
  styleUrls: ['./todo-editing-dialog.component.scss'],
})
export class TodoEditingDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<TodoEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
