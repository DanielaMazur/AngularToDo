import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Todo } from '../todo-list/todo-list.component';
import { TodoEditingDialogComponent } from '../todo-editing-dialog/todo-editing-dialog.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() todoDelete = new EventEmitter<number>();

  constructor(public dialog: MatDialog) {}

  onDelete() {
    this.todoDelete.emit(this.index);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodoEditingDialogComponent, {
      data: { title: this.todo.title, description: this.todo.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.todo = result;
    });
  }
}
