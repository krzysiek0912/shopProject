import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const LogoLink = styled(Link)`
  &.navbar-brand {
    padding: 42px 0;
  }
`;

const Logo = () => (
  <LogoLink className="navbar-brand" to="/">
    <img src={logo} alt="logo shop" />
  </LogoLink>
);

export default Logo;
