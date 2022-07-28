import { Todo } from '../context/TodoListProvider/todoList.type';
import { getCookie } from '../utils/cookie';
import { BASE_URL, ServiceResponse } from './request';

export type TodoListResponse = {
  'current-user': string;
  'todo-list': Todo[];
};

export type MeResponse = ServiceResponse & {
  result: TodoListResponse;
};

export const requestMe = async (): Promise<MeResponse> => {
  const option: RequestInit = {
    headers: {
      Authorization: `Bearer ${getCookie('access_token')}`,
    },
  };

  const res = await fetch(BASE_URL + '/todo/me', option);
  const data = await res.json();
  if (res.ok) {
    console.log(data);
    return data;
  } else {
    throw Error(data);
  }
  // .then(({ msg, result }: MeResponse) => {
  //   return msg === 'success' ? result : [];
  // });
};
