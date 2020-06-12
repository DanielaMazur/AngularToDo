import { v1 as uuidv1 } from 'uuid';
import { Todo, Priority } from '../interfaces/todo-interfaces';

export const TODOS: Todo[] = [
  {
    id: uuidv1(),
    title: 'Create App',
    description: 'asa',
    priority: Priority.High,
    owner: 'Dana',
    deadline: 'May 13, 2020',
  },
  {
    id: uuidv1(),
    title: 'Create App 2',
    description: 'add Angular Material',
    priority: Priority.Medium,
    owner: 'Dana',
    deadline: 'May 13, 2020',
  },
  {
    id: uuidv1(),
    title: 'Buy Milk',
    description: 'asadilce',
    priority: Priority.Low,
    owner: 'Dana',
    deadline: 'May 13, 2020',
  },
  {
    id: uuidv1(),
    title: 'Create App 0',
    description: 'with ts',
    priority: Priority.High,
    owner: 'Dana',
    deadline: 'May 13, 2020',
  },
];
