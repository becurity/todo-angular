import {Todo} from './Todo';

export interface TodoList {
  title: string;
  background: string;
  color: string;
  todos: (Todo)[];
}
