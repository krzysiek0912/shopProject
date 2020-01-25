import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CartList from 'components/features/CartList/CartList';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

const Cart = () => (
  <Container>
    <Row>
      <Col>
        <SectionTitle>Koszyk</SectionTitle>
        <CartList />
      </Col>
    </Row>
  </Container>
);

export default Cart;
