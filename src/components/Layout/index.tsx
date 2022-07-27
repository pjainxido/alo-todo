import { ReactNode } from 'react';
import Header from './Header';
import { Container, Box } from '@mui/material';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth='sm'>
        <Box sx={{ minHeight: '80vh', marginTop: '10vh' }}>{children}</Box>
      </Container>
    </>
  );
};

export default Layout;
