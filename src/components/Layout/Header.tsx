import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Container, Typography, Toolbar, Box, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar component='nav' style={{ backgroundColor: '#fff' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Header;
