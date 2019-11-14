import React from 'react';
import Header from 'components/layout/Header/Header';
import styled from 'styled-components';

const MainDiv = styled.div`
  padding-top: 158px;
`;
const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <MainDiv>{children}</MainDiv>
    </div>
  );
};

export default MainLayout;
