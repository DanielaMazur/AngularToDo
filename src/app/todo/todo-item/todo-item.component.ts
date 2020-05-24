import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() index: number;
  @Output() todoDelete = new EventEmitter<number>();

  onDelete() {
    this.todoDelete.emit(this.index);
  }
}
