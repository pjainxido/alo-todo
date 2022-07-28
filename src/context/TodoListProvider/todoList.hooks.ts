import { useContext } from 'react';
import { TodoListDispatchContext, TodoListStateContext } from '.';

export const useTodoListState= () => {
  const state = useContext(TodoListStateContext);
  return state;
};

export const useTodoListDispatch = () => {
  const dispatch = useContext(TodoListDispatchContext);
  return dispatch;
};
