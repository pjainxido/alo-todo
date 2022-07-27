import { Link } from 'react-router-dom';
import { AppBar, Container, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar
      component='nav'
      style={{
        padding: '8px 0',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        fontSize: 0,
      }}
    >
      <Container>
        <Link to='/'>
          <img src='/logo.svg' alt='colawork logo' />
        </Link>
      </Container>
    </AppBar>
  );
};

export default Header;
