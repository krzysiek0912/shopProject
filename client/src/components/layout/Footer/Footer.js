import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LINKS } from 'config';
import FooterMenu from 'components/common/FooterMenu/FooterMenu';
import styled from 'styled-components';

const Copyright = styled.p`
  padding: 0;
`;

const Footer = () => (
  <Container>
    <Row>
      <Col className="order-2 order-sm-0">
        <Copyright className="text-center text-sm-left">All rights reserved</Copyright>
      </Col>
      <FooterMenu links={LINKS} />
    </Row>
  </Container>
);

export default Footer;
