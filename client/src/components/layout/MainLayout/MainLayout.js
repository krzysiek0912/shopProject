import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
import styled from 'styled-components';
import device from 'utils/device';

const MainDiv = styled(Container)`
  padding-bottom: 40px;
  padding-top: 40px;
  @media ${device.tablet} {
    padding-top: 120px;
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
