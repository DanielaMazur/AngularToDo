import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-tabs',
  templateUrl: './todo-tabs.component.html',
  styleUrls: ['./todo-tabs.component.scss'],
})
export class TabsComponent {
  navLinks = [
    { path: '', label: 'Create Todo' },
    { path: 'TodoList', label: 'Todo List' },
  ];
}
