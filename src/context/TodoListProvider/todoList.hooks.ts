import { useContext } from 'react';
import { TodoListDispatchContext, TodoListStateContext } from '.';

export const useTodoListReducer = () => {
  const state = useContext(TodoListStateContext);
  const dispatch = useContext(TodoListDispatchContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return [state, dispatch];
};

export const useTodoListDispatch = () => {
  const dispatch = useContext(TodoListDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
};
