import { useEffect } from 'react';
import { requestMe } from '../../service/todoList';
import {
  useTodoListDispatch,
  useTodoListState,
} from '../../context/TodoListProvider/todoList.hooks';

import TodoList from '../../components/TodoList';
import { ListPageWrapper, TodoListWrapper } from './ListPage.style';

const List = () => {
  const { todoList, doneList } = useTodoListState();
  const dispatch = useTodoListDispatch();

  const loadTodoList = async () => {
    const data = await requestMe();
    if (data.result) {
      dispatch({ type: 'LOAD_TODO', todoList: data.result['todo-list'] });
    }
  };

  useEffect(() => {
    loadTodoList();
  }, []);

  return (
    <ListPageWrapper>
      <TodoListWrapper>
        <TodoList todos={todoList} />
        <TodoList done todos={doneList} />
      </TodoListWrapper>
    </ListPageWrapper>
  );
};

export default List;
