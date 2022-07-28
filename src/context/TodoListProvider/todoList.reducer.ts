import { TodoListState, TodoListAction, Todo } from './todoList.type';

const initialState: TodoListState = {
  todoList: [],
  doneList: [],
};

const TODOLIST_MAX_LENGTH = 10;

const getIdList = (todoList: Todo[]): number[] => {
  return todoList.map((todo) => todo.id);
};

const generateId = (idList: number[]): number => {
  let id = 0;
  while (1) {
    id = Math.floor(Math.random() * 100);
    if (!idList.includes(id)) {
      break;
    }
  }
  return id;
};

const todoListReducer = (state: TodoListState, action: TodoListAction): TodoListState => {
  switch (action.type) {
    case 'ADD_TODO':
      if (todoListReducer.length >= TODOLIST_MAX_LENGTH) return state;
      const todoIdList = getIdList(state.todoList);
      const id = generateId(todoIdList);
      return {
        ...state,
        todoList: [...state.todoList, { id, value: action.value }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter((todo) => action.id !== todo.id),
      };
    case 'DONE_TODO':
      const doneTodo = state.todoList.find((todo) => action.id === todo.id);
      return doneTodo
        ? {
            ...state,
            doneList: [...state.doneList, doneTodo],
            todoList: state.todoList.filter((todo) => action.id !== todo.id),
          }
        : state;
    case 'UPDATE_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => (action.todo.id === todo.id ? action.todo : todo)),
      };
    default:
      throw new Error('Action type error');
  }
};

export { initialState, todoListReducer };
