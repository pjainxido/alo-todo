import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUserState } from '../context/UserProvider/user.hooks';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const navigate = useNavigate();
  const { isLogin } = useUserState();

  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      navigate('/list');
    }
  }, [isLogin, navigate]);

  return (
    <>
      <LoginForm />
    </>
  );
};

export default Login;
