import { useReducer, createContext } from 'react';

import { userReducer, initialState } from './user.reducer';
import { UserState, UserDispatch } from './user.type';

export const UserStateContext = createContext<UserState>(initialState);
export const UserDispatchContext = createContext<UserDispatch>(() => null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, {
    ...initialState,
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;
