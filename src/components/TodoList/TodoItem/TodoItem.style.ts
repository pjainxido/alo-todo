import styled from '@emotion/styled';
import { Input, Button } from '@mui/material';

export const TodoItemWrapper = styled.div`
  display: flex;
`;

export const StyledInput = styled(Input)({
  fontWeight: 400,
  fontSize: '15px',
  padding: '9px 12px 8px',
  borderRadius: '8px',
  lineHeight: '22px',
  flex: 1,
  color: '#5F6E8C',
  backgroundColor: '#DBE2EF',
  '&.Mui-disabled': {
    backgroundColor: '#FFFFFF',
  },
  '& .MuiInputBase-input.Mui-disabled': {
    WebkitTextFillColor: '#2A3249',
  },
});

export const StyledButton = styled(Button)({
  padding: '0 16px',
  fontWeight: '700',
  lineHeight: '36px',
  letterSpacing: '0.0892857em',
});
