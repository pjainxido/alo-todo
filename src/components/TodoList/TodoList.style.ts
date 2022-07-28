import { Box, styled, Typography, Button } from '@mui/material';

export const TodoBox = styled(Box)({
  width: '370px',
});

export const TodoListTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '1.5',
  marginBottom: '32px',
});

export const RoundButton = styled(Button)({
  width: '40px',
  height: '40px',
  minWidth: '40px',
  padding: '0',
  borderRadius: '56px',
  fontSize: '18px',
});
