import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubTitle from 'components/common/SubTitle/SubTitle';
import SortingList from 'components/features/SortingList/SortingList';
import ProductList from 'components/features/ProductsList/ProductsList';

const Home = () => (
  <Row>
    <Col lg={3}>
      <SubTitle>Sortuj:</SubTitle>
      <SortingList />
    </Col>
    <Col lg={9}>
      <ProductList />
    </Col>
  </Row>
);

export default Home;
