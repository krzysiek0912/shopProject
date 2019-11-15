import React from 'react';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import SortingList from 'components/features/SortingList/SortingList';
import ProductList from 'components/features/ProductsList/ProductsList';

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-3">
        <SectionTitle>Sortuj:</SectionTitle>
        <SortingList />
      </div>
      <div className="col-9">
        <ProductList />
      </div>
    </div>
  </div>
);

export default Home;
