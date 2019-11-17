import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import SortingList from 'components/features/SortingList/SortingList';
import ProductList from 'components/features/ProductsList/ProductsList';

const Home = () => (
  <Container>
    <Row>
      <Col lg={3}>
        <SectionTitle>Sortuj:</SectionTitle>
        <SortingList />
      </Col>
      <Col lg={9}>
        <ProductList />
      </Col>
    </Row>
  </Container>
);

export default Home;
