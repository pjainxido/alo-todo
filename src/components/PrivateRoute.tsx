import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserState } from '../context/UserProvider/user.hooks';

interface PrivateRouteProps {
  children?: ReactElement; // Router.tsx에서 PrivateRoute가 감싸고 있는 Componet Element
}

export default function PrivateRoute(): React.ReactElement | null {
  const state = useUserState();

  return state.isLogin ? <Outlet /> : <Navigate to='/' />;
}
