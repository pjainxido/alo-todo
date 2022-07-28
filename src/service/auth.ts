import { BASE_URL, ServiceResponse } from './request';

export type LoginResponse = ServiceResponse & {
  'access_token': string;
};

export const requestLogin = async (id: string, password: string): Promise<LoginResponse> => {
  const options: RequestInit = {
    method: 'POST',
    headers: [['Content-Type', 'application/json']],
    body: JSON.stringify({
      user_id: id,
      user_pw: password,
    }),
  };
  const res = await fetch(BASE_URL + '/todo/login', options);
  const data = await res.json();
  if (res.ok && data.msg) {
    return data;
  } else {
    throw Error(data);
  }
};
