export enum TodoStatus {
  inactive = 'inactive',
  inProgress = 'inProgress',
  done = 'done',
}
export interface Todo {
  title: string;
  description: string;
  status: TodoStatus;
}
export interface SearchTodo {
  value: string;
  byTitle: boolean;
}
