import { guid } from '@datorama/akita';

export interface Todo {
  id: string;
  message: string;
  completed: boolean;
};

export function createTodo(msg: string) {
  return {
    id: guid(),
    message: msg,
    completed: false
  } as Todo;
}
