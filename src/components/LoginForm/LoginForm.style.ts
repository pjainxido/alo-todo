// import TextField, Button, { TextFieldProps, ButtonProps } from "@mui/material";
import { TextField, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LoginFormBox = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '370px',
  margin: '0 auto',
  width: '100%',
});

export const LoginTextField = styled(TextField)({
  '.MuiFilledInput-root': {
    backgroundColor: '#F9FBFF',
  },
  '.MuiFilledInput-root.Mui-focused': {
    boxShadow: `0px 12px 24px rgba(0, 83, 244, 0.12)`,
  },
  borderRadius: '8px 8px 0 0',
});

export const LoginButton = styled(Button)({
  padding: '14px 16px',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '36px',
  letterSpacing: '0.0892857em',
  borderRadius: '12px',
  background: '#0053F4',
});

export const LoginFormTitle = styled(Typography)({
  fontSize: '24px',
  lineHeight: '1.5',
  fontWeight: '600',
  marginBottom: '32px',
  color: '#131924',
});
