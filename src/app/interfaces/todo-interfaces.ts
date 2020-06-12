export interface Todo {
  id: string;
  title: string;
  description: string;
  owner: string;
  priority: Priority;
  deadline: string;
}

export interface SearchTodo {
  value: string;
  byTitle: boolean;
}

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}
