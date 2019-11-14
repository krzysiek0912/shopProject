import React from 'react';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';
import SortingList from 'components/features/SortingList/SortingList';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SectionTitle>Sortuj:</SectionTitle>
          <SortingList />
        </div>
        <div className="col-9">lista produktów</div>
      </div>
    </div>
  );
};

export default Home;
