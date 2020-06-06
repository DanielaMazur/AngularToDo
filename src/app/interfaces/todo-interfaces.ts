export interface Todo {
  title: string;
  description: string;
  owner: string;
  priority: string;
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
