import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from 'components/layout/Header/Header';
import styled from 'styled-components';

const MainDiv = styled(Container)`
  padding-top: 158px;
`;
const MainLayout = ({ children }) => (
  <>
    <Header />
    <MainDiv>{children}</MainDiv>
  </>
);

export default MainLayout;
