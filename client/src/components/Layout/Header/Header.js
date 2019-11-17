import React from 'react';
import Container from 'react-bootstrap/Container';
import { LINKS } from 'config';
import Logo from 'components/common/Logo/Logo';
import BootstrapMenu from 'components/common/BootstrapMenu/BootstrapMenu';
import styled from 'styled-components';

const Nav = styled.nav`
  &.navbar {
    padding: 0;
  }
`;

const Header = () => (
  <>
    <Nav className="navbar navbar-expand-lg">
      <Container>
        <Logo />
        <BootstrapMenu links={LINKS} />
      </Container>
    </Nav>
  </>
);

export default Header;
