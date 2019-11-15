import React from 'react';

import Logo from 'components/common/Logo/Logo';
import BootstrapMenu from 'components/common/BootstrapMenu/BootstrapMenu';
import styled from 'styled-components';
// import './header.css';
const links = [
  { id: 1, path: '/', title: 'Home' },
  { id: 2, path: '/faq', title: 'Faq' },
  { id: 3, path: '/regulations', title: 'Regulamin' },
  { id: 4, path: '/contact', title: 'Kontakt' },
];

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
        <BootstrapMenu links={links} />
      </div>
    </Nav>
  </>
);

export default Header;
