import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Priority } from '../../interfaces/todo-interfaces';

@Component({
  selector: 'app-filter-priority',
  templateUrl: './todo-filter-priority.component.html',
  styleUrls: ['./todo-filter-priority.component.scss'],
})
export class TodoFilterPriorityComponent {
  @Output() filterPriority = new EventEmitter<Priority>();

  priorities = [Priority.High, Priority.Medium, Priority.Low];

  prioritySelect = new FormControl(null);

  onPriorityChange() {
    this.filterPriority.emit(this.prioritySelect.value);
  }
}
