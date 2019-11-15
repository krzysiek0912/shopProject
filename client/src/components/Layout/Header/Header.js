import React from 'react';
import { LINKS } from 'config';
import Logo from 'components/common/Logo/Logo';
import BootstrapMenu from 'components/common/BootstrapMenu/BootstrapMenu';
import styled from 'styled-components';
// import './header.css';

const Nav = styled.nav`
  &.navbar {
    padding: 0;
  }
`;

const Header = () => (
  <>
    <Nav className="navbar navbar-expand-lg">
      <div className="container">
        <Logo />
        <BootstrapMenu links={LINKS} />
      </div>
    </Nav>
  </>
);

export default Header;
