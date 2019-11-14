import React from 'react';
import styled from 'styled-components';

import logo from './logo.png';

const LogoLink = styled.a`
  &.navbar-brand {
    padding: 42px 0;
  }
`;

const Logo = () => (
  <LogoLink className="navbar-brand" href="/">
    <img src={logo} alt="logo shop" />
  </LogoLink>
);

export default Logo;
