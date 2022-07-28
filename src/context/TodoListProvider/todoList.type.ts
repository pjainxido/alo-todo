import { Dispatch } from 'react';

export type Todo = {
  id: number;
  value: string;
};

export type TodoListState = {
  todoList: Todo[];
  doneList: Todo[];
};

export type TodoListAction =
  | { type: 'LOAD_TODO'; todoList: Todo[] }
  | { type: 'ADD_TODO'; value: string }
  | { type: 'REMOVE_TODO'; id: number }
  | { type: 'DONE_TODO'; id: number }
  | { type: 'UPDATE_TODO'; todo: Todo };

export type TodoListDispatch = Dispatch<TodoListAction>;
