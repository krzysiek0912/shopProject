import React from 'react';
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
import styled from 'styled-components';
import device from 'utils/device';

const MainDiv = styled.div`
  padding: 40px 0;
  @media ${device.tablet} {
    padding: 120px 0;
  }
`;
const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className="content-wrapper">
      <MainDiv>{children}</MainDiv>
    </div>
    <Footer />
  </>
);

export default MainLayout;
