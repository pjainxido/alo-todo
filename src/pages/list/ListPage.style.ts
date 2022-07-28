import { Box, styled } from '@mui/material';

export const ListPageWrapper = styled(Box)({
  minHeight: 'calc(100vh - 160px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px 0',
});

export const TodoListWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: '30px',
});
