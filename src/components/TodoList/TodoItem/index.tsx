import { useState } from 'react';
import { Todo } from '../../../context/TodoListProvider/todoList.type';
import { useTodoListDispatch } from '../../../context/TodoListProvider/todoList.hooks';
import { IDone } from '..';

import TodoInput from './TodoInput';
import TodoButton from './TodoButton';
import { TodoItemWrapper } from './TodoItem.style';

interface Props extends IDone {
  item: Todo;
  blockRemove?: boolean;
}

const TodoItem: React.FC<Props> = ({ item, done = false, blockRemove = false }) => {
  const [isEdit, setIsEdit] = useState(true);
  const dispatch = useTodoListDispatch();

  const onChangeTodo = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_TODO', todo: { ...item, value: e.target.value } });
  };

  const doneEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const removeTodo = () => {
    dispatch({ type: 'REMOVE_TODO', id: item.id });
  };

  const doneTodo = () => {
    dispatch({ type: 'DONE_TODO', id: item.id });
  };

  return (
    <TodoItemWrapper>
      <TodoInput done={done} isEdit={isEdit} onChangeInput={onChangeTodo} value={item.value} />
      <>
        <TodoButton type='delete' onClick={removeTodo} disabled={blockRemove || done} />
        {isEdit ? (
          <TodoButton type='edit' onClick={doneEdit} disabled={done} />
        ) : (
          <TodoButton type='complete' onClick={doneTodo} disabled={done} />
        )}
      </>
    </TodoItemWrapper>
  );
};

export default TodoItem;
