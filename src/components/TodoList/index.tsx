import { Stack } from '@mui/material';

import { useTodoListDispatch } from '../../context/TodoListProvider/todoList.hooks';
import { Todo } from '../../context/TodoListProvider/todoList.type';
import { TodoAddButton } from './TodoAddButton';
import TodoItem from './TodoItem';

import { TodoBox, TodoListTitle } from './TodoList.style';

export interface IDone {
  done?: boolean;
}

interface Props extends IDone {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos, done = false }) => {
  const dispatch = useTodoListDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', value: '' });
  };

  return (
    <TodoBox>
      <TodoListTitle sx={{ color: done ? '#0053F4' : '#131924' }}>
        {done ? 'Done' : 'Todo'}
      </TodoListTitle>
      <Stack spacing={4} sx={{ marginBottom: '24px' }}>
        {todos.map((item) => (
          <TodoItem item={item} key={item.id} done={done} />
        ))}
      </Stack>
      {!done && <TodoAddButton onClick={addTodo} disabled={todos.length >= 10} />}
    </TodoBox>
  );
};

export default TodoList;
