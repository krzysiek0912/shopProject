import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from 'components/layout/Header/Header';
import styled from 'styled-components';

const MainDiv = styled.div`
  padding-top: 158px;
`;
const MainLayout = ({ children }) => (
  <Container>
    <Header />
    <MainDiv>
      <Container>{children}</Container>
    </MainDiv>
  </Container>
);

export default MainLayout;
