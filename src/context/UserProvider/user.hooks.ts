import { useContext } from 'react';
import { UserDispatchContext, UserStateContext } from '.';

export const useUserState = () => {
  const state = useContext(UserStateContext);
  return state;
};

export const useUsertDispatch = () => {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
};
