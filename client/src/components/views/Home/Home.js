import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SubTitle from 'components/common/SubTitle/SubTitle';
import SortingList from 'components/features/SortingList/SortingList';
import ProductList from 'components/features/ProductsList/ProductsList';

const Home = () => (
  <Container>
    <Row>
      <Col lg={3}>
        <SubTitle>Sortuj:</SubTitle>
        <SortingList />
      </Col>
      <Col lg={9}>
        <ProductList />
      </Col>
    </Row>
  </Container>
);

export default Home;
