import { useState } from 'react';
import { LoginFormBox, LoginButton, LoginFormTitle, LoginTextField } from './LoginForm.style';
import { requestLogin } from '../../service/auth';
import { setCookie } from '../../utils/cookie';
import { Container } from '@mui/system';
import { useUsertDispatch } from '../../context/UserProvider/user.hooks';

export interface ILoginFormData {
  id: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useUsertDispatch();
  const [formValues, setFormValues] = useState<ILoginFormData>({
    id: '',
    password: '',
  });

  const setLoginUser = (userId: string) => {
    dispatch({ type: 'LOGIN_USER', user: userId });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const data = await requestLogin(formValues.id, formValues.password);
      if (data['access_token']) {
        setCookie('access_token', data['access_token'], { path: '/' });
        setLoginUser(formValues.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginFormBox onSubmit={handleSubmit} component='form'>
      <Container disableGutters>
        <LoginFormTitle>로그인</LoginFormTitle>
      </Container>
      <LoginTextField
        fullWidth
        label='이메일'
        variant='filled'
        name='id'
        value={formValues.id}
        onChange={handleChange}
        sx={{ marginBottom: '64px' }}
      />
      <LoginTextField
        fullWidth
        label='비밀번호'
        variant='filled'
        type='password'
        value={formValues.password}
        name='password'
        onChange={handleChange}
        sx={{ marginBottom: '48px' }}
      />
      <LoginButton type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} size='large'>
        로그인
      </LoginButton>
    </LoginFormBox>
  );
};

export default LoginForm;
