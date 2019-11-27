import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartList from 'components/features/CartList/CartList';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

const Cart = () => (
  <Row>
    <Col>
      <SectionTitle>Koszyk</SectionTitle>
      <CartList />
    </Col>
  </Row>
);

export default Cart;
