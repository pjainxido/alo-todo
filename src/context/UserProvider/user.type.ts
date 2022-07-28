import { Dispatch } from 'react';

export type UserState = {
  isLogin: boolean;
  user: string;
};

export type UserAction = { type: 'LOGIN_USER'; user: string } | { type: 'LOGOUT_USER' };

export type UserDispatch = Dispatch<UserAction>;
