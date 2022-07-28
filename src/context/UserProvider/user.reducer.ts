import { UserState, UserAction } from './user.type';

const initialState: UserState = {
  isLogin: false,
  user: '',
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLogin: true,
        user: action.user,
      };

    case 'LOGOUT_USER':
      return {
        ...initialState,
      };
    default:
      throw new Error('Action type error');
  }
};

export { initialState, userReducer };
