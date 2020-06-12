import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  isSearching = false;
  isFilter = false;

  onSearchClick() {
    this.isSearching = !this.isSearching;
  }
  onFilterClick() {
    this.isFilter = !this.isFilter;
  }

  searchTodo: string;
  handleSearchTodo(searchValue: string) {
    this.searchTodo = searchValue;
  }
}
