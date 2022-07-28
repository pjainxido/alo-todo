import { useReducer, createContext } from 'react';

import { todoListReducer, initialState } from './todoList.reducer';
import { TodoListState, TodoListDispatch } from './todoList.type';

export const TodoListStateContext = createContext<TodoListState>(initialState);
export const TodoListDispatchContext = createContext<TodoListDispatch>(() => null);

const TodoListProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoListReducer, {
    ...initialState,
  });

  return (
    <TodoListStateContext.Provider value={state}>
      <TodoListDispatchContext.Provider value={dispatch}>
        {children}
      </TodoListDispatchContext.Provider>
    </TodoListStateContext.Provider>
  );
};

export default TodoListProvider;
