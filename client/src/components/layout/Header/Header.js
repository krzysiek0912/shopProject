import React from 'react';
import Container from 'react-bootstrap/Container';
import { LINKS } from 'config';
import Logo from 'components/common/Logo/Logo';
import BootstrapMenu from 'components/common/BootstrapMenu/BootstrapMenu';
import styled from 'styled-components';
import device from 'utils/device';

const Nav = styled.nav`
  &.navbar {
    padding: 0;
    @media ${device.mobileM} {
      flex-direction: column;
    }
    @media ${device.laptop} {
      flex-direction: row;
    }
  }
`;

const Header = () => (
  <Container>
    <Nav className="navbar navbar-expand-sm">
      <Logo />
      <BootstrapMenu links={LINKS} />
    </Nav>
  </Container>
);

export default Header;
