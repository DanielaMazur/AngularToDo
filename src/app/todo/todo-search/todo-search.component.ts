import { Component, Output, EventEmitter } from '@angular/core';
import { SearchTodo } from '../todo-interfaces';

@Component({
  selector: 'app-todo-search',
  styleUrls: ['./todo-search.component.scss'],
  templateUrl: './todo-search.component.html',
})
export class TodoSearchComponent {
  searchValue: string;
  byTitle = true;
  placeholder = 'byTitle';
  @Output() searchTodo = new EventEmitter<SearchTodo>();

  onSearch(): void {
    this.searchTodo.emit({
      value: this.searchValue,
      byTitle: this.byTitle,
    });
  }
  filterByTitle() {
    this.byTitle = true;
    this.placeholder = 'byTitle';
    this.searchValue = '';
  }
  filterByDescription() {
    this.byTitle = false;
    this.placeholder = 'byDescription';
    this.searchValue = '';
  }
}
